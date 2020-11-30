import LogoBanner from './LogoBanner';
import React, { Component } from 'react';
import $ from 'jquery';
//import ReactDOM from 'react-dom';

class TopBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      title_logo: this.props.title_page,
      count: 1,
      interval: null,
      search: '',
      thong_tin_user: {
        name: '',
        tai_khoan:'',
        mat_khau:''
      },
      message_error:{
        general_error:''
      }
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSearchfunction = this.handleSearchfunction.bind(this);
    this.handleChangeInputLoginForm = this.handleChangeInputLoginForm.bind(this);
    this.handleSubmitLoginForm = this.handleSubmitLoginForm.bind(this);
  }

  updateCount(){
    this.setState({
      count: this.state.count + 1
    });
  }

  componentDidMount(){
    // this.setState({
    //   interval: setInterval(() => {
    //     this.updateCount();
    //     //console.log(this.state.title_logo);
    //   }, 1000)
    // })
  }

  componentDidUpdate(){
    // console.log("đang didupdate");
    // if(this.state.count == 3){
    //   this.props.delete_me();
    // }
  }

  componentWillUnmount(){
    console.log('đang bắt đầu cho component remove');
    clearInterval(this.state.interval);
  }

  handleSubmitLoginForm = (e) => {

    e.preventDefault();

    if(this.state.thong_tin_user.tai_khoan == 'machchitai' && this.state.thong_tin_user.mat_khau == '123456'){
      console.log('Đăng nhập thành công!');
      var thong_tin_user_temp = {...this.state.thong_tin_user};

      thong_tin_user_temp.name = 'Tài Mạch';

      this.setState({  
          thong_tin_user: thong_tin_user_temp
        },() => {
          $('#modal-id').hide();
          $('.modal-backdrop').hide();
        });
    }

    else {
      this.setState({
        message_error:{
          general_error:'Tài khoản hoặc mật khẩu không chính xác'
        }
      })
    }

  }

  handleChangeInputLoginForm = (e) => {
    var thong_tin_user_temp = {...this.state.thong_tin_user};

    thong_tin_user_temp[e.target.name] = e.target.value;

    this.setState({  
      thong_tin_user: thong_tin_user_temp
    },() => {
      //console.log(this.state);
    })
  }


  handleChangeInput = (e) => {
      //console.log(e.target.value);

      this.setState({
        search: e.target.value
      })
  }

  handleSearchfunction = () => {
    console.log(this.state.search);
  }

  render() {
    //console.log(this.state.count);
    return (
      <div className="top-banner">
        <div className="header">
          <div className="container">
            <div className="headr-left">
              <div className="social">
                <a href="#"><i className="facebook"></i></a>
                <a href="#"><i className="twitter"></i></a>
                <a href="#"><i className="gplus"></i></a>
                <a href="#"><i className="pin"></i></a>
                <a href="#"><i className="youtube"></i></a>
              </div>
              <div className="search">
                <form>
                  <input type="button" className="button_submit" onClick={this.handleSearchfunction}  />
                  <input type="text" value={this.state.search} onChange={this.handleChangeInput} placeholder="Search..." />
                </form>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="headr-right">
              <div className="details">
                <ul>
                  <li><a href="mailto@example.com"><span className="glyphicon glyphicon-envelope"
                        aria-hidden="true"></span>info(at)example.com</a></li>
                  <li><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>(+1)000 123 456789
                  </li>
                </ul>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="banner-info">
                <div className="container">
                  <LogoBanner title_logo={this.state.title_logo} />
                  <div className="top-menu">
                    <span className="menu"></span>
                    <ul className="nav1">
                      <li className="active"><a href="index.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="reviews.html">Reviews</a></li>
                      <li><a href="typo.html">News</a></li>
                      <li><a href="gallery.html">Gallery</a></li>
                      <li><a href="contact.html">Mail</a></li>  
                      {
                        (this.state.thong_tin_user.name != '')?
                        <li><a href="">{this.state.thong_tin_user.name}</a></li>  
                        :
                        <li><a href='#modal-id' className="btn btn-primary" data-toggle="modal">Đăng nhập</a></li>  
                      }                              

                    </ul>
                  </div>

                  <div className="clearfix"></div>
                  
                </div>   
          </div>    

          <div className="modal fade" id="modal-id">

            <form className="login_form" action="" method="POST" onSubmit={this.handleSubmitLoginForm}>
                  <div className="modal-dialog">
                    <div className="modal-content">

                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title">Đăng nhập</h4>
                      </div>

                      <div className="modal-body">  

                            <div className="error">
                              
                              {this.state.message_error.general_error}

                            </div>                        

                            <div className="container-form">
                                <label htmlFor="uname" style={{padding:10}}><b>Tài khoản</b></label>

                                <input type="text" onChange={this.handleChangeInputLoginForm} id="tai_khoan" placeholder="Tài khoản" name="tai_khoan" value={this.state.thong_tin_user.tai_khoan} required/>

                                <label htmlFor="psw" style={{padding:10}}><b>Mật khẩu</b></label>

                                <input type="password" onChange={this.handleChangeInputLoginForm}  id="mat_khau"  placeholder="Mật khẩu" name="mat_khau" value={this.state.thong_tin_user.mat_khau} required/>                                                                      
                            </div>                        

                      </div>

                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Đóng</button>
                        <button type="submit" className="btn btn-primary">Đăng nhập</button>
                      </div>

                    </div>
                  </div>
                  
              </form>            
        </div>
      </div>
    );
  }

}

export default TopBanner;