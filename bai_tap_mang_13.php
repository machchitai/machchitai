<?php
    $mangdongvat = array(
        array(
            'ten' => 'Chim',
            'nd' => 'Chim là tập hợp các loài động vật có xương sống, máu nóng, đi đứng bằng hai chân, có mỏ, đẻ trứng, có cánh, có lông vũ và biết bay. Trong lớp Chim, có hơn 10.000 loài còn tồn tại, giúp chúng trở thành lớp đa dạng nhất trong các loài động vật bốn chi.'
        ),
        array(
            'ten' =>'Gấu',
            'nd' =>'Gấu là những loài động vật có vú ăn thịt thuộc Họ Gấu. Chúng được xếp vào Phân bộ Dạng chó. Mặc dù chỉ có 8 loài gấu còn sinh tồn, chúng phổ biến rất rộng rãi, xuất hiện ở nhiều môi trường sống khác nhau trên khắp Bắc Bán cầu và một phần ở Nam Bán cầu.'
        ), 
        array(
            'ten' =>'Lạc đà',
            'nd' =>'Lạc đà là tên gọi để chỉ một trong hai loài động vật guốc chẵn lớn trong chi Camelus, là Lạc đà một bướu và Lạc đà hai bướu. Cả hai loài này có nguồn gốc từ các vùng sa mạc của châu Á và Bắc Phi. Đây là loài động vật lớn nhất sống được trên sa mạc và các vùng khô cằn thiếu nước uống.'
        ),
        array(
            'ten' =>'Thỏ',
            'nd' =>'Thỏ là động vật có vú nhỏ được xếp vào họ Leporidae thuộc bộ Lagomorpha, sinh sống ở nhiều nơi trên thế giới. Thỏ được phân loại thành bảy loại, điển hình như thỏ rừng châu Âu, thỏ đuôi bông, thỏ Amami. Còn nhiều loài thỏ khác trên thế giới; thỏ đuôi bông, thỏ cộc và thỏ rừng được xếp vào bộ Lagomorpha'
        ),
        array(
            'ten' =>'Hổ',
            'nd' =>'Hổ, còn gọi là cọp, hùm, ông 30, khái là một loài động vật có vú thuộc Họ Mèo, và là một trong năm loài "mèo lớn" thuộc chi Panthera. Hổ là một loài thú ăn thịt, chúng dễ nhận biết nhất bởi các sọc vằn dọc sẫm màu trên bộ lông màu đỏ cam với phần bụng trắng.'
        ),
    );

$id = 0;
if(isset($_GET['id'])){
    $id = $_GET['id'];
}   
    
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bài tập mảng 13</title>
    
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
</head>
<body>
    <div class="container">
        
            <!-- <?php echo $_GET['id']?> -->
            
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1 style="background:orange;color:red;padding:10px;"><center>TỪ ĐIỂN ĐỘNG VẬT</center></h1>
            </div>
            
    

       
           
           <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
               <div class="title" style="font-weight:bold;">
                    Danh sách động vật
               </div>
               <div class="danhsachdv">
                    <?php
                        foreach($mangdongvat as $key => $dv){
                            ?>
                            <div class="ten_dong_vat">
                                <a href="?id=<?php echo $key; ?>">
                                    <?php
                                    echo $dv['ten'];
                                    ?>
                                </a>
                            </div>
                            <?php
                        }
                        ?>
               </div>
           </div>
                       
            
            <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                <div class="thongtin" style="font-weight:bold;">
                    Thông tin động vật
                </div>
                <div class="noidung" style="padding:10px;">
                    <?php
                            echo $mangdongvat[$id]['nd'];
                        ?>
                </div>
               
            </div>        
    </div>
</body>
</html>