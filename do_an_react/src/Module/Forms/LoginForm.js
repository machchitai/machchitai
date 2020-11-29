import React, { Component } from 'react'

export default class LoginForm extends Component {
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
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </div>
        </form>
        )
    }
}
