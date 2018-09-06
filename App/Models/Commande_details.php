<?php

namespace App\Models;
use PDO;

class Commande_details extends \Core\Model
{
    private $id;
    private $produit;
    private $qte;
    private $prix;

    public function __construct($id, $produit, $qte, $prix)
    {
        $this->id = $id;
        $this->produit = $produit;
        $this->qte = $qte;
        $this->prix = $prix;
    }

    public static function get_detail($id_commande){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM details where id_commande=?');
            $stmt->bindparam(1, $id_commande, PDO::PARAM_STR);
            $stmt->execute();
            $commandes_details=array();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                array_push($commandes_details,new Commande_details($donnees["id"], $donnees['produit'], $donnees['qte'], $donnees['prix']));
            }
            return $commandes_details;
        } catch (PDOException $e) {
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
    public function getProduit()
    {
        return $this->produit;
    }

    /**
     * @param mixed $produit
     */
    public function setProduit($produit): void
    {
        $this->produit = $produit;
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



}