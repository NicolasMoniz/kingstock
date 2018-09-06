<?php

namespace App\Controllers\Admin;

use App\Models\Produits;
use Core\View;
use App\Models\Users;
use App\Config;

class Produit extends \Core\Controller
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
        Produits::get_all();
        View::renderTemplate("admin/produit_list.twig", ['produits' => Produits::$produits_array]);
    }

    public function new()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (Produits::new_produit_form($_POST, $_FILES)) {
                header('Location:' . Config::HOST . '/admin/produit/list');
            }
        } else {
            View::renderTemplate("admin/formulaires/produit_new.twig");
        }
    }

    public function remove()
    {
        Produits::delete($_GET['id']);
        header('Location:' . Config::HOST . '/admin/produit/list');
    }
}
