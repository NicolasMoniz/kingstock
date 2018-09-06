<?php

namespace App\Models;
use PDO;

class Adresse extends \Core\Model
{
    private $id;
    private $adresse;
    private $ville;
    private $pays;
    private $code_postal;

    public static $adresse_array=array();

    public function __construct($id, $adresse, $ville, $pays, $code_postal)
    {
        $this->id = $id;
        $this->adresse = $adresse;
        $this->ville = $ville;
        $this->pays = $pays;
        $this->code_postal = $code_postal;

        array_push(Adresse::$adresse_array,$this);
    }

    public static function getbyid($id){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM adresses where id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $adresse = new Adresse($donnees['id'], $donnees['adresse'], $donnees['ville'], $donnees['pays'],$donnees['code_postal']);
            }
            return $adresse;
        }
        catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
    public static function createadress($rue,$code_postal,$ville,$pays){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('INSERT INTO adresses (adresse,ville,pays,code_postal) VALUES (?,?,?,?)');
            $stmt->bindparam(1, $rue, PDO::PARAM_STR);
            $stmt->bindparam(2, $ville, PDO::PARAM_STR);
            $stmt->bindparam(3, $pays, PDO::PARAM_STR);
            $stmt->bindparam(4, $code_postal, PDO::PARAM_STR);
            $stmt->execute();
            $id_adresse = $db->lastInsertId();
            return $id_adresse;
        }
        catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function getId()
    {
        return $this->id;
    }


    public function setId($id)
    {
        $this->id = $id;
    }

    public function getAdresse()
    {
        return $this->adresse;
    }

    public function setAdresse($adresse)
    {
        $this->adresse = $adresse;
    }

    public function getVille()
    {
        return $this->ville;
    }

    public function setVille($ville)
    {
        $this->ville = $ville;
    }

    public function getPays()
    {
        return $this->pays;
    }

    public function setPays($pays)
    {
        $this->pays = $pays;
    }

    public function getCodePostal()
    {
        return $this->code_postal;
    }

    public function setCodePostal($code_postal)
    {
        $this->code_postal = $code_postal;
    }





}