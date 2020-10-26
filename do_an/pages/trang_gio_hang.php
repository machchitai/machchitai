<?php
import_file('./model/xl_sach');
$xl_sach = new xl_sach();

if(isset($_SESSION['gio_hang'])){
    $mang_gio_hang = $_SESSION['gio_hang'];
}
else {
    $mang_gio_hang = [];
}

if(isset($_POST['so_luong']) && isset($_POST['id_sach'])){ // nếu có thông tin đc gửi từ form
        //echo '<pre>',print_r($_POST),'</pre>';
        //echo $_GET['id_sach'];
        $thong_tin_sach = $xl_sach->lay_thong_tin_sach_theo_id($_POST['id_sach']); // thì lay thong tin sach
        $thong_tin_sach->gioi_thieu = ''; //rồi xoa thang gioi thieu để giảm bộ nhớ
        $thong_tin_sach->so_luong = $_POST['so_luong']; // rồi lay so luong từ form

        if(count($mang_gio_hang) > 0){ //nếu có giỏ hàng rồi
            $kiem_tra_item_gio_hang = false; //set flag kiem tra giỏ hàng có hàng chưa default=false
            foreach ($mang_gio_hang as $item_gio_hang){ //xét mỗi item sách trong giỏ hàng
                if($item_gio_hang->id == $_POST['id_sach']){ //nếu giỏ hàng có sẵn sách với id 
                    $item_gio_hang->so_luong += $_POST['so_luong']; //thì cộng dồn số lượng
                    $kiem_tra_item_gio_hang = true; //và set flag=true nghĩa là có hàng sẵn trong giỏ rồi
                }              
            }
            if($kiem_tra_item_gio_hang === false){   //nếu flag vẫn false nghĩa là 
                $mang_gio_hang[] = $thong_tin_sach; // trong giỏ đang ko có item đó
            }
        } 
        else { //còn nếu chưa có giỏ hàng
            $mang_gio_hang[] = $thong_tin_sach; //thì tạo giỏ hàng mới
        }       

        $_SESSION['gio_hang'] = $mang_gio_hang; 
}
//echo '<pre>',print_r($_SESSION['gio_hang']),'</pre>';
?>

<body class="main_content">
    
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Tên sách</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><?php echo $thong_tin_sach->ten_sach;?></td>
                <td><?php echo $thong_tin_sach->don_gia;?></td>
                <td><?php echo $thong_tin_sach->so_luong;?></td>
                <td>
                    <input type="checkbox" name="chon" id="">
                    <input type="button" name="xoa" value="Xóa">    
                </td>
            </tr>
        </tbody>
    </table>
    

</body>