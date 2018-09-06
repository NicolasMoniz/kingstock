<?php

namespace App\Models;

use PDO;

class Commande extends \Core\Model
{
    private $id;
    private $date_reglement;
    private $date_achat;
    private $type;
    private $details;
    private $user;

    public static $commandes_array = array();

    public function __construct($id, $date_reglement, $date_achat, $type, $details,$user)
    {
        $this->id = $id;
        $this->date_reglement = $date_reglement;
        $this->date_achat = $date_achat;
        $this->type = $type;
        $this->details = $details;
        $this->user=$user;

        array_push(Commande::$commandes_array, $this);
    }

    public static function get_by_id($id)
    {
        try {
            Users::getAll();
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM commandes where id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            $commande = false;
            $details = array();
            $user=false;
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $details = Commande_details::get_detail($donnees['id']);
                foreach(Users::$users_array as $u){
                    if($u->getId()==$donnees['id_user']){
                        $user=$u;
                    }
                }
                $commande = new Commande($donnees["id"], $donnees['date_reglement'], $donnees['date_achat'], $donnees['type'], $details,$user);
            }
            return $commande;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function getAll()
    {
        try {
            Users::getAll();
            Commande::$commandes_array=array();
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM commandes');
            $stmt->execute();
            $details = array();
            $user=false;
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $details = Commande_details::get_detail($donnees['id']);
                foreach(Users::$users_array as $u){
                    if($u->getId()==$donnees['id_user']){
                        $user=$u;
                    }
                }
                new Commande($donnees["id"], $donnees['date_reglement'], $donnees['date_achat'], $donnees['type'], $details,$user);
            }
            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function get_for_user($id)
    {
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM commandes where id_user=?');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            $commandes = array();
            $details = array();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $details = Commande_details::get_detail($donnees['id']);
                array_push($commandes, new Commande($donnees["id"], $donnees['date_reglement'], $donnees['date_achat'], $donnees['type'], $details,false));
            }
            return $commandes;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function create_commande_vente($array_produits, $array_quantite, $id_user)
    {
        try {
            $type = 1;
            $date = new \DateTime("now");
            $date = $date->format('Y-m-d H:i:s');
            $db = static::getDB();
            $stmt = $db->prepare('INSERT INTO commandes(type,date_achat,id_user) values (?,?,?)');
            $stmt->bindparam(1, $type, PDO::PARAM_STR);
            $stmt->bindparam(2, $date, PDO::PARAM_STR);
            $stmt->bindparam(3, $id_user, PDO::PARAM_STR);
            $stmt->execute();
            $id_commande = $db->lastInsertId();
            for ($i = 0; $i < count($array_produits); $i++) {
                $vente = VenteBougie::get_by_id($array_produits[$i]);
                $nom_produit = $vente->getLot()->getNom();
                $prix = $vente->getPrix();
                $stmt = $db->prepare('INSERT INTO details(produit,qte,id_commande,prix) values (?,?,?,?)');
                $stmt->bindparam(1, $nom_produit, PDO::PARAM_STR);
                $stmt->bindparam(2, $array_quantite[$i], PDO::PARAM_STR);
                $stmt->bindparam(3, $id_commande, PDO::PARAM_STR);
                $stmt->bindparam(4, $prix, PDO::PARAM_STR);
                $stmt->execute();
            }
            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function create_commande_enchere($id_enchere, $id_user)
    {
        try {
            $type = 2;
            $date = new \DateTime("now");
            $date = $date->format('Y-m-d H:i:s');
            $db = static::getDB();
            $stmt = $db->prepare('INSERT INTO commandes(type,date_achat,id_user) values (?,?,?)');
            $stmt->bindparam(1, $type, PDO::PARAM_STR);
            $stmt->bindparam(2, $date, PDO::PARAM_STR);
            $stmt->bindparam(3, $id_user, PDO::PARAM_STR);
            $stmt->execute();
            $id_commande = $db->lastInsertId();
            $enchere = Encheres::get_by_id($id_enchere);
            $nom_produit = $enchere->getLot()->getNom();
            $prix = $enchere->getPrice();
            $stmt = $db->prepare('INSERT INTO details(produit,qte,prix,id_commande) values (?,1,?,?)');
            $stmt->bindparam(1, $nom_produit, PDO::PARAM_STR);
            $stmt->bindparam(2, $prix, PDO::PARAM_STR);
            $stmt->bindparam(3, $id_commande, PDO::PARAM_STR);
            $stmt->execute();
            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    /**
     * @return mixed
     */
    public
    function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public
    function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public
    function getDateReglement()
    {
        return $this->date_reglement;
    }

    /**
     * @param mixed $date_reglement
     */
    public
    function setDateReglement($date_reglement): void
    {
        $this->date_reglement = $date_reglement;
    }

    /**
     * @return mixed
     */
    public
    function getDateAchat()
    {
        return $this->date_achat;
    }

    /**
     * @param mixed $date_achat
     */
    public
    function setDateAchat($date_achat): void
    {
        $this->date_achat = $date_achat;
    }

    /**
     * @return mixed
     */
    public
    function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public
    function setType($type): void
    {
        $this->type = $type;
    }

    /**
     * @return mixed
     */
    public function getDetails()
    {
        return $this->details;
    }

    /**
     * @param mixed $details
     */
    public function setDetails($details): void
    {
        $this->details = $details;
    }

    /**
     * @return Users|bool
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param Users|bool $user
     */
    public function setUser($user): void
    {
        $this->user = $user;
    }



}