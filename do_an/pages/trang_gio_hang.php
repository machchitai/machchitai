<?php
import_file('./model/xl_sach');
$xl_sach = new xl_sach();

if(isset($_SESSION['gio_hang'])){
    $mang_gio_hang = $_SESSION['gio_hang'];
}
else {
    $mang_gio_hang = [];
}

if(isset($_POST['so_luong']) && isset($_POST['id_sach'])){
        //echo '<pre>',print_r($_POST),'</pre>';
        //echo $_GET['id_sach'];
        $thong_tin_sach = $xl_sach->lay_thong_tin_sach_theo_id($_POST['id_sach']);
        $thong_tin_sach->gioi_thieu = '';
        $thong_tin_sach->so_luong = $_POST['so_luong'];

        if(count($mang_gio_hang) > 0){ //có giỏ hàng rồi
            $kiem_tra_item_gio_hang = false;
            foreach ($mang_gio_hang as $item_gio_hang){
                if($item_gio_hang->id == $_POST['id_sach']){
                    $item_gio_hang->so_luong += $_POST['so_luong'];
                    $kiem_tra_item_gio_hang = true;
                }              
            }
            if($kiem_tra_item_gio_hang === false){  //chưa có giỏ hàng
                $mang_gio_hang[] = $thong_tin_sach;
            }
        }
        

        $_SESSION['gio_hang'] = $mang_gio_hang;
}
echo '<pre>',print_r($_SESSION['gio_hang']),'</pre>';
?>