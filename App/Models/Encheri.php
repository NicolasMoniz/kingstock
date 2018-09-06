<?php

namespace App\Models;

use PDO;

class Encheri extends \Core\Model
{
    public $id;
    public $user;
    public $prix;
    public $ip;
    public $date;

    public static $encheri_array=array();

    public function __construct($id, $user, $prix, $ip, $date)
    {
        $this->id = $id;
        $this->user = $user;
        $this->prix = $prix;
        $this->ip = $ip;
        $this->date = $date;

        array_push(Encheri::$encheri_array,$this);
    }

    public static function getAll(){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM encheri');
            $stmt->execute();
            $lots = 0;
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                foreach (Lots::$lots_array as $lot) {
                    if ($lot->getId() == $donnees['id_lot']) {
                        $lots = $lot;
                    }
                }
                new Encheres($donnees["id"], $donnees['date_debut'], $donnees['date_fin'], $donnees['pas'], $donnees['etat'], $donnees['prix_depart'], $donnees['date_reglement'], $donnees['date_expedition'], $donnees['prix_final'], $lots);
            }
            return true;

        } catch (\PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function get_by_Id($id){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM encheri where id_enchere=? order by date desc');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            $lots = array();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $en = new Encheri($donnees["id"], $donnees['id_client'], $donnees['prix'], $donnees['ip'], $donnees['date']);
                array_push($lots,$en);
            }
            return $lots;

        } catch (\PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function encherir($id_enchere,$id_user,$price,$ip){
        try {
            $date=date("Y-m-d H:i:s");
            $db = static::getDB();
            $stmt = $db->prepare('INSERT INTO encheri(id_client,id_enchere,prix,ip,date) VALUES (?,?,?,?,?)');
            $stmt->bindparam(1, $id_user, PDO::PARAM_STR);
            $stmt->bindparam(2, $id_enchere, PDO::PARAM_STR);
            $stmt->bindparam(3, $price, PDO::PARAM_STR);
            $stmt->bindparam(4, $ip, PDO::PARAM_STR);
            $stmt->bindparam(5, $date, PDO::PARAM_STR);
            $stmt->execute();
            return true;

        } catch (\PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }


    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }

    /**
     * @return mixed
     */
    public function getPrix()
    {
        return $this->prix;
    }

    /**
     * @param mixed $prix
     */
    public function setPrix($prix)
    {
        $this->prix = $prix;
    }

    /**
     * @return mixed
     */
    public function getIp()
    {
        return $this->ip;
    }

    /**
     * @param mixed $ip
     */
    public function setIp($ip)
    {
        $this->ip = $ip;
    }

    /**
     * @return mixed
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param mixed $date
     */
    public function setDate($date)
    {
        $this->date = $date;
    }


}