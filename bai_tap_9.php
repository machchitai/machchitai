<?php
    
    if ( isset($_POST['toan']) && isset($_POST['ly']) && isset($_POST['hoa'])){        

        if ($_POST['toan']!= 0 && $_POST['ly']!= 0 && $_POST['hoa']!= 0) {
            $_POST['tong'] = $_POST['toan'] + $_POST['ly']+ $_POST['hoa'] ;
            if ( $_POST['tong'] >=  $_POST['chuan']){
                $_POST['kq'] = 'Đậu';
            }
            else {
                $_POST['kq'] = 'Rớt';
            }
        }
        else {
            $_POST['kq'] = 'Rớt';
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
                      KẾT QUẢ THI ĐẠI HỌC
                    </div>                    
                    
                </div>
        
                <div class="form-group" style="background-color: cyan ; margin: 0px auto; padding: 20px; ">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Toán
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" step="0.25" name="toan" id="toan" style="width:180px;" class="form-control" value="<?php echo $_POST["toan"] ?>"  >
                        
                    </div>   

                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Lý 
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" step="0.25" name="ly" id="ly" style="width:180px;" class="form-control" value="<?php echo $_POST["ly"] ?>"  >
                        
                    </div>   
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Hóa
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" step="0.25" name="hoa" id="hoa" style="width:180px;" class="form-control" value="<?php echo $_POST["hoa"] ?>"  >
                        
                    </div>
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Điểm chuẩn
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" step="0.25" name="chuan" id="chuan" style="width:180px;color:red;" class="form-control" value="<?php echo $_POST['chuan']?>">
                        
                    </div> 

                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Tổng điểm
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" step="0.25" name="tong" id="tong" style="width:180px;" class="form-control" value="<?php echo $_POST["tong"] ?>"  disabled>
                        
                    </div> 

                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Kết quả thi
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="text" name="kq" id="kq" style="width:180px;" class="form-control" value="<?php echo $_POST["kq"] ?>" disabled>
                        
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