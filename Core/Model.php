<?php
namespace Core;
use PDO;
use App\Config;
use App\Models\Lang;


abstract class Model
{
    protected static function getDB()
    {

        static $db = null;

        if ($db === null) {
            $dsn = 'mysql:host=' . Config::DB_HOST . ';dbname=' . Config::DB_NAME . ';charset=utf8';
            $db = new PDO($dsn, Config::DB_USER, Config::DB_PASSWORD);

            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        return $db;
    }
    protected static function getLang()
    {

        static $lang = null;

        if ($lang === null) {
            foreach(Lang::$lang_array as $langs){
                if($_SESSION['lang'] == $langs->getCode()){
                    $lang=$langs->getId();
                }
            }
        }
        return $lang;
    }
}
