<?php
    $ho = '';
    $dem = '';
    $ten ='';
    if (isset($_POST['hoten'])){
        $mangten = explode(' ', $_POST['hoten']);
        $ho = $mangten[0];
        $ten = $mangten[count($mangten)-1];
        array_pop($mangten);
        $mangten[0]='';
        $dem = implode(' ',$mangten);
    }
    

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bai tập mảng 2</title>

    
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
                      <label>TÁCH HỌ VÀ TÊN</label>
                    </div>                    
                    
                </div>
        
                <div class="form-group" style="background-color: cyan ; margin: 0px auto; padding: 20px; ">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Họ và Tên
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="text" name="hoten" id="hoten" style="width:180px;" class="form-control" value="<?php echo $_POST["hoten"] ?>"  required="required" title="">
                        
                    </div>   
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                     Họ
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="text" name="ho" id="ho" style="width:180px;" class="form-control" value="<?php echo $_POST["ho"] ?>"  >
                        
                    </div>   

                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Tên đệm
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="text" name="dem" id="dem" style="width:180px;" class="form-control" value="<?php echo $_POST["dem"] ?>" >
                        
                    </div>   
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                     Tên
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="text" name="ten" id="ten" style="width:180px;" class="form-control" value="<?php echo $_POST["ten"] ?>" >
                        
                    </div>   
                    
            
                
                </div>
         
                   
                <div class="form-group" style="width: 100px; margin: 10px auto; ">
                    <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="btn btn-primary">Tách họ và tên</button>
                    </div>
                </div>
        </form>
        </div>
        
    </div>
    
    
</body>
</html>