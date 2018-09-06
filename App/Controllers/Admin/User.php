<?php

namespace App\Controllers\Admin;

use Core\View;
use App\Models\Users;
use App\Config;

class User extends \Core\Controller
{
    protected function before()
    {
        // Make sure an admin user is logged in for example
        if (Users::getuserobjet($_SESSION['id_user'])->getType()->getId() != 1) {
            return false;
        } else {
            return true;
        }
    }

    public function list()
    {
        Users::getAll();
        View::renderTemplate("admin/user_list.twig", ['users' => Users::$users_array]);
    }

    public function check()
    {
        Users::getuserobjet($_GET['id'])->check();
        header('Location:' . Config::HOST . "/admin/user/list");
    }

    public function uncheck()
    {
        Users::getuserobjet($_GET['id'])->uncheck();
        header('Location:' . Config::HOST . "/admin/user/list");
    }

    public function remove()
    {
        Users::delete($_GET['id']);
        header('Location:' . Config::HOST . '/admin/user/list');
    }
}
