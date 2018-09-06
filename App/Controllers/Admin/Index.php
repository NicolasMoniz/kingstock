<?php
namespace App\Controllers\Admin;

use App\Models\Commande;
use App\Models\Encheres;
use Core\View;
use App\Models\Users;

class Index extends \Core\Controller
{
    protected function before()
    {
        // Make sure an admin user is logged in for example
        if(Users::getuserobjet($_SESSION['id_user'])->getType()->getId()!=1){
            return false;
        }
        else{
            return true;
        }
    }
    public function indexAction()
    {
        Encheres::getallcurrent();
        Commande::getAll();
        Users::getAll();
        View::renderTemplate("admin/home.twig",['commandes'=>Commande::$commandes_array,'users'=>Users::$users_array,'encheres'=>Encheres::$encheres_array]);
    }
}
