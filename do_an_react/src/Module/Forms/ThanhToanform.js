import React, { Component } from 'react'

export default class ThanhToanform extends Component {
    render() {
        return (
            <form action="" method="POST" class="form-horizontal" role="form">
                <div class="form-group">
                    <legend>Thông tin giao hàng</legend>
                </div>

                <div class="form-group">
                    <div class="col-sm-2">
                        Họ tên:
                    </div>
                    <div class="col-sm-10">
                        <input type="text" name="ho_ten_nguoi_nhan" id="input" class="form-control" value="" required="required" title=""/>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2">
                        Email:
                    </div>
                    <div class="col-sm-10">
                        <input type="text" name="email_nguoi_nhan" id="input" class="form-control" value="" required="required" title=""/>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2">
                        Số điện thoại:
                    </div>
                    <div class="col-sm-10">
                        <input type="text" name="so_dien_thoai_nguoi_nhan" id="input" class="form-control" value="" required="required" title=""/>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2">
                        Địa chỉ:
                    </div>
                    <div class="col-sm-10">
                        <input type="text" name="dia_chi_nguoi_nhan" id="input" class="form-control" value="" required="required" title=""/>
                    </div>
                </div>
        
                
        
                <div class="form-group">
                    <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
    
        )
    }
}
