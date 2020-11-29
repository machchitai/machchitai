import React, { Component } from 'react'

export default class DangNhapForm extends Component {
    render() {
        return (
            <form action="" method="post">
            
            <div class="container-form">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="tai_khoan" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="mat_khau" required/>
                    
                <button type="submit">Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label>
            </div>

            <div class="container-form" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
        )
    }
}
