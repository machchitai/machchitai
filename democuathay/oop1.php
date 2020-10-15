<?php

class pheptinh {
    private $sothunhat;
    private $sothuhai;

    function pheptinh($a,$b){
        $this->sothunhat = $a;
        $this->sothuhai = $b;
    }

    function set_so1($c) {
        $this->sothunhat = $c;
    }

    function set_so2($c) {
        $this->sothuhai = $c;
    }

    function so1(){
        return $this->sothunhat ;
    }

    
    function so2(){
        return $this->sothuhai ;
    }


    function tinhtong(){  
        return $this->sothunhat+$this->sothuhai;
    }

    function tinhhieu(){  
        return $this->sothunhat-$this->sothuhai;
    }

    function tinhtich(){  
        return $this->sothunhat*$this->sothuhai;
    }

    function tinhthuong(){  
        return $this->sothunhat/$this->sothuhai;
           
    }
}
  
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bài tập hướng đối tượng 1</title>
    
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
</head>
<body>

<div class="container">
               
            <form action="" method="POST" role="form">
                <div class="form-group">
                    <legend>PHÉP TÍNH</legend>
                </div>            
                <div class="form-group">
                    <label for="">Số thứ nhất</label>
                    <input type="number" class="form-control" name="sothunhat"  value="<?php if(isset($_POST['sothunhat'])) echo $_POST['sothunhat']?>">
                </div>

                <div class="form-group">
                    <label for="">Số thứ hai</label>
                    <input type="number" class="form-control" name="sothuhai"  value="<?php if(isset($_POST['sothunhat'])) echo $_POST['sothuhai']?>">
                </div>
            
                
                <div class="radio">
                    <label>
                        <input type="radio" name="pheptinh"  value="+" id="cong"  <?php if($_POST['pheptinh'] == '+') echo 'checked'; ?>>
                        Cộng
                    </label>
                    <label>
                        <input type="radio" name="pheptinh" value="-" id="tru" <?php if($_POST['pheptinh'] == '-') echo 'checked'; ?>>
                        Trừ
                    </label>
                    <label>
                        <input type="radio" name="pheptinh"  value="*" id="nhan" <?php if($_POST['pheptinh'] == '*') echo 'checked'; ?>>
                        Nhân
                    </label>
                    <label>
                        <input type="radio" name="pheptinh" value="/" id="chia" <?php if($_POST['pheptinh'] == '/') echo 'checked'; ?>>
                        Chia
                    </label>
                </div>               
            
                <button type="submit" class="btn btn-primary">Tính</button>
            </form>            
</div>

<div class="kq">
    <p>Kết quả</p>
    <?php
        if (isset($_POST['sothunhat']) && isset($_POST['sothuhai'])){
          $ketqua = new pheptinh($_POST['sothunhat'],$_POST['sothuhai']);
          $string = $ketqua->so1().$_POST['pheptinh'].$ketqua->so2()." = ";
          switch ($_POST['pheptinh']){
              case '+': echo $string.$ketqua->tinhtong(); break;
              case '-': echo $string.$ketqua->tinhhieu();break;
              case '*': echo $string.$ketqua->tinhtich();break;
              case '/':
              if ($ketqua->so2() != 0){
                echo $string.$ketqua->tinhthuong();break;
              }
              else echo 'Không chia được cho 0';break;
              
          }
          
        }
    ?>
</div>


</body>
</html>

