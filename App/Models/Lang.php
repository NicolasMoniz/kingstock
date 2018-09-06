<?php

namespace App\Models;
use PDO;

class Lang extends \Core\Model
{
    private $id;
    private $code;

    public static $lang_array=array();

    public function __construct($id, $code)
    {
        $this->id = $id;
        $this->code = $code;

        array_push(Lang::$lang_array,$this);
    }

    public static function getall(){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM lang');
            $stmt->execute();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                new lang($donnees['id'], $donnees['code']);
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

    public function getCode()
    {
        return $this->code;
    }

    public function setCode($code)
    {
        $this->code = $code;
    }
}