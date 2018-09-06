<?php
namespace App\Controllers\Admin;

use Core\View;
use App\Models\Users;
use App\Config;
use \Spipu\Html2Pdf\Html2Pdf;
use App\Models\Commande;

class Commandes extends \Core\Controller
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
    public function list()
    {
        Commande::getAll();
        View::renderTemplate("admin/commande_list.twig",['commandes'=>Commande::$commandes_array]);
    }
    public function facture(){
        $commande=Commande::get_by_id($_GET['id']);
        $html2pdf = new Html2Pdf();
        $html2pdf->writeHTML(View::renderEmail('account/facture.twig',['commande'=>$commande]));
        $html2pdf->Output('Facture Commande KingStock n°'.$commande->getId().'.pdf', 'D');
    }
}
