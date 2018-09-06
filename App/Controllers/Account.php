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

class Account extends \Core\Controller
{
    public function index()
    {

        if (isset($_SESSION['co']) and $_SESSION['co'] == true) {
            $user = Users::getuserobjet($_SESSION['id_user']);
            $en = Encheres::get_current_for_user($user->getId());
            $ventes=array();
            foreach($_SESSION['arraypanier'] as $value){
                array_push($ventes,VenteBougie::get_by_id($value));
            }
            $commande=Commande::get_for_user($_SESSION['id_user']);
            View::renderTemplate('Account/moncompte.twig', ['user' => $user,'enchereencour'=>$en,'ventes'=>$ventes,'commande'=>$commande]);
        } else {
            header('Location:' . Config::HOST);
        }

    }

    public function facture(){
        $commande=Commande::get_by_id($_GET['id']);
        $user=Users::getuserobjet($_SESSION['id_user']);
        $html2pdf = new Html2Pdf("p","A4","fr");
        $html2pdf->writeHTML(View::renderEmail('Account/facture.twig',['commande'=>$commande,'user'=>$user]));
        $html2pdf->Output('Facture Commande KingStock n°'.$commande->getId().'.pdf', 'D');
    }

    public function login()
    {
        $_POST = array_map('htmlspecialchars', $_POST);
        $error = '';
        $id_error = '';
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            $client = new Client([
                'base_uri' => 'https://google.com/recaptcha/api/'
            ]);

            $responseMessage = $client->request('POST', 'siteverify', [
                'query' => [
                    'secret' => Config::CAPTCHA_Secret,
                    'response' => $_POST['g-recaptcha-response'],
                    'remoteip' => $_SERVER['REMOTE_ADDR']
                ]
            ]);

            $responseJSON = json_decode($responseMessage->getBody()->getContents(), JSON_OBJECT_AS_ARRAY);

            if (!$responseJSON['success']) {
                $error .= 'Captcha Incorrecte<br>';
                $id_error .= '';
                View::renderTemplate('home/connexion.twig', ['error' => $error, 'id_error' => $id_error, 'post' => $_POST]);
            }

            if (!preg_match('/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/iD', $_POST["mail"])) {
                $error .= 'Email incorrect<br>';
            }
            $etat = Users::getuser($_POST['mail'], sha1($_POST['mdp']));
            if (is_object($etat)) {
                $_SESSION['id_user'] = $etat->getId();
                $_SESSION['admin']=$etat->getType()->getId();
                $_SESSION['co'] = true;
                $_SESSION['arraypanier']=array();
                $_SESSION['arraypanierqte']=array();
                header('Location:' . Config::HOST);
            } else {
                if ($etat == false) {
                    $error .= 'Email ou mot de passe incorrect<br>';
                }
                if ($etat == 3) {
                    $error .= 'Compte en cours de vérification<br>';
                }
                if ($error) {
                    View::renderTemplate('home/connexion.twig', ['error' => $error, 'id_error' => $id_error, 'post' => $_POST]);
                }
            }
        } else {
            View::renderTemplate('home/connexion.twig', ['error' => $error, 'id_error' => $id_error, 'post' => $_POST]);
        }
    }

    public function logout()
    {
        session_destroy();
        header('Location:' . Config::HOST);
    }

    public function register()
    {
        $_POST = array_map('htmlspecialchars', $_POST);
        $error = '';
        $id_error = '';

        if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            $client = new Client([
                'base_uri' => 'https://google.com/recaptcha/api/'
            ]);

            $responseMessage = $client->request('POST', 'siteverify', [
                'query' => [
                    'secret' => Config::CAPTCHA_Secret,
                    'response' => $_POST['g-recaptcha-response'],
                    'remoteip' => $_SERVER['REMOTE_ADDR']
                ]
            ]);

            $responseJSON = json_decode($responseMessage->getBody()->getContents(), JSON_OBJECT_AS_ARRAY);

            if (!$responseJSON['success']) {
                $error .= 'Email incorrect<br>';
                $id_error .= 'mail_societe;';
                View::renderTemplate('home/inscription.twig', ['error' => $error, 'id_error' => $id_error, 'post' => $_POST]);
            }

            if (!preg_match('/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/iD', $_POST["mail_societe"])) {
                $error .= 'Email incorrect<br>';
                $id_error .= 'mail_societe;';
            }

            if (!Helpers::is_siret($_POST["id_societe"])) {
                $error .= 'Siret incorrect<br>';
                $id_error .= 'id_societe;';
            }
            if (!Users::exist_user($_POST["id_societe"], $_POST['mail_societe'])) {
                $error .= 'Entreprise déjà enregistrer<br>';
            }
            if (empty($_POST['nom_societe'])) {
                $error .= 'Nom incorrect<br>';
                $id_error .= 'nom_societe;';
            }
            if (!preg_match('/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/', $_POST['tel_societe'])) {
                $error .= 'Téléphone incorrect<br>';
                $id_error .= 'tel_societe;';
            }
            if (empty($_POST['pays'])) {
                $error .= 'Pays incorrect<br>';
                $id_error .= 'pays;';
            }
            if (empty($_POST['mdp_societe']) == empty($_POST['confirme_mdp'])) {
                $error .= 'Mot de passe incorrect<br>';
                $id_error .= 'mdp_societe;';
                $id_error .= 'confirme_mdp;';
            }
            if (strlen($_POST['mdp_societe'])<8) {
                $error .= 'Mot de passe trop court<br>';
                $id_error .= 'mdp_societe;';
                $id_error .= 'confirme_mdp;';
            }
            if (empty($_POST['rue_adresse_facturation'])) {
                $error .= 'Rue de Facturation incorrect<br>';
                $id_error .= 'rue_adresse_facturation;';
            }
            if (empty($_POST['cp_facturation'])) {
                $error .= 'Code postal de Facturation incorrect<br>';
                $id_error .= 'cp_facturation;';
            }
            if (empty($_POST['ville_facturation'])) {
                $error .= 'Ville de Facturation incorrect<br>';
                $id_error .= 'ville_facturation;';
            }
            if (empty($_POST['rue_adresse_livraison'])) {
                $error .= 'Rue de Livraison incorrect<br>';
                $id_error .= 'rue_adresse_livraison;';
            }
            if (empty($_POST['cp_livraison'])) {
                $error .= 'Code postal de Livraison incorrect<br>';
                $id_error .= 'cp_livraison;';
            }
            if (empty($_POST['ville_livraison'])) {
                $error .= 'Ville de Livraison incorrect<br>';
                $id_error .= 'ville_livraison;';
            }
            if (empty($_POST['num_bic'])) {
                $error .= 'BIC incorrect<br>';
                $id_error .= 'num_bic;';
            }
            if (empty($_POST['iban'])) {
                $error .= 'IBAN incorrect<br>';
                $id_error .= 'iban;';
            }
            if ($error) {
                View::renderTemplate('home/inscription.twig', ['error' => $error, 'id_error' => $id_error, 'post' => $_POST]);
            } else {
                //form valide
                $id_adresse_facturation = Adresse::createadress($_POST['rue_adresse_facturation'], $_POST['cp_facturation'], $_POST['ville_facturation'], $_POST['pays']);
                $id_adresse_livraison = Adresse::createadress($_POST['rue_adresse_livraison'], $_POST['cp_livraison'], $_POST['ville_livraison'], $_POST['pays']);
                $id_user = Users::createuser($_POST['mail_societe'], sha1($_POST['mdp_societe']), $_POST['nom_societe'], $id_adresse_facturation, $id_adresse_livraison, $_POST['id_societe'], $_POST['iban'], $_POST['num_bic'], 0,$_POST['tel_societe']);
                header('Location:' . Config::HOST .'/Account/login');
            }
        } else {
            View::renderTemplate('home/inscription.twig', ['error' => $error, 'id_error' => $id_error, 'post' => $_POST]);
        }
    }

    public function forgot()
    {
        $_POST = array_map('htmlspecialchars', $_POST);
        $error = '';
        $id_error = '';

        if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            if (!preg_match('/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/iD', $_POST["mail_societe"])) {
                $error .= 'Email incorrect<br>';
                $id_error .= 'mail_societe;';
            }
            elseif(!Users::exist_account($_POST['mail_societe'])){
                $error .= 'Cet Email ne corespond à aucun compte<br>';
                $id_error .= 'mail_societe;';
            }
            if ($error) {
                View::renderTemplate('account/forgot.twig', ['error' => $error, 'id_error' => $id_error, 'post' => $_POST]);
            } else {
                //form valide
                $token=Users::generatetoken($_POST['mail_societe']);
                $message = (new \Swift_Message('Reset Password'))
                    ->setFrom(['admin@kingstock.fr' => 'KingStock'])
                    ->setTo($_POST['mail_societe'])
                    ->setBody(View::renderEmail('mail/forgot.twig',['token'=>$token]))
                ;
                $result = Helpers::mail()->send($message);

                View::renderTemplate('account/forgot.twig', ['error' => $error, 'id_error' => $id_error, 'post' => $_POST,'yesornot' => 1]);
            }
        } else {
            View::renderTemplate('account/forgot.twig', ['error' => $error, 'id_error' => $id_error, 'post' => $_POST]);
        }
    }

    public function reset(){
        $token=$_GET['token'];
        $_POST = array_map('htmlspecialchars', $_POST);
        $error = '';
        $id_error = '';

        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if(Users::resetpassword($token,$_POST['newpassword'])){
                Users::removetokenemail($token);
                header('Location:' . Config::HOST .'/Account/login');
            }
        }
        else{
            View::renderTemplate('account/resetpassword.twig');
        }

    }

}