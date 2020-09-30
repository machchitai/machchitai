<?php

   

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bai tập 11</title>

    
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
                      <label>GIẢI PHƯƠNG TRÌNH BẬC NHẤT</label>
                    </div>                    
                    
                </div>
        
                <div class="form-group" style="background-color: cyan ; margin: 0px auto; padding: 20px; ">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      Phương trình 
                    </div>

                    
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        <input type="number" name="a" id="a" style="width:90px;" class="form-control" value="<?php echo $_POST["a"] ?>"  required="required" title=""> x + <input type="number" name="b" id="b" style="width:90px;" class="form-control" value="<?php echo $_POST["b"] ?>"  required="required" title=""> = 0
                        
                    </div>   
                    
                                                                                
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
                        
                        Nghiệm 

                        <input type="text" name="n" style="width:180px;" class="form-control" value="x = <?php echo $_POST["n"] ?>" disabled>
                        
                    </div>
            
                
                </div>
         
                   
                <div class="form-group" style="width: 100px; margin: 10px auto; ">
                    <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="btn btn-primary">Giải phương trình</button>
                    </div>
                </div>
        </form>
        </div>
        
    </div>
    
    
</body>
</html>