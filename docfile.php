<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đọc thư mục</title>
</head>
<body>
    <?php
        $dir = opendir('../machchitai');
        while(($file = readdir($dir))!==false){
            echo $file . '</br>';
        }
        closedir($dir);
    ?>
</body>
</html>