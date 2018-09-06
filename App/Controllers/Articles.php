<?php

namespace App\Controllers;

use App\Config;
use App\Models\Adresse;
use App\Models\Article;
use App\Models\Encheres;
use App\Models\Encheri;
use \Core\View;
use App\Models\Lang;
use App\Models\Users;
use App\Models\Helpers;
use App\Models\Produits;
use App\Models\Lots;

class Articles extends \Core\Controller
{
    public function index()
    {
        $article = Article::get_by_id($_GET['id']);
        View::renderTemplate('CMS/article.twig',["article"=>$article]);
    }

    public function list()
    {
        Article::getAll();
        View::renderTemplate('CMS/article_list.twig',["article"=>Article::$article_array]);
    }

}
