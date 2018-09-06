<?php

namespace App\Controllers\Admin;

use App\Models\Article;
use Core\View;
use App\Models\Users;
use App\Config;
use \Spipu\Html2Pdf\Html2Pdf;
use App\Models\Commande;

class Articles extends \Core\Controller
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
        Article::getAll();
        View::renderTemplate("admin/actu_list.twig", ['articles' => Article::$article_array]);
    }

    public function new()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (Article::new_article_form($_POST, $_FILES)) {
                header('Location:' . Config::HOST . '/admin/articles/list');
            }
        } else {
            View::renderTemplate("admin/formulaires/actu_new.twig");
        }
    }

    public function remove()
    {
        Article::delete($_GET['id']);
        header('Location:' . Config::HOST . '/admin/articles/list');
    }
}
