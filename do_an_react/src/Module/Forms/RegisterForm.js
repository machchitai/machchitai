import React, { Component } from 'react'

export default class RegisterForm extends Component {
    render() {
        return (
            
            <form className="form-horizontal" onSubmit={this.handleSubmitFormLienHe}>

            <div className="form-group">
                <div className="col-sm-12">
                    <input type="text" name="username" onChange={this.handleChangeInput} value={this.state.username} className="form-control" placeholder={""} />
                    <div className="error">
                        {this.state.message_error.username}
                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-12">
                    <input type="password" name="password" onChange={this.handleChangeInput} value={this.state.password} className="form-control" placeholder={""} />
                    <div className="error">
                        {this.state.message_error.password}
                    </div>
                </div>
            </div>    
            
            <div className="form-group">
                <div className="col-sm-12">
                    <input type="text" name="ho_ten" onChange={this.handleChangeInput} value={this.state.ho_ten} className="form-control" placeholder={"Họ tên"} />
                    <div className="error">
                        {this.state.message_error.ho_ten}
                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-12">
                    <input type="text" name="so_dien_thoai" onChange={this.handleChangeInput} value={this.state.so_dien_thoai} className="form-control" placeholder={"Số điện thoại"} />
                    <div className="error">
                        {this.state.message_error.so_dien_thoai}
                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-12">
                    <input type="text" name="email" onChange={this.handleChangeInput} value={this.state.email} className="form-control" placeholder={"Email"} />
                    <div className="error">
                        {this.state.message_error.email}
                    </div>
                </div>
            </div>        

            <div className="form-group">
                <div className="col-sm-12">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </div>
        </form>
            
        )
    }
}
