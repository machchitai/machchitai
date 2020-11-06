<?php
include_once('./libraries/function_support.php');

class config {
	public $mail_user = 'machchitai@gmail.com';
    public $mail_pass = 'Tai4312214';
    
    function get_password_email(){
        return decrypt_custom($this->mail_pass);
    }
}
?>