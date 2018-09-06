<?php

namespace App\Models;
use PDO;
use App\Config;

class Article extends \Core\Model
{
    private $id;
    private $titre;
    private $contenu;
    private $date;
    private $photo;

    public static $article_array=array();

    public function __construct($id, $titre, $contenu, $date,$photo)
    {
        $this->id = $id;
        $this->titre = $titre;
        $this->contenu = $contenu;
        $this->date = $date;
        $this->photo=$photo;

        array_push(Article::$article_array,$this);
    }

    public static function getAll(){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM articles');
            $stmt->execute();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                new Article($donnees['id'], $donnees['titre'], $donnees['contenu'], $donnees['date'],$donnees['photo']);
            }
            return true;
        }
        catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public static function get_by_id($id){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM articles where id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $article = new article($donnees['id'], $donnees['titre'], $donnees['contenu'], $donnees['date'],$donnees['photo']);
            }
            return $article;
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
        }
    }

    public static function new_article_form($post,$files){
        try {
            $length = 20;
            $token = bin2hex(random_bytes($length));
            move_uploaded_file($files['photo']['tmp_name'], Config::absolutepathtopublic."/source/images/articles/".$token."." . pathinfo($files['photo']['name'])['extension']);
            $pathlink="/source/images/articles/".$token."." . pathinfo($files['photo']['name'])['extension'];
            $db = static::getDB();
            $now = new \DateTime();
            $now = $now->format("Y-m-d H:i:s");
            $stmt = $db->prepare('INSERT INTO articles (titre,contenu,date,photo) VALUES (?,?,?,?)');
            $stmt->bindparam(1, $post['titre'], PDO::PARAM_STR);
            $stmt->bindparam(2, $post['contenu'], PDO::PARAM_STR);
            $stmt->bindparam(3, $now, PDO::PARAM_STR);
            $stmt->bindparam(4, $pathlink, PDO::PARAM_STR);
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
            $stmt = $db->prepare('DELETE FROM articles where id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_INT);
            $stmt->execute();
            return true;
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

    /**
     * @return mixed
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * @param mixed $titre
     */
    public function setTitre($titre): void
    {
        $this->titre = $titre;
    }

    /**
     * @return mixed
     */
    public function getContenu()
    {
        return $this->contenu;
    }

    /**
     * @param mixed $contenu
     */
    public function setContenu($contenu): void
    {
        $this->contenu = $contenu;
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
    public function setDate($date): void
    {
        $this->date = $date;
    }

    /**
     * @return mixed
     */
    public function getPhoto()
    {
        return $this->photo;
    }

    /**
     * @param mixed $photo
     */
    public function setPhoto($photo): void
    {
        $this->photo = $photo;
    }



}