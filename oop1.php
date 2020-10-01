<?php
class nhanvien{
    public $manv,$hotennv,$sodtnv,$diachinv,$ngaysinhnv,$hesoluong;
    function _contruct($manv,$hotennv,$sodtnv,$diachinv,$ngaysinhnv,$hesoluong){
        $this->manv = $manv;
        $this->hotennv = $hotennv;
        $this->sodtnv = $sodtnv;
        $this->diachinv = $diachinv;
        $this->ngaysinhnv = $ngaysinhnv;
        $this->hesoluong = $hesoluong;
    }

    function luong(){
        return $this->hesoluong*1600000;
    }

    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $nhanvien = new nhanvien('nv_001', 'Nguyễn Xuân Hùng', '09-2011', '08-1898', 1.7, 1, 2);
        echo '<pre>',print_r($nhanvien),'</pre>';
        echo $nhanvien->luong();
    ?>
</body>
</html>

