<?php
    $so_sach_tren_trang = 10;

    $db = new PDO('mysql:host=localhost;dbname=ban_sach_online_db', 'root', '');

    $db->query('set names utf8');

    $SQL_query = "SELECT * FROM bs_sach";

    $statement = $db->prepare($SQL_query);
    $statement->execute();

    $ds_sach = $statement->fetchAll(PDO::FETCH_OBJ);

    $trang_hien_tai = (isset($_GET['trang']))?$_GET['trang']:0;

    $SQL_query = "SELECT * FROM bs_sach LIMIT ".$trang_hien_tai*$so_sach_tren_trang.",$so_sach_tren_trang";

    // echo $SQL_query;

    $statement = $db->prepare($SQL_query);
    $statement->execute();

    $ds_sach_hien_thi = $statement->fetchAll(PDO::FETCH_OBJ);

    $so_luong_sach = count($ds_sach);
    $so_trang = ceil($so_luong_sach/$so_sach_tren_trang);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">   

    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
    <!-- <link rel="stylesheet" href="//cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css"> //cach 2
    <script src="//cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script> -->

    <script type="text/javascript" src="../admin/js/simplePagination.js"></script>
    <link type="text/css" rel="stylesheet" href="../admin/css/simplePagination.css"/>

    <title>Danh sach</title>
</head>
<body>
    <div class="container">
        <div class="list_sach">
            
            <table class="table table-hover" id="table_sach">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ten sach</th>
                        <th>Don gia</th>
                        <th>Gia bia</th>
                    </tr>
                </thead>

                <tbody>
                    
                       <?php
                                foreach($ds_sach as $item_sach){
                                    ?>
                                    <tr>
                                        <td><?php echo $item_sach->id; ?></td>
                                        <td><?php echo $item_sach->ten_sach; ?></td>
                                        <td><?php echo $item_sach->don_gia; ?></td>
                                        <td><?php echo $item_sach->gia_bia; ?></td>
                                        <td>
                                            <input type="checkbox" name="chon_sach[]" id="" value="<?php echo $item_sach->id?>">
                                        </td>
                                    </tr>                                    
                                    <?php
                                }
                                ?>
                </tbody>
            </table>            
        </div>



        <!-- <script>
            $(document).ready( function () {
                $('#table_sach').DataTable();
            } );
        </script> cach 2 --> 

        <script>
            $(function() {
                $(selector).pagination({
                    items: <?php echo $so_luong_sach ?>,
                    itemsOnPage: 10,
                    cssStyle: 'light-theme',
                    onPageClick: function(pageNumber){
                        console.log(pageNumber-1);

                        $.get('http://localhost:8181/machchitai/do_an/admin/api.php');

                        
                    }
                });
            });
        </script>
        
    </div>
</body>
</html>