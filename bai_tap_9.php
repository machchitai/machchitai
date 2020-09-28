<?php

    if ( isset($_POST['hk1']) && isset($_POST['hk2'])){
        $_POST['tb'] = ($_POST['hk1'] + $_POST['hk2']*2) / 3 ;

        if ($_POST['tb'] >= 5) {
            $_POST['kq'] = 'Được lên lớp';
        }
        if ($_POST['tb'] < 5) {
            $_POST['kq'] = 'Ở lại lớp';
        }

        if ($_POST['tb'] >= 8){
            $_POST['hl'] = 'Giỏi';
        }

        if ($_POST['tb'] < 8 && $_POST['tb'] >= 6.5){
            $_POST['hl'] = 'Khá';
        }

        if ($_POST['tb'] < 6.5 && $_POST['tb'] >= 5){
            $_POST['hl'] = 'Trung Bình';
        }

        if ($_POST['tb'] < 5){
            $_POST['hl'] = 'Yếu';
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bai tập 9</title>

    
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
</head>
<body>
    
    
    <div class="container">
        <div class="row">
        <form action="" method="POST" class="form-horizontal" role="form">
                <div class="form-group" style="background-color: lightblue;  margin: 0px auto;">
                    
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="text-align:center; font-size:24px; color:blue;">
                      <label>KẾT QUẢ THI ĐẠI HỌC</label>
                    </div>                    
                    
                </div>
        
                <div class="form-group" style="background-color: cyan ; margin: 0px auto; padding: 20px; ">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Toán
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" step="0.25" name="hk1" id="hk1" style="width:180px;" class="form-control" value="<?php echo $_POST["hk1"] ?>"  >
                        
                    </div>   

                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Lý 
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" step="0.25" name="hk2" id="hk2" style="width:180px;" class="form-control" value="<?php echo $_POST["hk2"] ?>"  >
                        
                    </div>   
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Hóa
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" step="0.25" name="hk2" id="hk2" style="width:180px;" class="form-control" value="<?php echo $_POST["hk2"] ?>"  >
                        
                    </div>
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Điểm chuẩn
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" name="chuan" id="chuan" style="width:180px;color:red;" class="form-control" value="<?php echo $_POST['chuan']?>">
                        
                    </div> 

                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Tổng điểm
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" name="tong" id="tong" style="width:180px;" class="form-control" value="<?php echo $_POST["kq"] ?>"  disabled>
                        
                    </div> 

                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Xếp loại học lực
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="text" name="hl" id="hl" style="width:180px;" class="form-control" value="<?php echo $_POST["hl"] ?>" disabled>
                        
                    </div>                                                                            
                    
                           
                </div>
         
                   
                <div class="form-group" style="width: 100px; margin: 10px auto; ">
                    <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="btn btn-primary">Xem kết quả</button>
                    </div>
                </div>
        </form>
        </div>
        
    </div>
    
    
</body>
</html>