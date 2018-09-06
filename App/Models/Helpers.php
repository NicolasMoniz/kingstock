<?php

namespace App\Models;
use Exception;
use App\Config;
class Helpers
{
    public static function is_siret($siret)
    {
        try {
            $apikey = '57ea9863f66e2620a46eddc0ce51875d';
            $secretKey = '7bfe882bfb4dcb9e3a698de4b64e9da1';
            $url = "https://www.numero-de-siret.com/api/siret?siret=" . $siret;
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
            curl_setopt($ch, CURLOPT_USERPWD, $apikey . ':' . $secretKey);
            $server_output = curl_exec($ch);
            curl_close($ch);
            $reponse = get_object_vars(json_decode($server_output));
            if ($reponse['success']){
                $nom = $reponse['array_return'][0]->L1_NORMALISEE;
                if (isset($nom)) {
                    return true;
                }
            }
            if (isset($nom)) {
                return true;
            } else {
                return false;
            }
        }
        catch (Exception $e) {
            return false;
        }

    }
    public static function mail(){
        $transport = (new \Swift_SmtpTransport(Config::mailHost, Config::portHost,Config::certHost))
            ->setUsername(Config::userMail)
            ->setPassword(Config::mdpMail);

         return $mailer = new \Swift_Mailer($transport);
    }
}