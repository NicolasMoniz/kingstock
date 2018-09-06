<?php
namespace Core;

use App\Config;
use App\Models\Lang;

class View
{
    public static function render($view, $args = [])
    {
        extract($args, EXTR_SKIP);
        $file = "../App/Views/$view";  // relative to Core directory
        if (is_readable($file)) {
            require $file;
        } else {
            throw new \Exception("$file not found");
        }
    }
    public static function renderTemplate($template, $args = [])
    {
        static $twig = null;
        if ($twig === null) {


            $loader = new \Twig_Loader_Filesystem('../App/Views');
            $twig = new \Twig_Environment($loader, array('debug' => true));
            $twig->addFunction(new \Twig_SimpleFunction('base_url', function ($asset) {
                $host=Config::HOST;
                return sprintf($host.'/%s', ltrim($asset, '/'));
            }));
            $twig->addGlobal('session', $_SESSION);
            $myjson = json_decode(file_get_contents('../App/Views/lang/'.$_SESSION['lang'].'.json'),TRUE);
            $twig->addGlobal('lang', $myjson);
            $twig->addGlobal('captcha', Config::CAPTCHA);
            $twig->addGlobal('lang_array', Lang::$lang_array);
            $twig->addExtension(new \Twig_Extension_Debug());
            $twig->getExtension('Twig_Extension_Core')->setDateFormat('d/m/Y', '%d days');
            $twig->getExtension('Twig_Extension_Core')->setTimezone('Europe/Paris');
        }
        echo $twig->render($template, $args);
    }
    public static function renderEmail($template, $args = [])
    {
        static $twig = null;
        if ($twig === null) {


            $loader = new \Twig_Loader_Filesystem('../App/Views');
            $twig = new \Twig_Environment($loader, array('debug' => true));
            $twig->addFunction(new \Twig_SimpleFunction('base_url', function ($asset) {
                $host=Config::HOST;
                return sprintf($host.'/%s', ltrim($asset, '/'));
            }));
            $twig->addGlobal('session', $_SESSION);
            $myjson = json_decode(file_get_contents('../App/Views/lang/'.$_SESSION['lang'].'.json'),TRUE);
            $twig->addGlobal('lang', $myjson);
            $twig->addGlobal('captcha', Config::CAPTCHA);
            $twig->addGlobal('lang_array', Lang::$lang_array);
            $twig->addExtension(new \Twig_Extension_Debug());
            $twig->getExtension('Twig_Extension_Core')->setDateFormat('d/m/Y', '%d days');
            $twig->getExtension('Twig_Extension_Core')->setTimezone('Europe/Paris');
        }
        return $twig->render($template, $args);
    }
}
