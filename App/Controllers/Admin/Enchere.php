<?php

namespace App\Controllers\Admin;

use App\Models\Encheres;
use App\Models\Lots;
use Core\View;
use App\Models\Users;
use App\Config;

class Enchere extends \Core\Controller
{
    protected function before()
    {
        // Make sure an admin user is logged in for example
        if (Users::getuserobjet($_SESSION['id_user'])->getType()->getId() != 1) {
            return false;
        } else {
            return true;
        }
    }

    public function list()
    {
        Encheres::getAll();
        View::renderTemplate("admin/enchere_list.twig", ['encheres' => Encheres::$encheres_array]);
    }

    public function active()
    {
        Encheres::get_by_id($_GET['id'])->activate();
        header('Location:' . Config::HOST . "/admin/enchere/list");
    }

    public function unactive()
    {
        Encheres::get_by_id($_GET['id'])->unactivate();
        header('Location:' . Config::HOST . "/admin/enchere/list");
    }

    public function new()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (Encheres::new_enchere_form($_POST)) {
                header('Location:' . Config::HOST . '/admin/enchere/list');
            }
        } else {
            Lots::getAll();
            View::renderTemplate("admin/formulaires/enchere_new.twig", ['lots' => Lots::$lots_array]);
        }
    }

    public function remove()
    {
        Encheres::delete($_GET['id']);
        header('Location:' . Config::HOST . '/admin/enchere/list');
    }
}
