import LogoBanner from './LogoBanner';
import React, { Component } from 'react';
import $ from 'jquery';
import ItemMenu from './ItemMenu';
import {withRouter} from 'react-router-dom';
//import ReactDOM from 'react-dom';

class TopBanner extends Component {

  constructor(props){
    super(props);
    this.state = { 
      
      // các state
      title_logo: this.props.title_page,  // state của logo truyền từ LogoBanner.js
      count: 1,       // biến đếm
      interval: null, 
      search: '',     // biến của search

      thong_tin_user: {   // state của thong_tin_user
        name: '',
        tai_khoan:'',
        mat_khau:''
      },

      message_error:{     // state của thông báo lỗi
        general_error:''
      },

      menu_list: [        // state của menu bar
        {
          title: 'Home',
          links: '/'
        },

        {
          title: 'About',
          links: '/about'
        },        

        {
          title: 'Details',
          links: '/details'
        },
        
        {
          title: 'Contact',
          links: '/contact'
        }
      ]
    };

    // function xử lý phải được bind trước khi render (tính năng của ReactJS)
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSearchfunction = this.handleSearchfunction.bind(this);
    this.handleChangeInputLoginForm = this.handleChangeInputLoginForm.bind(this);
    this.handleSubmitLoginForm = this.handleSubmitLoginForm.bind(this);
  }

  updateCount(){  // thay đổi biến đếm
    this.setState({
      count: this.state.count + 1
    });
  }

  componentDidMount(){ // get(load) object function
    
    var thong_tin_user_save = localStorage.getItem('thong_tin_user'); // load state vào cookie của browser

    if ( typeof thong_tin_user_save != 'undefined' && thong_tin_user_save != null){
      thong_tin_user_save = JSON.parse(thong_tin_user_save);

      if (thong_tin_user_save.tai_khoan){

        this.setState({  // thay đổi state
          thong_tin_user: thong_tin_user_save
        }, () => {
          console.log(this.state.thong_tin_user);          
        })
      }

    }
    // this.setState({
    //   interval: setInterval(() => {
    //     this.updateCount();
    //     //console.log(this.state.title_logo);
    //   }, 1000)
    // })
  }

  componentDidUpdate(){ // update object function
    // console.log("đang didupdate");
    // if(this.state.count == 3){
    //   this.props.delete_me();
    // }
    console.log(this.props.location.pathname);
  }

  componentWillUnmount(){  // unload object function
    console.log('đang bắt đầu cho component remove');
    clearInterval(this.state.interval);
  }

  handleSubmitLoginForm = (e) => {  // set object function 

    e.preventDefault();

    if (this.state.thong_tin_user.tai_khoan == 'machchitai' && this.state.thong_tin_user.mat_khau == '123456') {

      alert('Đăng nhập thành công!');

      var thong_tin_user_temp = {...this.state.thong_tin_user}; // gán object vào biến để xử lý

      thong_tin_user_temp.name = 'Tài Mạch';  

      this.setState({   // thay đổi state
          
        thong_tin_user: thong_tin_user_temp
        },() => {

          thong_tin_user_temp.mat_khau = '';
          localStorage.setItem('thong_tin_user', JSON.stringify(thong_tin_user_temp));  // đổi JavaScript object hay giá trị sang JSON string (JSX) để hiện ra trên browser
          $('#modal-id').hide();                  // hàm jquery          
          $('.modal-backdrop').hide();             // hàm jquery
          $('body').removeClass('.modal-open');      // hàm jquery
          
        });
    }

    else {
      this.setState({ // thay đổi state của error
        message_error:{
          general_error:'Tài khoản hoặc mật khẩu không chính xác'
        }
      })
    }

  }

  handleChangeInputLoginForm = (e) => { // function thay đổi giá trị trong khi nhập vào login form
    var thong_tin_user_temp = {...this.state.thong_tin_user};   //  gán object vào biến để xử lý

    thong_tin_user_temp[e.target.name] = e.target.value;

    this.setState({   // thay đổi state
      thong_tin_user: thong_tin_user_temp
    },() => {
      //console.log(this.state);
    })
  }


  handleChangeInput = (e) => {  // function thay đổi giá trị trong khi nhập vào form
      //console.log(e.target.value);

      this.setState({
        search: e.target.value
      })
  }

  handleSearchfunction = () => {  // function thay đổi giá trị trong khi nhập vào search box
    console.log(this.state.search);
  }


  // phần render xuất ra browser

  render() {

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
                  <LogoBanner title_logo={this.state.title_logo} />   {/** dùng tag từ file LogoBanner.js với property title_logo */}
                  <div className="top-menu">
                    <span className="menu"></span>
                    <ul className="nav1">                                         
                      {        
                         // in chuỗi menubar ra browser bằng map(tương đương forEach bên Javascript)
                          this.state.menu_list.map((item_menu,index)=>{

                            // Cách 1
                              // var class_active = '';
                              // if(index == 0){
                              //   class_active = 'active';
                              // }
                              // return <li key={index} className={class_active}><Link to={item_menu.links}>{item_menu.title}</Link></li> 

                            // Cách 2
                            if(item_menu.links == this.props.location.pathname){
                              return <ItemMenu item_menu={item_menu} index={index} class_name={'active'}></ItemMenu>
                            }
                            else {
                              return <ItemMenu item_menu={item_menu} index={index} class_name={''}></ItemMenu>
                            }
                          })                        
                         
                      }                     
                      
                      {
                        (this.state.thong_tin_user.name != '')?    // nếu state name của thong_tin_user không rỗng (đã đăng nhập)                        
                        <li><a href="">{this.state.thong_tin_user.name}</a></li>    // thì hiện tên ra menubar
                        :                        
                        <li><a href='#modal-id' className="btn btn-primary" data-toggle="modal">Đăng nhập</a></li>  // nếu rỗng (chưa đăng nhập) thì hiện chữ Đăng nhập                        
                        // sau khi bấm đăng nhập sẽ chuyển tới form có id="modal-id"
                      }                              

                    </ul>
                  </div>

                  <div className="clearfix"></div>
                  
                </div>   
          </div>    

          {/* Login Form */}
          
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
                  
              </form>     {/** End form modal */}           

        </div>  {/** End div modal */}     

      </div>  // End render
    
    );  // End return
  
  } // End render

} // End class

export default withRouter(TopBanner);