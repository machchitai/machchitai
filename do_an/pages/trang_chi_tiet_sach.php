<?php
include_once('./model/xl_sach.php');

$xl_sach = new xl_sach();

$thong_tin_sach = $xl_sach->lay_thong_tin_sach_theo_id($_GET['id_sach']);
echo '<pre>',print_r($thong_tin_sach), '</pre>';
?>
<body class="main_content">
    <div class="container-fluid">
        
        <div class="title_sach">
            <?php echo $thong_tin_sach->ten_sach;?>
        </div>

        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="image_sach">
                <img src="" alt="">
            </div>
        </div>

        
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div class="ten_tac_gia">
                Tác giả: <?php echo $thong_tin_sach->ten_tac_gia;?>
            </div>

            <div class="don_gia">
                Giá bán Bookstore: <?php echo $thong_tin_sach->don_gia;?>
            </div>

            <div class="don_gia">
                Giá bìa: <?php echo $thong_tin_sach->gia_bia;?>
            </div>

            <div class="include_xu_ly_gio_hang">
               
               <input type="number" name="" id="input" class="form-control" value="" required="required" title="">
               
               <button type="button" class="btn btn-default">Thêm vào giỏ hàng
                   
                   <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                   
               </button>
               
            </div>
            
        </div>

        <div class="mo_ta_sach">
            <?php echo $thong_tin_sach->gioi_thieu; ?>
        </div>
        
    </div>
</body>
</html>