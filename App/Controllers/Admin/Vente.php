<?php

namespace App\Controllers\Admin;

use App\Models\VenteBougie;
use Core\View;
use App\Models\Users;
use App\Config;
use App\Models\Lots;

class Vente extends \Core\Controller
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
        VenteBougie::getAll();
        View::renderTemplate("admin/vente_list.twig", ['ventes' => VenteBougie::$ventebougie_array]);
    }

    public function active()
    {
        VenteBougie::get_by_id($_GET['id'])->activate();
        header('Location:' . Config::HOST . "/admin/vente/list");
    }

    public function unactive()
    {
        VenteBougie::get_by_id($_GET['id'])->unactivate();
        header('Location:' . Config::HOST . "/admin/vente/list");
    }

    public function new()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (VenteBougie::new_vente_form($_POST)) {
                header('Location:' . Config::HOST . '/admin/vente/list');
            }
        } else {
            Lots::getAll();
            View::renderTemplate("admin/formulaires/vente_new.twig", ['lots' => Lots::$lots_array]);
        }
    }

    public function remove()
    {
        VenteBougie::delete($_GET['id']);
        header('Location:' . Config::HOST . '/admin/vente/list');
    }
}
