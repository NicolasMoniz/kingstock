<?php

namespace App\Models;

use PDO;

class VenteBougie extends \Core\Model
{
    private $id;
    private $date_debut;
    private $date_fin;
    private $prix;
    private $qte;
    private $etat;
    private $lot;

    public static $ventebougie_array = array();

    public function __construct($id, $date_debut,$date_fin,$prix,$qte,$lot,$etat)
    {
        $this->id = $id;
        $this->date_debut = $date_debut;
        $this->date_fin = $date_fin;
        $this->prix=$prix;
        $this->qte=$qte;
        $this->etat = $etat;
        $this->lot = $lot;
        array_push(VenteBougie::$ventebougie_array, $this);
    }

    public static function getAll(){
        try {
            VenteBougie::$ventebougie_array = array();
            Lots::getall();
            $db = static::getDB();
            $now = new \DateTime();
            $now = $now->format("Y-m-d H:i:s");
            $stmt = $db->prepare('SELECT * FROM vente_bougie');
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
                new VenteBougie($donnees["id"], $donnees['date_debut'], $donnees['date_fin'], $donnees['prix'], $donnees['qte'], $lots,$donnees['etat']);
                $lots = 0;
            }
            return true;

        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function getallcurrent()
    {
        try {
            VenteBougie::$ventebougie_array = array();
            Lots::getall();
            $db = static::getDB();
            $now = new \DateTime();
            $now = $now->format("Y-m-d H:i:s");
            $stmt = $db->prepare('SELECT * FROM vente_bougie where etat=1 and date_debut<=? and date_fin>=?');
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
                new VenteBougie($donnees["id"], $donnees['date_debut'], $donnees['date_fin'], $donnees['prix'], $donnees['qte'], $lots,$donnees['etat']);
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
            VenteBougie::$ventebougie_array = array();
            Lots::getall();
            $db = static::getDB();
            $now = new \DateTime();
            $now = $now->format("Y-m-d H:i:s");
            $stmt = $db->prepare('SELECT * FROM vente_bougie where etat=1 and date_debut>=?');
            $stmt->bindparam(1, $now, PDO::PARAM_STR);
            $stmt->execute();
            $lots = 0;
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                foreach (Lots::$lots_array as $lot) {
                    if ($lot->getId() == $donnees['id_lot']) {
                        $lots = $lot;
                    }
                }
                new VenteBougie($donnees["id"], $donnees['date_debut'], $donnees['date_fin'], $donnees['prix'], $donnees['qte'], $lots,$donnees['etat']);
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
            $stmt = $db->prepare('SELECT * FROM vente_bougie where id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            $lots = 0;
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                foreach (Lots::$lots_array as $lot) {
                    if ($lot->getId() == $donnees['id_lot']) {
                        $lots = $lot;
                    }
                }
                $vente = new VenteBougie($donnees["id"], $donnees['date_debut'], $donnees['date_fin'], $donnees['prix'], $donnees['qte'], $lots,$donnees['etat']);
            }
            return $vente;
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

    public function activate(){
        try {
            $id=$this->getId();
            $db = static::getDB();
            $stmt = $db->prepare('UPDATE vente_bougie SET  etat=1 WHERE id=?');
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
            $stmt = $db->prepare('UPDATE vente_bougie SET  etat=0 WHERE id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function new_vente_form($post){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('INSERT INTO vente_bougie (date_debut,date_fin,qte,prix,etat,id_lot) values (?,?,?,?,1,?)');
            $stmt->bindparam(1, $post['date_debut'], PDO::PARAM_STR);
            $stmt->bindparam(2, $post['date_fin'], PDO::PARAM_STR);
            $stmt->bindparam(3, $post['qte'], PDO::PARAM_STR);
            $stmt->bindparam(4, $post['prix'], PDO::PARAM_STR);
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
            $stmt = $db->prepare('DELETE FROM vente_bougie where id=?');
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
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getDateDebut()
    {
        return $this->date_debut;
    }

    /**
     * @param mixed $date_debut
     */
    public function setDateDebut($date_debut): void
    {
        $this->date_debut = $date_debut;
    }

    /**
     * @return mixed
     */
    public function getDateFin()
    {
        return $this->date_fin;
    }

    /**
     * @param mixed $date_fin
     */
    public function setDateFin($date_fin): void
    {
        $this->date_fin = $date_fin;
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
    public function setPrix($prix): void
    {
        $this->prix = $prix;
    }

    /**
     * @return mixed
     */
    public function getQte()
    {
        return $this->qte;
    }

    /**
     * @param mixed $qte
     */
    public function setQte($qte): void
    {
        $this->qte = $qte;
    }

    /**
     * @return mixed
     */
    public function getLot()
    {
        return $this->lot;
    }

    /**
     * @param mixed $lot
     */
    public function setLot($lot): void
    {
        $this->lot = $lot;
    }

    /**
     * @return mixed
     */
    public function getEtat()
    {
        return $this->etat;
    }

    /**
     * @param mixed $etat
     */
    public function setEtat($etat): void
    {
        $this->etat = $etat;
    }


}