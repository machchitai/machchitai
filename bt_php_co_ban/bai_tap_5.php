<?php

    if ( isset($_POST['canha']) && isset($_POST['canhb']) ){
        $canhhuyen = sqrt( $_POST['canha']*$_POST['canha'] + $_POST['canhb']*$_POST['canhb'] );
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bai tập 5</title>

    
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
                      CẠNH HUYỀN TAM GIÁC VUÔNG
                    </div>                    
                    
                </div>
        
                <div class="form-group" style="background-color: #FFFFCC ; margin: 0px auto; padding: 20px; ">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Cạnh A
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" name="canha" id="canha" style="width:180px;" class="form-control" value="<?php echo $_POST["canha"] ?>"  required="required" title="">
                        
                    </div>   
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Cạnh B
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" name="canhb" id="canhb" style="width:180px;" class="form-control" value="<?php echo $_POST["canhb"] ?>" required="required" title="">
                        
                    </div>   
                    
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                          Cạnh huyền
                    </div>

                        
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        
                        <input type="number" disabled value="<?php echo round($canhhuyen,2) ?>">
                        
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