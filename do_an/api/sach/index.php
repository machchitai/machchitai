<?php

header('Content-Type: application/json');
include_once('../../libraries/function_support.php');
include_once('../../model/xl_sach.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET'){   // API XEM TẤT CẢ SÁCH

    $xl_sach = new xl_sach();

    $ds_sach = $xl_sach->lay_toan_bo_sach();

    echo json_encode(
        array(
            'error' => false,
            'message' => 'read all data',
            'data' => $ds_sach
        )
        );
}

else if ($_SERVER['REQUEST_METHOD'] == 'POST'){ // API THÊM SÁCH

    $string_data = file_get_contents("php://input");
    $info_sach = json_decode($string_data);

    $xl_sach = new xl_sach();
    $id_insert = $xl_sach->them_sach($info_sach->ten_sach, $info_sach->id_tac_gia, $info_sach->gioi_thieu, $info_sach->doc_thu, $info_sach->id_loai_sach, $info_sach->id_nha_xuat_ban, $info_sach->so_trang, $info_sach->ngay_xuat_ban, $info_sach->kich_thuoc, $info_sach->sku, $info_sach->trong_luong, $info_sach->trang_thai, $info_sach->hinh, $info_sach->don_gia, $info_sach->gia_bia, $info_sach->noi_bat) ;
    
    echo json_encode(
        array(
            'error' => false,
            'message' => 'Add new book successfully',
            'data' => $id_insert
        )
        );
}

else if ($_SERVER['REQUEST_METHOD'] == 'PUT'){  // API CẬP NHẬT SÁCH
    $string_data = file_get_contents("php://input");
    $info_sach = json_decode($string_data);

    //echo '<pre>',print_r($info_sach),'</pre>';

    $array_data = get_object_vars($info_sach); // đổi biến $info_sach sang mảng 
    $id_cap_nhat = $array_data['id_cap_nhat'];

    $xl_sach = new xl_sach();
    $result = $xl_sach->cap_nhat_sach($array_data,$id_cap_nhat);

    echo json_encode(
        array(
            'error' => false,
            'message' => 'Update book successfully',
            'data' => $result
        )
        );
}

else if ($_SERVER['REQUEST_METHOD'] == 'DELETE'){   // API XÓA SÁCH
    $string_data = file_get_contents("php://input");
    $info_sach = json_decode($string_data);

    // echo '<pre>',print_r($info_sach),'</pre>'; exit;

    $xl_sach = new xl_sach();
    $result = $xl_sach->xoa_sach($info_sach->id_xoa);

    echo json_encode(
        array(
            'error' => false,
            'message' => 'Delete book successfully',
            'data' => $result
        )
        );
}

else {
    
}

?>