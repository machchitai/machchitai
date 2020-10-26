<?php
import_file('./model/xl_sach');
$xl_sach = new xl_sach();

if(isset($_SESSION['gio_hang'])){
    $mang_gio_hang = $_SESSION['gio_hang'];
}
else {
    $mang_gio_hang = [];
}

if(isset($_POST['btn_cap_nhat'])){
    foreach ($mang_gio_hang as $item_gio_hang){
        $item_gio_hang->so_luong = $_POST['so_luong_cap_nhat'][$item_gio_hang->id];    
    }
    $_SESSION['gio_hang'] = $mang_gio_hang; 
}

if(isset($_GET['id_xoa'])) {
    foreach($mang_gio_hang as $key => $item_gio_hang){
        if($item_gio_hang->id == $_GET['id_xoa']){
            unset($mang_gio_hang[$key]);
        }
    }
    $_SESSION['gio_hang'] = $mang_gio_hang; 
    ?>
    <script>
        window.location.href = '/machchitai/do_an/?page=gio-hang';
    </script>
    <?php
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

    <form action="/machchitai/do_an/?page=gio-hang" method="POST">
        <table class="table table-hover table_gio_hang">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên sách</th>
                    <th>Hình</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>

                <?php
                    foreach($mang_gio_hang as $item_gio_hang){
                        ?>
                        <tr>
                            <td><?php echo $item_gio_hang->id;?></td>
                            <td><?php echo $item_gio_hang->ten_sach;?></td>
                            <td><img src="/machchitai/do_an/public/images/sach/<?php echo $item_gio_hang->hinh;?>" alt=""></td>
                            <td><?php echo $item_gio_hang->don_gia;?></td>
                            <td>
                                <input type="number" 
                                name="so_luong_cap_nhat[<?php echo $item_gio_hang->id;?>]"
                                id="so_luong_<?php echo $item_gio_hang->id; ?>"  min="1" step="1" 
                                value="<?php echo $item_gio_hang->so_luong;?>" class="form-control" title="">  
                            </td>
                            <td><?php echo $item_gio_hang->so_luong*$item_gio_hang->don_gia;?></td>
                            <td>
                                <a href="/machchitai/do_an/?page=gio-hang&id_xoa=<?php echo $item_gio_hang->id; ?>">
                                    
                                    <button type="button" class="btn btn-danger">                                
                                    
                                        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>                               
                                        
                                         Xóa
                                
                                    </button>
                                    
                                </a>    
                            </td>
                        </tr>
                        <?php
                    }
                ?>            
            </tbody>     
        </table>

        <div class="include_button">
            <input type="submit" class="btn btn-primary" value="Cập nhật giỏ hàng" name="btn_cap_nhat">
            <button type="button" class="btn btn-danger">
                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Xóa giỏ hàng
            </button>
        </div>

    </form>
    


    
</body>