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
WHERE (id_loai_sach=56 OR id_loai_sach=90 OR id_loai_sach=92) 
AND trong_luong>=300
ORDER BY trong_luong ASC;

-- query 1.14
SELECT * 
FROM bs_sach
WHERE id_loai_sach=45 OR don_gia<=60000;

-- query 1.15
SELECT ten_sach,sku,gioi_thieu,kich_thuoc,trong_luong,don_gia,gia_bia
FROM bs_sach
WHERE gioi_thieu LIKE '%huyền bí%' OR gioi_thieu LIKE '%du lịch%';

-- query 1.16
SELECT * 
FROM bs_sach
WHERE trong_luong IN (280,350,380);

-- query 1.17
SELECT ten_sach,gioi_thieu,trong_luong,don_gia,gia_bia
FROM bs_sach
ORDER BY don_gia DESC
LIMIT 10;

-- query 1.18
SELECT ten_sach,gioi_thieu,trong_luong,don_gia,gia_bia
FROM bs_sach
WHERE gioi_thieu LIKE '%mạnh%' OR gioi_thieu LIKE '%magic%' 
ORDER BY don_gia DESC
LIMIT 3;

-- query 1.19
SELECT * 
FROM bs_nha_xuat_ban
WHERE ten_nha_xuat_ban IS NOT NULL
AND dia_chi IS NOT NULL
AND dien_thoai IS NOT NULL
AND  email IS NOT NULL;

-- query 1.20
SELECT * 
FROM bs_sach
WHERE so_trang>500 AND trong_luong>500;

-- query 2.1
SELECT nxb.ten_nha_xuat_ban,nxb.dia_chi,nxb.email,nxb.dien_thoai, COUNT(nxb.id) as so_sach
FROM bs_nha_xuat_ban nxb
JOIN bs_sach s
ON s.id_nha_xuat_ban = nxb.id
GROUP BY nxb.id
ORDER BY nxb.id ASC;

-- query 2.2   
SELECT nxb.ten_nha_xuat_ban,nxb.dia_chi,nxb.email,nxb.dien_thoai, COUNT(nxb.id) as so_sach
FROM bs_nha_xuat_ban nxb
JOIN bs_sach s
ON s.id_nha_xuat_ban = nxb.id
GROUP BY nxb.id
ORDER BY so_sach ASC;

-- query 2.3
SELECT nxb.ten_nha_xuat_ban, nxb.dien_thoai, AVG(s.gia_bia)
FROM bs_nha_xuat_ban nxb
JOIN bs_sach s 
ON s.id_nha_xuat_ban = nxb.id
GROUP BY nxb.id;

-- query 2.4   
SELECT nxb.ten_nha_xuat_ban, MIN(s.don_gia)
FROM bs_nha_xuat_ban nxb
JOIN bs_sach s 
ON s.id_nha_xuat_ban = nxb.id
GROUP BY nxb.id;

SELECT nxb.ten_nha_xuat_ban, MAX(s.don_gia)
FROM bs_nha_xuat_ban nxb
JOIN bs_sach s 
ON s.id_nha_xuat_ban = nxb.id
GROUP BY nxb.id;

-- query 2.5
SELECT SUM(ctdh.so_luong) as so_luong_ban, s.ten_sach, s.sku, s.gioi_thieu, s.kich_thuoc,s.trong_luong, dh.ngay_dat
FROM bs_chi_tiet_don_hang ctdh
JOIN bs_don_hang dh
ON ctdh.id_don_hang = dh.id
JOIN bs_sach s
ON s.id = ctdh.id_sach
WHERE YEAR(dh.ngay_dat)=2016
GROUP BY s.id
ORDER BY so_luong_ban DESC
LIMIT 10;

-- query 2.6   
SELECT SUM(ctdh.thanh_tien) as tong_doanh_thu, dh.ngay_dat, s.ten_sach, s.sku, s.gioi_thieu, s.kich_thuoc, s.trong_luong, s.don_gia, s.gia_bia
FROM bs_chi_tiet_don_hang ctdh
JOIN bs_don_hang dh
ON ctdh.id_don_hang = dh.id
JOIN bs_sach s
ON s.id = ctdh.id_sach
WHERE YEAR(dh.ngay_dat)=2016
GROUP BY s.id
ORDER BY tong_doanh_thu DESC
LIMIT 10;

-- query 2.7
SELECT SUM(ctdh.thanh_tien) as doanh_thu_thang_3, dh.ngay_dat,s.ten_sach, s.sku, s.gioi_thieu, s.kich_thuoc, s.trong_luong, s.don_gia, s.gia_bia
from bs_chi_tiet_don_hang ctdh
JOIN bs_sach s 
on s.id = ctdh.id_sach
join bs_don_hang dh 
on dh.id = ctdh.id_don_hang
WHERE YEAR(dh.ngay_dat)=2016 AND MONTH(dh.ngay_dat)=3
group BY s.id 
ORDER by s.ten_sach ASC 
LIMIT 3; 

-- query 2.8
SELECT dh.id, dh.ngay_dat, dh.tong_tien, SUM(ctdh.so_luong) as tong_so_luong
from bs_don_hang dh 
join bs_chi_tiet_don_hang ctdh
on dh.id = ctdh.id_don_hang
group by dh.id
order by dh.id ASC;

-- query 2.9
SELECT dh.*
from bs_don_hang dh 
WHERE dh.tong_tien>=500000
ORDER BY dh.id ASC;

-- query 2.10
