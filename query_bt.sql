-- query 1.1
select ten_nha_xuat_ban,dia_chi,dien_thoai
from bs_nha_xuat_ban;

-- query 1.2
select ho_ten,dia_chi,dien_thoai
from bs_nguoi_dung;

-- query 1.3  
select ten_tac_gia,gioi_thieu
from bs_tac_gia;

-- query 1.4
SELECT ho_ten,email,ngay_sinh,dia_chi,dien_thoai
FROM bs_nguoi_dung
ORDER BY ho_ten asc;

-- query 1.5
SELECT ten_sach,sku,gioi_thieu,kich_thuoc,trong_luong,don_gia,gia_bia
FROM bs_sach
ORDER BY don_gia DESC, gia_bia DESC, ten_sach ASC;

-- query 1.6
SELECT ten_sach,sku,gioi_thieu,kich_thuoc,trong_luong,don_gia,gia_bia
FROM bs_sach
WHERE ten_sach LIKE 'Series%';

-- query 1.7
SELECT id, tieu_de_tin, noi_dung_tom_tat, noi_dung_chi_tiet,hinh_dai_dien,trang_thai
FROM bs_tin_tuc
WHERE hinh_dai_dien LIKE '%.jpg';

-- query 1.8
SELECT *
FROM bs_sach
WHERE ten_sach LIKE '%Tái bản%';

-- query 1.9
SELECT ten_sach,sku,gioi_thieu,kich_thuoc,trong_luong,don_gia,gia_bia
FROM bs_sach
WHERE don_gia>10000
ORDER BY ten_sach DESC;

-- query 1.10
SELECT ten_sach,sku,gioi_thieu,kich_thuoc,trong_luong,don_gia,gia_bia
FROM bs_sach
WHERE id_loai_sach=17 AND id_nha_xuat_ban=11
ORDER by ten_sach ASC;

-- query 1.11
SELECT *
FROM bs_sach
WHERE trong_luong>=500 OR gia_bia>150000;

-- query 1.12
SELECT * 
FROM bs_sach
WHERE don_gia>=500000 AND don_gia<=2500000;

-- query 1.13
SELECT * 
FROM bs_sach
WHERE (id_loai_sach=56 OR id_loai_sach=90 OR id_loai_sach=92) AND trong_luong>=300
ORDER BY trong_luong ASC;