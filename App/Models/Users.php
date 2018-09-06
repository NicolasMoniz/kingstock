<?php

namespace App\Models;

use PDO;

class Users extends \Core\Model
{
    private $id;
    private $email;
    private $password;
    private $type;
    private $societe;
    private $siret_duns;
    private $adresse_facturation;
    private $adresse_livraison;
    private $iban;
    private $bic;
    private $etat;
    private $verif_email;
    private $email_token;
    private $img_user;
    private $tel;
    private $commandes;

    public static $users_array = array();


    public function __construct($id, $email, $password, $type, $societe,
                                $siret_duns, $id_adresse_facturation, $id_adresse_livraison,
                                $iban, $bic, $etat, $verif_email, $email_token, $img_user,$tel)
    {
        $this->id = $id;
        $this->email = $email;
        $this->password = $password;
        $this->type = Type_user::getbyid($type);
        $this->societe = $societe;
        $this->siret_duns = $siret_duns;
        $this->adresse_facturation = Adresse::getbyid($id_adresse_facturation);
        $this->adresse_livraison = Adresse::getbyid($id_adresse_livraison);
        $this->iban = $iban;
        $this->bic = $bic;
        $this->etat = $etat;
        $this->verif_email = $verif_email;
        $this->email_token = $email_token;
        $this->img_user = $img_user;
        $this->tel=$tel;
        $this->commandes=Commande::get_for_user($id);

        array_push(Users::$users_array, $this);
    }

