<?php

namespace App\Controllers;

use App\Config;
use App\Models\Adresse;
use App\Models\Encheres;
use App\Models\VenteBougie;
use \Core\View;
use App\Models\Lang;
use App\Models\Users;
use App\Models\Helpers;
use App\Models\Produits;
use App\Models\Lots;

class Home extends \Core\Controller
{
    public function index()
    {
        if(isset($_SESSION['co']) and $_SESSION['co']==true) {
            $user=Users::getuserobjet($_SESSION['id_user']);
            $email = $user->getEmail();
            $default = "https://www.somewhere.com/homestar.jpg";
            $size = 40;
            Encheres::getallcurrent();
            VenteBougie::getallcurrent();
            View::renderTemplate('Home/index.twig',["encheres"=>Encheres::$encheres_array,"ventes"=>VenteBougie::$ventebougie_array]);
        }
        else{
            VenteBougie::getallcurrent();
            Encheres::getallcurrent();
            View::renderTemplate('Home/index.twig',["encheres"=>Encheres::$encheres_array,"ventes"=>VenteBougie::$ventebougie_array]);
        }
    }

    public function language()
    {
        $language = $_GET['lang'];
        Lang::getall();
        $yesornot = false;
        foreach (Lang::$lang_array as $langs) {
            if ($language == $langs->getCode()) {
                $_SESSION['lang'] = $language;
                $yesornot = true;
            }
        }
        if ($yesornot == false) {
            $_SESSION['lang'] = "en";
        }
        if (!empty($_SERVER["HTTP_REFERER"])) {
            header('Location:' . $_SERVER["HTTP_REFERER"]);
        } else {
            header('Location:' . Config::HOST);
        }
    }

    public function produit()
    {
        View::renderTemplate('Product/produitdescription.twig');
    }
    public function concept()
    {
        View::renderTemplate('CMS/concept.twig');
    }
    public function confidentialite ()
    {
        View::renderTemplate('CMS/confidentialite.twig');
    }
    public function mentions () {
        View::renderTemplate('CMS/mentions.twig');
    }
    public function politiqueretour () {
        View::renderTemplate('CMS/politique_retour.twig');
    }
    public function contact () {
        View::renderTemplate('CMS/contact.twig');
    }

}