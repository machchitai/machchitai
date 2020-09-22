<?php
if(isset($_POST["ban_kinh"])){
   
    $dien_tich = $_POST["ban_kinh"] * $_POST["ban_kinh"] * 3.14;
    $chu_vi = 2 * $_POST["ban_kinh"] * 3.14; 
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bai tập 3</title>

    
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
</head>
<body>
    
    
    <div class="container">
        <div class="row">
        <form action="" method="POST" class="form-horizontal" role="form">
                <div class="form-group" style="background-color: #FFCC66; width:800px; margin: 0px auto;">
                    
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="text-align:center; font-size:24px; color:brown;">
                        Diện tích và chu vi hình tròn
                    </div>                    
                    
                </div>
        
                <div class="form-group" style="background-color: #FFFFCC ; width: 800px; margin: 0px auto; padding: 20px; padding-left: 250px;">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Bán kính
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" name="ban_kinh" id="input" style="width:180px;" class="form-control" value="<?php echo $_POST["ban_kinh"] ?>" min="" max="" step="" required="required" title="">
                        
                    </div>                                
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Diện tích
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">

                        <input type="text" disabled value="<?php echo $dien_tich ?>">
                                                
                    </div>  

                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            Chu vi
                    </div>

                        
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        
                        <input type="text" disabled value="<?php echo $chu_vi ?>">
                        
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