<?php
    include_once('./model/database.php'); // include functions tu database.php

    class xl_slide_banner extends database {

        function xl_slide_banner(){ // khai bao class tu class cha database

            parent::database();
        }

        function ds_slide_banner(){ //tao va thuc hien lenh SQL su dung function tu class cha 

            $string_sql = "SELECT * FROM bs_slide_banner"; 
            $this->set_SQL($string_sql);
            $this->execute();
            return $this->fetch();
        }
    }
?>