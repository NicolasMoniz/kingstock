<?php

namespace App\Models;

use PDO;

class Encheres extends \Core\Model
{
    private $id;
    private $date_debut;
    private $date_fin;
    private $pas;
    private $etat;
    private $prix_depart;
    private $date_reglement;
    private $date_expedition;
    private $prix_final;
    private $lot;
    private $encheres;

    public static $encheres_array = array();

    public function __construct($id, $date_debut, $date_fin, $pas, $etat, $prix_depart, $date_reglement, $date_expedition, $prix_final, $lot)
    {
        $this->id = $id;
        $this->date_debut = $date_debut;
        $this->date_fin = $date_fin;
        $this->pas = $pas;
        $this->etat = $etat;
        $this->prix_depart = $prix_depart;
        $this->date_reglement = $date_reglement;
        $this->date_expedition = $date_expedition;
        $this->prix_final = $prix_final;
        $this->lot = $lot;


        array_push(Encheres::$encheres_array, $this);
        $this->getPrice();
    }

    public static function getallcurrent()
    {
        try {
            Encheres::$encheres_array = array();
            Lots::getall();
            $db = static::getDB();
            $now = new \DateTime();
            $now = $now->format("Y-m-d H:i:s");
            $stmt = $db->prepare('SELECT * FROM encheres where etat=1 and date_debut<=? and date_fin>=?');
            $stmt->bindparam(1, $now, PDO::PARAM_STR);
            $stmt->bindparam(2, $now, PDO::PARAM_STR);
            $stmt->execute();
            $lots = 0;
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                foreach (Lots::$lots_array as $lot) {
                    if ($lot->getId() == $donnees['id_lot']) {
                        $lots = $lot;
                    }
                }
                new Encheres($donnees["id"], $donnees['date_debut'], $donnees['date_fin'], $donnees['pas'], $donnees['etat'], $donnees['prix_depart'], $donnees['date_reglement'], $donnees['date_expedition'], $donnees['prix_final'], $lots);
                $lots = 0;
            }
            return true;

        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function getAll()
    {
        try {
            Encheres::$encheres_array = array();
            Lots::getall();
            $db = static::getDB();
            $now = new \DateTime();
            $now = $now->format("Y-m-d H:i:s");
            $stmt = $db->prepare('SELECT * FROM encheres');
            $stmt->execute();
            $lots = 0;
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                foreach (Lots::$lots_array as $lot) {
                    if ($lot->getId() == $donnees['id_lot']) {
                        $lots = $lot;
                    }
                }
                new Encheres($donnees["id"], $donnees['date_debut'], $donnees['date_fin'], $donnees['pas'], $donnees['etat'], $donnees['prix_depart'], $donnees['date_reglement'], $donnees['date_expedition'], $donnees['prix_final'], $lots);
                $lots = 0;
            }
            return true;

        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function getallafter()
    {
        try {
            Encheres::$encheres_array = array();
            Lots::getall();
            $db = static::getDB();
            $now = new \DateTime();
            $now = $now->format("Y-m-d H:i:s");
            $stmt = $db->prepare('SELECT * FROM encheres where etat=1 and date_debut>=?');
            $stmt->bindparam(1, $now, PDO::PARAM_STR);
            $stmt->execute();
            $lots = 0;
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                foreach (Lots::$lots_array as $lot) {
                    if ($lot->getId() == $donnees['id_lot']) {
                        $lots = $lot;
                    }
                }
                new Encheres($donnees["id"], $donnees['date_debut'], $donnees['date_fin'], $donnees['pas'], $donnees['etat'], $donnees['prix_depart'], $donnees['date_reglement'], $donnees['date_expedition'], $donnees['prix_final'], $lots);
                $lots = 0;
            }
            return true;

        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function get_by_id($id)
    {
        try {
            Lots::getall();
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM encheres where id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            $lots = 0;
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                foreach (Lots::$lots_array as $lot) {
                    if ($lot->getId() == $donnees['id_lot']) {
                        $lots = $lot;
                    }
                }
                $enchere = new Encheres($donnees["id"], $donnees['date_debut'], $donnees['date_fin'], $donnees['pas'], $donnees['etat'], $donnees['prix_depart'], $donnees['date_reglement'], $donnees['date_expedition'], $donnees['prix_final'], $lots);
            }
            return $enchere;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function getTime()
    {
        $date_a = new \DateTime("now");
        $date_b = new \DateTime($this->getDatefin());

        $interval = date_diff($date_a, $date_b);

        echo $interval->format('%hh : %im : %ss');
    }


    public function getPrice()
    {
        try {
            $db = static::getDB();
            $id = $this->getId();
            $stmt = $db->prepare('SELECT * FROM encheri where id_enchere=? order by date DESC');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            $encheri = array();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                array_push($encheri, new Encheri($donnees['id'], Users::getuserobjet($donnees['id_client']), $donnees['prix'], $donnees['ip'], $donnees['date']));
            }
            if ($encheri != null) {
                return $encheri[0]->getPrix();
            } else {
                return $this->prix_depart;
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }

    }

    public static function get_current_for_user($id)
    {
        try {
            $db = static::getDB();
            $now = new \DateTime();
            $now = $now->format("Y-m-d H:i:s");
            $stmt = $db->prepare('SELECT id_enchere FROM encheres,encheri where etat=1 and date_debut<=? and date_fin>=? and id_client=? group by id_enchere');
            $stmt->bindparam(1, $now, PDO::PARAM_STR);
            $stmt->bindparam(2, $now, PDO::PARAM_STR);
            $stmt->bindParam(3,$id,PDO::PARAM_STR);
            $stmt->execute();
            $enchereencour = array();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                array_push($enchereencour,Encheres::get_by_id($donnees['id_enchere']));
            }
            return $enchereencour;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function win($id_enchere,$id_user){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM encheri where id_enchere=? order by date DESC');
            $stmt->bindparam(1, $id_enchere, PDO::PARAM_STR);
            $stmt->execute();
            $encheri = array();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                array_push($encheri, new encheri($donnees['id'], Users::getuserobjet($donnees['id_client']), $donnees['prix'], $donnees['ip'], $donnees['date']));
            }
            if ($encheri != null) {
               if($encheri[0]->getUser()->getId()==$id_user){
                   $stmt = $db->prepare('UPDATE encheres SET etat = 2 WHERE id=? ');
                   $stmt->bindparam(1, $id_enchere, PDO::PARAM_STR);
                   $stmt->execute();
                   return true;
               }
               else{
                   return false;
               }
            } else {
                return false;
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function activate(){
        try {
            $id=$this->getId();
            $db = static::getDB();
            $stmt = $db->prepare('UPDATE encheres SET  etat=1 WHERE id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function unactivate(){
        try {
            $id=$this->getId();
            $db = static::getDB();
            $stmt = $db->prepare('UPDATE encheres SET  etat=0 WHERE id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function new_enchere_form($post){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('INSERT INTO encheres (date_debut,date_fin,pas,prix_depart,etat,id_lot) values (?,?,?,?,1,?)');
            $stmt->bindparam(1, $post['date_debut'], PDO::PARAM_STR);
            $stmt->bindparam(2, $post['date_fin'], PDO::PARAM_STR);
            $stmt->bindparam(3, $post['pas'], PDO::PARAM_STR);
            $stmt->bindparam(4, $post['prix_depart'], PDO::PARAM_STR);
            $stmt->bindparam(5, $post['id_lot'], PDO::PARAM_STR);
            $stmt->execute();
            return true;
        }
        catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function delete($id){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('DELETE FROM encheres where id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_INT);
            $stmt->execute();
            return true;
        }
        catch (PDOException $e) {
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
    function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public
    function getDateDebut()
    {
        return $this->date_debut;
    }

    /**
     * @param mixed $date_debut
     */
    public
    function setDateDebut($date_debut)
    {
        $this->date_debut = $date_debut;
    }

    /**
     * @return mixed
     */
    public
    function getDatefin()
    {
        return $this->date_fin;
    }

    /**
     * @param mixed $date_fin
     */
    public
    function setDatefin($date_fin)
    {
        $this->date_fin = $date_fin;
    }

    /**
     * @return mixed
     */
    public
    function getPas()
    {
        return $this->pas;
    }

    /**
     * @param mixed $pas
     */
    public
    function setPas($pas)
    {
        $this->pas = $pas;
    }

    /**
     * @return mixed
     */
    public
    function getEtat()
    {
        return $this->etat;
    }

    /**
     * @param mixed $etat
     */
    public
    function setEtat($etat)
    {
        $this->etat = $etat;
    }

    /**
     * @return mixed
     */
    public
    function getPrixDepart()
    {
        return $this->prix_depart;
    }

    /**
     * @param mixed $prix_depart
     */
    public
    function setPrixDepart($prix_depart)
    {
        $this->prix_depart = $prix_depart;
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
    function setDateReglement($date_reglement)
    {
        $this->date_reglement = $date_reglement;
    }

    /**
     * @return mixed
     */
    public
    function getDateExpedition()
    {
        return $this->date_expedition;
    }

    /**
     * @param mixed $date_expedition
     */
    public
    function setDateExpedition($date_expedition)
    {
        $this->date_expedition = $date_expedition;
    }

    /**
     * @return mixed
     */
    public
    function getPrixFinal()
    {
        return $this->prix_final;
    }

    /**
     * @param mixed $prix_final
     */
    public
    function setPrixFinal($prix_final)
    {
        $this->prix_final = $prix_final;
    }

    /**
     * @return mixed
     */
    public
    function getNomOp()
    {
        return $this->nom_op;
    }

    /**
     * @param mixed $nom_op
     */
    public
    function setNomOp($nom_op)
    {
        $this->nom_op = $nom_op;
    }

    /**
     * @return mixed
     */
    public
    function getLot()
    {
        return $this->lot;
    }

    /**
     * @param mixed $lot
     */
    public
    function setLot($lot)
    {
        $this->lot = $lot;
    }

    /**
     * @return mixed
     */
    public function getEncheres()
    {
        return $this->encheres;
    }

    /**
     * @param mixed $encheres
     */
    public function setEncheres($encheres): void
    {
        $this->encheres = $encheres;
    }


}