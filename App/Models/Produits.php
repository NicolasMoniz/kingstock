<?php

namespace App\Models;

use App\Config;
use PDO;

class Produits extends \Core\Model
{
    private $id;
    private $unite;
    private $prix_achat;
    private $fournisseur;
    private $date_achat;
    private $quantite;
    private $actif;
    private $code_bar;
    private $nom;
    private $description;
    private $description_tech;
    private $misc;
    private $photos = array();

    public static $produits_array = array();


    public function __construct($id, $unite, $prix_achat, $fournisseur, $date_achat, $quantite, $actif, $code_bar, $nom, $description, $description_tech, $misc, array $photos)
    {
        $this->id = $id;
        $this->unite = $unite;
        $this->prix_achat = $prix_achat;
        $this->fournisseur = $fournisseur;
        $this->date_achat = $date_achat;
        $this->quantite = $quantite;
        $this->actif = $actif;
        $this->code_bar = $code_bar;
        $this->nom = $nom;
        $this->description = $description;
        $this->description_tech = $description_tech;
        $this->misc = $misc;
        $this->photos = $photos;

        array_push(Produits::$produits_array, $this);
    }


    public static function get_all()
    {
        try {
            $db = static::getDB();
            $lang = static::getLang();
            $stmt = $db->prepare('select produits.id,unite,unite,fournisseur,date_achat,quantite,actif,code_bar,nom,description,description_tech,misc from produits,traduction_produits where produits.id=traduction_produits.id_produit and id_lang=?');
            $stmt->bindparam(1, $lang, PDO::PARAM_STR);
            $stmt->execute();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                //recuperation des photos
                $stmt2 = $db->prepare('SELECT * FROM photo_de where id_produit=?');
                $stmt2->bindparam(1, $donnees['id'], PDO::PARAM_STR);
                $stmt2->execute();
                $photos_array = array();
                while ($donnees2 = $stmt2->fetch(PDO::FETCH_ASSOC)) {
                    array_push($photos_array, $donnees2['url']);
                }
                //fin recup photo
                new Produits(
                    $donnees['id'],
                    $donnees['unite'],
                    $donnees['unite'],
                    $donnees['fournisseur'],
                    $donnees['date_achat'],
                    $donnees['quantite'],
                    $donnees['actif'],
                    $donnees['code_bar'],
                    $donnees['nom'],
                    $donnees['description'],
                    $donnees['description_tech'],
                    $donnees['misc'],
                    $photos_array
                );
            }
            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }

    }

    public static function new_produit_form($post,$files)
    {
        try {
            $db = static::getDB();
            $stmt = $db->prepare('INSERT INTO produits (unite,prix_achat,fournisseur,date_achat,quantite,code_bar,actif) VALUES (?,?,?,?,?,?,1)');
            $stmt->bindparam(1, $post['unite'], PDO::PARAM_STR);
            $stmt->bindparam(2, $post['prix_achat'], PDO::PARAM_STR);
            $stmt->bindparam(3, $post['fournisseur'], PDO::PARAM_STR);
            $stmt->bindparam(4, $post['date_achat'], PDO::PARAM_STR);
            $stmt->bindparam(5, $post['quantite'], PDO::PARAM_STR);
            $stmt->bindparam(6, $post['code_bar'], PDO::PARAM_STR);
            $stmt->execute();
            $id_produit=$db->lastInsertId();
            $stmt = $db->prepare('INSERT INTO traduction_produits (id_lang,nom,description,id_produit,description_tech,misc) VALUES (1,?,?,?,?,?)');
            $stmt->bindparam(1, $post['nom'], PDO::PARAM_STR);
            $stmt->bindparam(2, $post['descripition'], PDO::PARAM_STR);
            $stmt->bindparam(3, $id_produit, PDO::PARAM_STR);
            $stmt->bindparam(4, $post['descripition_tech'], PDO::PARAM_STR);
            $stmt->bindparam(5, $post['misc'], PDO::PARAM_STR);
            $stmt->execute();
            $i=0;
            foreach ($files['images']['name'] as $filename) {
                $length = 20;
                $token = bin2hex(random_bytes($length));
                move_uploaded_file($files['images']['tmp_name'][$i], Config::absolutepathtopublic."/source/images/produit/".$token."." .pathinfo($filename)['extension']);
                $url="source/images/produit/".$token."." . pathinfo($filename)['extension'];
                $stmt = $db->prepare('INSERT INTO photo_de (id_produit,url) VALUES (?,?)');
                $stmt->bindparam(1, $id_produit, PDO::PARAM_STR);
                $stmt->bindparam(2, $url, PDO::PARAM_STR);
                $stmt->execute();
                $i++;
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
            $stmt = $db->prepare('DELETE FROM produits where id=?');
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
    public function getUnite()
    {
        return $this->unite;
    }

    /**
     * @param mixed $unite
     */
    public function setUnite($unite)
    {
        $this->unite = $unite;
    }

    /**
     * @return mixed
     */
    public function getPrixAchat()
    {
        return $this->prix_achat;
    }

    /**
     * @param mixed $prix_achat
     */
    public function setPrixAchat($prix_achat)
    {
        $this->prix_achat = $prix_achat;
    }

    /**
     * @return mixed
     */
    public function getFournisseur()
    {
        return $this->fournisseur;
    }

    /**
     * @param mixed $fournisseur
     */
    public function setFournisseur($fournisseur)
    {
        $this->fournisseur = $fournisseur;
    }

    /**
     * @return mixed
     */
    public function getDateAchat()
    {
        return $this->date_achat;
    }

    /**
     * @param mixed $date_achat
     */
    public function setDateAchat($date_achat)
    {
        $this->date_achat = $date_achat;
    }

    /**
     * @return mixed
     */
    public function getQuantite()
    {
        return $this->quantite;
    }

    /**
     * @param mixed $quantite
     */
    public function setQuantite($quantite)
    {
        $this->quantite = $quantite;
    }

    /**
     * @return mixed
     */
    public function getActif()
    {
        return $this->actif;
    }

    /**
     * @param mixed $actif
     */
    public function setActif($actif)
    {
        $this->actif = $actif;
    }

    /**
     * @return mixed
     */
    public function getCodeBar()
    {
        return $this->code_bar;
    }

    /**
     * @param mixed $code_bar
     */
    public function setCodeBar($code_bar)
    {
        $this->code_bar = $code_bar;
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
     * @return array
     */
    public function getPhotos()
    {
        return $this->photos;
    }

    /**
     * @param array $photos
     */
    public function setPhotos($photos)
    {
        $this->photos = $photos;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getDescriptionTech()
    {
        return $this->description_tech;
    }

    /**
     * @param mixed $description_tech
     */
    public function setDescriptionTech($description_tech)
    {
        $this->description_tech = $description_tech;
    }

    /**
     * @return mixed
     */
    public function getMisc()
    {
        return $this->misc;
    }

    /**
     * @param mixed $misc
     */
    public function setMisc($misc): void
    {
        $this->misc = $misc;
    }

}