    public static function getAll(){
        try {
            Users::$users_array=array();
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM users');
            $stmt->execute();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                new users(
                    $donnees['id'],
                    $donnees['email'],
                    $donnees['password'],
                    $donnees['type'],
                    $donnees['societe'],
                    $donnees['siret_duns'],
                    $donnees['adresse_facturation'],
                    $donnees['adresse_livraison'],
                    $donnees['iban'],
                    $donnees['bic'],
                    $donnees['etat'],
                    $donnees['verif_email'],
                    $donnees['email_token'],
                    $donnees['img_user'],
                    $donnees['tel']);
            }

        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function getuserobjet($id)
    {
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM users WHERE id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $user = new users(
                    $donnees['id'],
                    $donnees['email'],
                    $donnees['password'],
                    $donnees['type'],
                    $donnees['societe'],
                    $donnees['siret_duns'],
                    $donnees['adresse_facturation'],
                    $donnees['adresse_livraison'],
                    $donnees['iban'],
                    $donnees['bic'],
                    $donnees['etat'],
                    $donnees['verif_email'],
                    $donnees['email_token'],
                    $donnees['img_user'],
                    $donnees['tel']);
            }
            $count=$stmt->rowCount();
            if($count!=0) {
                return $user;
            }
            else{
                return false;
            }

        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function exist_user($siret, $email)
    {
        $db = static::getDB();
        $stmt = $db->prepare('SELECT * FROM users WHERE email=? or siret_duns=?');
        $stmt->bindparam(1, $email, PDO::PARAM_STR);
        $stmt->bindparam(2, $siret, PDO::PARAM_STR);
        $stmt->execute();
        $count = $stmt->rowCount();
        if ($count != 0) {
            return false;
        } else {
            return true;
        }
    }

    public static function getuser($email, $password)
    {
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM users WHERE email=? AND users.password=?');
            $stmt->bindparam(1, $email, PDO::PARAM_STR);
            $stmt->bindparam(2, $password, PDO::PARAM_STR);
            $stmt->execute();
            while ($donnees = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $user = new users(
                    $donnees['id'],
                    $donnees['email'],
                    $donnees['password'],
                    $donnees['type'],
                    $donnees['societe'],
                    $donnees['siret_duns'],
                    $donnees['adresse_facturation'],
                    $donnees['adresse_livraison'],
                    $donnees['iban'],
                    $donnees['bic'],
                    $donnees['etat'],
                    $donnees['verif_email'],
                    $donnees['email_token'],
                    $donnees['img_user'],
                    $donnees['tel']);
            }
            $count = $stmt->rowCount();
            if($count!=0) {
                if($user->getEtat()!=0) {
                    return $user;
                }
                else{
                    return 3;
                }
            }
            else{
                return false;
            }

        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function createuser($email, $password, $societe, $id_adresse_facturation, $id_adresse_livraison, $siret_duns, $iban, $bic,$etat,$tel)
    {
        $type = 2;
        $db = static::getDB();
        $stmt = $db->prepare('INSERT INTO users (email, users.password,type,societe,siret_duns,adresse_facturation,adresse_livraison,iban,bic,etat,tel) VALUES (?,?,?,?,?,?,?,?,?,?,?)');
        $stmt->bindparam(1, $email, PDO::PARAM_STR);
        $stmt->bindparam(2, $password, PDO::PARAM_STR);
        $stmt->bindparam(3, $type, PDO::PARAM_STR);
        $stmt->bindparam(4, $societe, PDO::PARAM_STR);
        $stmt->bindparam(5, $siret_duns, PDO::PARAM_STR);
        $stmt->bindparam(6, $id_adresse_facturation, PDO::PARAM_STR);
        $stmt->bindparam(7, $id_adresse_livraison, PDO::PARAM_STR);
        $stmt->bindparam(8, $iban, PDO::PARAM_STR);
        $stmt->bindparam(9, $bic, PDO::PARAM_STR);
        $stmt->bindparam(10, $etat, PDO::PARAM_STR);
        $stmt->bindparam(11, $tel, PDO::PARAM_STR);
        $stmt->execute();
        $id_user = $db->lastInsertId();
        return $id_user;
    }

    public static function exist_account($email){
        try {
            $db = static::getDB();
            $stmt = $db->prepare('SELECT * FROM users WHERE email=?');
            $stmt->bindparam(1, $email, PDO::PARAM_STR);
            $stmt->execute();
            $count = $stmt->rowCount();
            if($count!=0) {
                return true;
            }
            else{
                return false;
            }

        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function generatetoken($email){
        $length = 20;
        $token = bin2hex(random_bytes($length));
        $db = static::getDB();
        $stmt = $db->prepare('UPDATE users SET email_token = ? WHERE email=? ');
        $stmt->bindparam(1, $token, PDO::PARAM_STR);
        $stmt->bindparam(2, $email, PDO::PARAM_STR);
        $stmt->execute();
        return $token;
    }

    public static function resetpassword($token,$newpassword){

        try{
            $password=sha1($newpassword);
            $db = static::getDB();
            $stmt = $db->prepare('UPDATE users SET  password = ? WHERE email_token=? ');
            $stmt->bindparam(1, $password, PDO::PARAM_STR);
            $stmt->bindparam(2, $token, PDO::PARAM_STR);
            $stmt->execute();
            return true;
        }
        catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public static function removetokenemail($token){

        try{
            $db = static::getDB();
            $stmt = $db->prepare('UPDATE users SET  email_token="" WHERE email_token=?');
            $stmt->bindparam(1, $token, PDO::PARAM_STR);
            $stmt->execute();
            return true;
        }
        catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function check(){
        try{
            $id=$this->getId();
            $db = static::getDB();
            $stmt = $db->prepare('UPDATE users SET  etat=1 WHERE id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
            $stmt->execute();
            return true;
        }
        catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function uncheck(){
        try{
            $id=$this->getId();
            $db = static::getDB();
            $stmt = $db->prepare('UPDATE users SET  etat=0 WHERE id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_STR);
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
            $stmt = $db->prepare('DELETE FROM users where id=?');
            $stmt->bindparam(1, $id, PDO::PARAM_INT);
            $stmt->execute();
            return true;
        }
        catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public
    function getSociete()
    {
        return $this->societe;
    }


    public
    function setSociete($societe)
    {
        $this->societe = $societe;
    }


    public
    function getSiretDuns()
    {
        return $this->siret_duns;
    }


    public
    function setSiretDuns($siret_duns)
    {
        $this->siret_duns = $siret_duns;
    }


    public
    function getAdresseFacturation()
    {
        return $this->adresse_facturation;
    }


    public
    function setAdresseFacturation($adresse_facturation)
    {
        $this->adresse_facturation = $adresse_facturation;
    }


    public
    function getAdresseLivraison()
    {
        return $this->adresse_livraison;
    }


    public
    function setAdresseLivraison($adresse_livraison)
    {
        $this->adresse_livraison = $adresse_livraison;
    }


    public
    function getIban()
    {
        return $this->iban;
    }


    public
    function setIban($iban)
    {
        $this->iban = $iban;
    }


    public
    function getBic()
    {
        return $this->bic;
    }


    public
    function setBic($bic)
    {
        $this->bic = $bic;
    }


    public
    function getEtat()
    {
        return $this->etat;
    }


    public
    function setEtat($etat)
    {
        $this->etat = $etat;
    }


    public
    function getVerifEmail()
    {
        return $this->verif_email;
    }


    public
    function setVerifEmail($verif_email)
    {
        $this->verif_email = $verif_email;
    }


    public
    function getEmailToken()
    {
        return $this->email_token;
    }


    public
    function setEmailToken($email_token)
    {
        $this->email_token = $email_token;
    }

    public
    function getId()
    {
        return $this->id;
    }

    public
    function setId($id)
    {
        $this->id = $id;
    }

    public
    function getEmail()
    {
        return $this->email;
    }

    public
    function setEmail($email)
    {
        $this->email = $email;
    }

    public
    function getPassword()
    {
        return $this->password;
    }

    public
    function setPassword($password)
    {
        $this->password = $password;
    }

    public
    function getType()
    {
        return $this->type;
    }

    public
    function setType($type)
    {
        $this->type = $type;
    }

    public function getImgUser()
    {
        return $this->img_user;
    }

    public function setImgUser($img_user)
    {
        $this->img_user = $img_user;
    }

    /**
     * @return mixed
     */
    public function getTel()
    {
        return $this->tel;
    }

    /**
     * @param mixed $tel
     */
    public function setTel($tel): void
    {
        $this->tel = $tel;
    }


}
