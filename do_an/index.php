<?php
session_start();

include_once('./libraries/function_support.php');

include_once('./widgets/head.php');

include_once('./widgets/header.php');

if(isset($_GET['page'])){
    if($_GET['page'] == 'sach'){
        include_once('./pages/ds_sach.php');
    }
    else if($_GET['page'] == 'loai-sach'){
        include_once('./pages/trang_sach_theo_loai.php');
    }
    else if($_GET['page'] == 'chi-tiet-sach'){
        include_once('./pages/trang_chi_tiet_sach.php');
    }
    else if($_GET['page'] == 'gio_hang'){
        include_once('./pages/trang_gio_hang.php');
    }
    else{
        include_once('./pages/trang_chu.php');
    }
}
else {
    include_once('./pages/trang_chu.php');
}


?>