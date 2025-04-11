<?php
namespace App\Controllers;
// namespace App\Controllers\SignUp;
use App\Controllers\BaseController;

// use CodeIgniter\Controller;

class SignUpController extends BaseController
{
    private $db;
    public function __construct()
    {
        $this->db = \Config\Database::connect();
    }

    public function signup()
    {
        $insertdata = $this->request->getPost();
        // print_r($insertdata);
        // die();

        $hashedPassword = password_hash($this->request->getPost('password'), PASSWORD_DEFAULT);
        unset($insertdata['password']);
        $insertdata['password'] = $hashedPassword;
        $builder = $this->db->table('masteruser')->insert($insertdata);
        // $insert = $this->db->table('masteruser')->set($insertdata)->insert();

        if ($builder) {
            return $this->response->setJSON(['status' => 1, 'message' => 'User Signup Successfully.']);
        } else {
            return $this->response->setJSON(['status' => 0, 'message' => 'User Not Signup']);

        }


    }


    public function signin()
    {
        $email = $this->request->getPost('email');
        $password = $this->request->getPost('password');
        $user = $this->db->table('masteruser')->where('email', $email)->get()->getRowArray();
        // print_r($user);
        // die();
        if ($user) {
            if (password_verify($password, $user['password'])) {
                return $this->response->setJSON(['status' => 1, 'message' => 'User Loggeding Successfully.', 'data' => $user]);
            } else {
                return $this->response->setJSON(['status' => 0, 'message' => 'Password not match']);
            }
        } else {
            return $this->response->setJSON(['status' => 0, 'message' => 'Invalid Creadetials.']);
        }


    }
}
?>