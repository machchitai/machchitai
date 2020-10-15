<?php

    if ( isset($_POST['gio'])){
        if ($_POST['gio'] >= 0 && $_POST['gio'] < 10)
        {
            $chao = 'Chào buổi sáng';
        }
        if ($_POST['gio'] >= 10 && $_POST['gio'] < 14)
        {
            $chao = 'Chào buổi trưa';
        }
        if ($_POST['gio'] >= 14 && $_POST['gio'] < 18)
        {
            $chao = 'Chào buổi chiều';
        }
        if ($_POST['gio'] >= 18 && $_POST['gio'] <= 24)
        {
            $chao = 'Chào buổi tối';
        } 
        else
        {
            $chao = 'Giờ không đúng';
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bai tập 7</title>

    
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
                      <label> CHÀO THEO GIỜ</label>
                    </div>                    
                    
                </div>
        
                <div class="form-group" style="background-color: cyan ; margin: 0px auto; padding: 20px; ">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Nhâp giờ
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" name="gio" id="canha" style="width:180px;" class="form-control" value="<?php echo $_POST["gio"] ?>"  required="required" title="">
                        
                    </div>   
                    
                                                                                
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <?php echo $chao ?>
                        
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