<?php
$dongia = 2000;
$chisocu = $_POST['chisocu'];
$chisomoi = $_POST['chisomoi'];
$sotien = 0;

if (isset($_POST['dongia'])){
    $dongia = $_POST['dongia'];

} else {
    $dongia = 2000;
}
$sotien = ($chisomoi - $chisocu) * $dongia;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bai tập 4</title>

    
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
</head>
<body>
    
    
    <div class="container">
        <div class="row">
        <form action="" method="POST" class="form-horizontal" role="form">
                <div class="form-group" style="background-color: #FFCC66;  margin: 0px auto;">
                    
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="text-align:center; font-size:24px; color:brown;">
                       Thanh toán tiền điện
                    </div>                    
                    
                </div>
        
                <div class="form-group" style="background-color: #FFFFCC ; margin: 0px auto; padding: 20px; ">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                       Tên chủ hộ
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="text" name="ten" id="input" style="width:180px;" class="form-control" value="<?php echo $_POST["ten"] ?>" min="" max="" step="" required="required" title="">
                        
                    </div>   
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                       Chỉ số cũ
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" name="chisocu" id="input" style="width:180px;" class="form-control" value="<?php echo $_POST["chisocu"] ?>" min="" max="" step="" required="required" title=""> (Kw)
                        
                    </div>    
                   

                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                       Chỉ số mới
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" name="chisomoi" id="input" style="width:180px;" class="form-control" value="<?php echo $_POST["chisomoi"] ?>" min="" max="" step="" required="required" title=""> (Kw)
                        
                    </div>    

                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                       Đơn giá
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" name="dongia" id="input" style="width:180px;" class="form-control" value="<?php echo $dongia ?>" min="" max="" step="" required="required" title=""> (VND)
                        
                    </div>    
                    
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                           Số tiền thanh toán
                    </div>

                        
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        
                        <input type="number" disabled value="<?php echo $sotien ?>"> (VND)
                        
                    </div>
            
                
                </div>
         
                   
                <div class="form-group" style="width: 100px; margin: 10px auto; ">
                    <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="btn btn-primary">Tính</button>
                    </div>
                </div>
        </form>
        </div>
        
    </div>
    
    
</body>
</html>