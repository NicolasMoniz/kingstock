<?php

namespace Core;

use App\Config;
use Exception;
use App\Models\Lang;

abstract class Controller
{
    protected $route_params = [];

    public function __construct($route_params)
    {
        session_start();
        if (!isset($_SESSION['firstvisit'])) {
            $language = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
            $language = $language{0} . $language{1};
            $yesornot = false;
            Lang::getall();
            foreach (Lang::$lang_array as $langs) {
                if ($language == $langs->getCode()) {
                    $_SESSION['lang'] = $language;
                    $yesornot = true;
                }
            }
            if ($yesornot == false) {
                $_SESSION['lang'] = "en";
            }
            $_SESSION['firstvisit'] = 1;
        } else {
            Lang::getAll();
        }


        $this->route_params = $route_params;
    }

    public function __call($name, $args)
    {
        $method = $name . 'Action';

        if (method_exists($this, $method)) {
            if ($this->before() !== false) {
                call_user_func_array([$this, $method], $args);
                $this->after();
            }
        } else {
            throw new \Exception("Method $method not found in controller " . get_class($this));
        }
    }


    protected function before()
    {
    }

    protected function after()
    {
    }
}