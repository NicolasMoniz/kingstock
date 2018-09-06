<?php

namespace App\Models;
use PDO;

class Lots extends \Core\Model
{
    private $id;
    private $nom;
    private $seo_title;
    private $seo_desc;
    private $produits =array();

    public static $lots_array = array();

    public function __construct($id, $nom, $seo_title, $seo_desc, array $produits)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->seo_title = $seo_title;
        $this->seo_desc = $seo_desc;
        $this->produits = $produits;

        array_push(Lots::$lots_array,$this);
    }

    public static function getall(){
        try {
            Produits::get_all();
            $db = static::getDB();
            $lang=static::getLang();
            $stmt = $db->prepare('SELECT * FROM lots,traduction_lots where lots.id=traduction_lots.id_lot and id_lang=?');
            $stmt->bindparam(1, $lang, PDO::PARAM_STR);
            $stmt->execute();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $stmt2 = $db->prepare('SELECT * FROM lot_de where id_lot=?');
                $stmt2->bindparam(1, $donnees["id_lot"], PDO::PARAM_STR);
                $stmt2->execute();
                $produits_array=array();
                while ($donnees2 = $stmt2->fetch(PDO::FETCH_ASSOC)) {
                    foreach (Produits::$produits_array as $produit){
                        if($donnees2["id_produits"]== $produit->getId()){
                            array_push($produits_array,$produit);
                        }
                    }
                }
                new Lots($donnees['id_lot'],$donnees['nom'],$donnees['seo_title'],$donnees['seo_desc'],$produits_array);
            }
            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function new_lot_form($post){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('INSERT INTO lots (id) values (null)');
            $stmt->execute();
            $id_lot = $db->lastInsertId();
            $stmt = $db->prepare('INSERT INTO traduction_lots (id_lot,id_lang,nom,seo_title,seo_desc) values (?,1,?,?,?)');
            $stmt->bindparam(1, $id_lot, PDO::PARAM_STR);
            $stmt->bindparam(2, $post['nom'], PDO::PARAM_STR);
            $stmt->bindparam(3, $post['seo_title'], PDO::PARAM_STR);
            $stmt->bindparam(4, $post['seo_desc'], PDO::PARAM_STR);
            $stmt->execute();
            foreach($post['produits'] as $produit){
                $stmt = $db->prepare('INSERT INTO lot_de (id_lot,id_produits) values (?,?)');
                $stmt->bindparam(1, $id_lot, PDO::PARAM_STR);
                $stmt->bindparam(2, $produit, PDO::PARAM_STR);
                $stmt->execute();
            }
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
            $stmt = $db->prepare('DELETE FROM lots where id=?');
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
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * @param mixed $nom
     */
    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    /**
     * @return mixed
     */
    public function getSeoTitle()
    {
        return $this->seo_title;
    }

    /**
     * @param mixed $seo_title
     */
    public function setSeoTitle($seo_title)
    {
        $this->seo_title = $seo_title;
    }

    /**
     * @return mixed
     */
    public function getSeoDesc()
    {
        return $this->seo_desc;
    }

    /**
     * @param mixed $seo_desc
     */
    public function setSeoDesc($seo_desc)
    {
        $this->seo_desc = $seo_desc;
    }

    /**
     * @return array
     */
    public function getProduits()
    {
        return $this->produits;
    }

    /**
     * @param array $produits
     */
    public function setProduits($produits)
    {
        $this->produits = $produits;
    }



}