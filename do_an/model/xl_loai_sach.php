<?php
include_once('./model/database.php');

class xl_loai_sach extends database{

    function xl_loai_sach(){
        parent::database();
    }

    function ds_loai_sach_theo_id_loai_cha($id_loai_cha=0){
        $string_sql = "SELECT ls.*
                        FROM bs_loai_sach ls 
                        WHERE id_loai_cha = " . $id_loai_cha;
        $this->set_SQL($string_sql);
        $this->execute();
        $result = $this->fetch();
        return $result;
    }

    // 

    function ds_tat_ca_loai_sach_theo_cha(){
        $ds_loai_cha = $this->ds_loai_sach_theo_id_loai_cha();

        $this->de_quy_lay_toan_bo_con($ds_loai_cha);

        return $ds_loai_cha;
    }

    function de_quy_lay_toan_bo_con($ds_loai_cha){
        foreach ($ds_loai_cha as $ds_loai_cha_khac){
            $ds_loai_con = $this->ds_loai_sach_theo_id_loai_cha($ds_loai_cha_khac->id);

            if(count($ds_loai_con)>0){
                $this->de_quy_lay_toan_bo_con($ds_loai_con);
            }

            $ds_loai_cha_khac->ds_con = $ds_loai_con;
        }
    }
}
?>