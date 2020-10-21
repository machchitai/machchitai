<?php
include_once('./model/database.php');

class xl_sach extends database{

    function xl_sach(){
        parent::database();
    }

    function ds_sach_noi_bat(){
        $string_sql = "SELECT s.*, ten_tac_gia 
                        FROM bs_sach s JOIN bs_tac_gia tg ON s.id_tac_gia = tg.id 
                        WHERE noi_bat = 1";
        $this->set_SQL($string_sql);
        $this->execute();
        $result = $this->fetch();
        return $result;
    }

    function ds_sach_moi(){
        $string_sql = "SELECT s.*, ten_tac_gia 
                        FROM bs_sach s JOIN bs_tac_gia tg ON s.id_tac_gia = tg.id 
                        ORDER BY id DESC
                        LIMIT 8";
        $this->set_SQL($string_sql);
        $this->execute();
        $result = $this->fetch();
        return $result;
    }

    function ds_sach_ban_chay(){
        $string_sql = "SELECT s.*,tg.ten_tac_gia, SUM(ctdh.so_luong) as tong_so_luong
                        FROM bs_sach s JOIN bs_tac_gia tg ON s.id_tac_gia = tg.id 
                        JOIN bs_chi_tiet_don_hang ctdh ON s.id = ctdh.id_sach 
                        GROUP BY s.id 
                        ORDER BY s.ten_sach ASC
                        LIMIT 8";
        $this->set_SQL($string_sql);
        $this->execute();
        $result = $this->fetch();
        return $result;
    }

}
?>