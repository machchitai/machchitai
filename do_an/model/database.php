<?php
    class database {
        private $sql, $db, $statement;

        function database(){  // ket noi db

            $this->db = new PDO('mysql:host=localhost;dbname=ban_sach_online_db', 'root', '');
            $this->db->query("set names utf8");
        }

        function set_SQL($sql_string){ // set lenh SQL

            $this->sql=$sql_string;
        }

        function execute(){  // thuc hien lenh SQL

            $this->statement = $this->db->prepare($this->sql);
            $this->statement->execute();
        }

        function fetch(){  // fetch tat ca object
 
            return $this->statement->fetchAll(PDO::FETCH_OBJ);
        }
    }
?>