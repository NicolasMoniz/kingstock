<?php

namespace App\Models;
use PDO;



class Type_user extends \Core\Model
{
    private $id;
    private $nom;

    public static $type_user_array=array();


    public function __construct($id,$nom)
    {
        $this->setId($id);
        $this->setNom($nom);

        array_push(Type_user::$type_user_array,$this);
    }

    public static function getbyid($id){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM type_user where id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $user = new Type_user($donnees['id'],$donnees['nom']);
            }
            return $user;

        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
    public function getall()
    {
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM type_user');
            $stmt->execute();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $user = new Type_user($donnees['id'],$donnees['nom']);
            }

        } catch (PDOException $e) {
            echo $e->getMessage();
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


    public function getNom()
    {
        return $this->nom;
    }


    public function setNom($nom)
    {
        $this->nom = $nom;
    }
}