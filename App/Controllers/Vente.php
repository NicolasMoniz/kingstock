<?php

namespace App\Controllers;

use App\Config;
use App\Models\Adresse;
use App\Models\Commande;
use App\Models\Encheres;
use App\Models\VenteBougie;
use \Core\View;
use App\Models\Lang;
use App\Models\Users;
use App\Models\Helpers;
use \GuzzleHttp\Client;
use \Spipu\Html2Pdf\Html2Pdf;

class Vente extends \Core\Controller
{
    public function buy(){
        Commande::create_commande_vente($_SESSION['arraypanier'],$_SESSION['arraypanierqte'],$_SESSION['id_user']);
        $_SESSION['arraypanier']=array();
        $_SESSION['arraypanierqte']=array();
        header('Location:' . Config::HOST."/account/index");
    }

    public function add(){
        $id_vente=$_GET['id'];
        $position=array_search($id_vente,$_SESSION['arraypanier']);
        if($position!==false){
            $_SESSION['arraypanierqte'][$position]=$_SESSION['arraypanierqte'][$position]+1;
        }

        else{
            array_push($_SESSION['arraypanier'],$id_vente);
            array_push($_SESSION['arraypanierqte'],1);
        }
        header('Location:' . Config::HOST."/account/index");
    }

    public function remove(){
        $id_vente=$_GET['id'];
        if (($key = array_search($id_vente,$_SESSION['arraypanier'])) !== false) {
            if($_SESSION['arraypanierqte'][$key]==1){
                unset($_SESSION['arraypanier'][$key]);
                unset($_SESSION['arraypanierqte'][$key]);
            }
            else{
                $_SESSION['arraypanierqte'][$key]=$_SESSION['arraypanierqte'][$key]-1;
            }

        }
        header('Location:' . Config::HOST."/account/index");
    }


    public function now(){
        VenteBougie::getallcurrent();
        View::renderTemplate('Product/vente-bougie-en-cours.twig',["enchere"=>VenteBougie::$ventebougie_array]);
    }

    public function desc()
    {
        $vente = VenteBougie::get_by_id($_GET['id']);
        VenteBougie::getallcurrent();
        View::renderTemplate('Product/vente.twig',["enchere"=>$vente,'ventes'=>VenteBougie::$ventebougie_array]);
    }

}