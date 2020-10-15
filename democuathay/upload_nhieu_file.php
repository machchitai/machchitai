<?php
    echo '<pre>' . print_r($_FILES) . '</pre>';

    if($_FILES['hinh']){
        foreach ($_FILES['hinh']['name'] as $key => $value){
            $thong_tin_hinh = './demo/images/' . $_FILES['hinh']['name'][$key];
            move_uploaded_file($_FILES['hinh']['tmp_name'][$key], $thong_tin_hinh);
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload thư mục</title>
    
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
</head>

<body>
    <div class="container">
        <div class="hinhanh">
            <?php
                $dir = opendir('./demo/images');
                while(($file = readdir($dir))!==false){
                    if ($file != '.' && $file != '..'){
                        ?>
                        <img src="./demo/images/<?php echo $file;?>">
                        <?php
                    }                    
                }
                closedir($dir);
            ?>
        </div>
        
        <form action="" method="POST" role="form">
            <legend>Form  </legend>      
                          
            <div class="form-group">
                <label for="exampleFormControlFile1">Upload file</label>
                <input type="file" class="form-control-file" name="hinh" id="hinh" multiple=true>
            </div>           
                    
        
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        
        <div class="list_img">

        </div>

        <script>
            $(function(){
                $('hinh').change(function(){
                    var input = this;
                    var url = $(this).val();

                    console.log(input.files);

                    for (var i=0; i<input.files.length;i++){
                        var reader = new FileReader();

                        reader.onload = function (e) {
                            console.log(e.target);

                            var img = document.createElement('img');

                            img.src = e.target.result;

                            $('.list_img').append(img);
                        }

                        reader.readAsDataURL(input.files[i]);
                    }
                })
            })
        </script>
    </div>
</body>
</html>