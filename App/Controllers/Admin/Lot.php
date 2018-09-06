<?php

namespace App\Controllers\Admin;

use App\Models\Produits;
use Core\View;
use App\Models\Users;
use App\Config;
use App\Models\Lots;

class Lot extends \Core\Controller
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
        Lots::getall();
        View::renderTemplate("admin/lot_list.twig", ['lots' => Lots::$lots_array]);
    }

    public function new()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (Lots::new_lot_form($_POST)) {
                header('Location:' . Config::HOST . '/admin/lot/list');
            }
        } else {
            Produits::get_all();
            View::renderTemplate("admin/formulaires/lot_new.twig", ['produits' => Produits::$produits_array]);
        }
    }

    public function remove()
    {
        Lots::delete($_GET['id']);
        header('Location:' . Config::HOST . '/admin/lot/list');
    }
}
