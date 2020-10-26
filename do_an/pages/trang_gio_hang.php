<?php
import_file('./model/xl_sach');
$xl_sach = new xl_sach();

if(isset($_POST['so_luong']) && isset($_POST['id_sach'])){
        //echo '<pre>',print_r($_POST),'</pre>';
    
        $thong_tin_sach = $xl_sach->lay_thong_tin_sach_theo_id($_GET['id_sach']);
        $thong_tin_sach->gioi_thieu = '';
        $thong_tin_sach->so_luong = $_POST['so_luong'];

        $mang_gio_hang[] = $thong_tin_sach;
        $_SESSION['gio_hang'] = $mang_gio_hang;
}
echo '<pre>',print_r($_SESSION['gio_hang']),'</pre>';
?>