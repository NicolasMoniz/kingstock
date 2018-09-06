<?php

namespace App\Controllers;

use App\Config;
use App\Models\Adresse;
use App\Models\Commande;
use App\Models\Encheres;
use App\Models\Encheri;
use \Core\View;
use App\Models\Lang;
use App\Models\Users;
use App\Models\Helpers;
use App\Models\Produits;
use App\Models\Lots;

class Enchere extends \Core\Controller
{
    public function index()
    {
        $enchere = Encheres::get_by_id($_GET['id']);
        View::renderTemplate('Product/encherir.twig',["enchere"=>$enchere]);
    }

    public function desc()
    {
        $enchere = Encheres::get_by_id($_GET['id']);
        Encheres::getallcurrent();
        View::renderTemplate('Product/produitdescription.twig',["enchere"=>$enchere,'encheres'=>Encheres::$encheres_array]);
    }

    public function now(){
        Encheres::getallcurrent();
        View::renderTemplate('Product/encheres-en-cours.twig',["enchere"=>Encheres::$encheres_array]);
    }

    public function after(){
        Encheres::getallafter();
        View::renderTemplate('Product/encheres-a-venir.twig',["enchere"=>Encheres::$encheres_array]);
    }

    public function encherir()
    {
        $result=array();
        $adresse_ip = $_SERVER['REMOTE_ADDR'];
        if(Encheres::get_by_Id($_POST['id_enchere'])->getPrice() < $_POST['price']){
            if(Encheri::encherir($_POST['id_enchere'],$_POST['id_user'],$_POST['price'],$adresse_ip)){
                $en=Encheres::get_by_id($_POST['id_enchere']);
                $result=array("yesornot" => true);
            }
        }
        else{
            $result=array("yesornot" => false, "b" => "banana", "c" => "apple");

        }
        echo json_encode($result);
    }
    public function encherisseurs()
    {
        echo json_encode(Encheri::get_by_id($_POST['id']));
    }

    public function ajax()
    {
        $enchere = Encheres::get_by_id($_POST['id'])->getPrice();
        echo $enchere;
    }

    public function win(){
        if(Encheres::win($_POST['id_enchere'],$_SESSION['id_user']))
        {
            Commande::create_commande_enchere($_POST['id_enchere'],$_SESSION['id_user']);
            $result=array("yesornot" => true);
            echo json_encode($result);
        }
        else{
            $result=array("yesornot" => false);
            echo json_encode($result);
        }
    }

}
