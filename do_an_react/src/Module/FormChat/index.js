import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import axios from 'axios';

const ENDPOINT = "http://localhost:4000/";
const socket = socketIOClient(ENDPOINT);

function PopupChat() {  

  const [state_show_or_hide, setStateShowOrHide] = useState(0);

  const [state_style, setStateStyle] = useState({height: "0px"});

  const [list_message, setListMessage] = useState([]);

  const [input_message, setInputMessage] = useState('');    

  const [current_username, setCurrentusername] = useState('');    

  useEffect(() => {

    axios.get('http://localhost:4000/message')
      .then((results) => {

        console.log(results.data.data_send);

        setListMessage(results.data.data_send);

      })
      .catch((err) => {
        console.log(err);
      })


    socket.on("MessageFromServer", data => {
        console.log(data);
        // nhan message gui tu Server vao mang setListMessage
        setListMessage(list_message => [...list_message, data]);
    });

    var thong_tin_user_save = localStorage.getItem('thong_tin_user');

    if(typeof thong_tin_user_save != 'undefined' && thong_tin_user_save != null){

      thong_tin_user_save = JSON.parse(thong_tin_user_save);

      if(thong_tin_user_save.tai_khoan){
          setCurrentusername(thong_tin_user_save.tai_khoan);
      }
    }
    
  }, []);

  //-- Xu ly gui message tu Client len Server
  const handleSendMessageToServer = (e) => {
    e.preventDefault();

    var thong_tin_user_save = localStorage.getItem('thong_tin_user');

    if(typeof thong_tin_user_save != 'undefined' && thong_tin_user_save != null){

      thong_tin_user_save = JSON.parse(thong_tin_user_save);

      if(thong_tin_user_save.tai_khoan){

            var data_message_save =  { 
              "username" : thong_tin_user_save.tai_khoan, 
              "timestamp" : Date.now(), 
              "message" : input_message, 
              "room" : ""
          }     

        socket.emit("MessageFromClient", data_message_save);

        setInputMessage('');
      }

      else {
        alert("Vui lòng đăng nhập để chat");
      }

    }
    //setListMessage(list_message => [...list_message, input_message]);
  }

  const handleChangeInput = (e) => {
    setInputMessage(e.target.value);
  }

  const handleShowHidePopupChat = (e) => {
        if(state_show_or_hide == 0){
            setStateShowOrHide(1);
        }
        else{
            setStateShowOrHide(0);
        }

        setStateShowOrHide(!state_show_or_hide);
        setStateShowOrHide(1 - state_show_or_hide);

        console.log(state_style.height);
        if(state_style.height == "0px"){
            setStateStyle({
                height: "358px"
            })
        }
        else{
            setStateStyle({
                height: "0px"
            })
        }
  }


  return (
    <div className="div_include_chat_box">       

        <div className="title_chat_form" onClick={handleShowHidePopupChat}>
            Liên hệ chúng tôi
        </div>
  
        <div className="detect_an_hien" style={state_style}>
          <div className="danh_sach_chat">
              {
                list_message.map((item_message, index) => (
                      <div key={index} className={"item_message" + ((item_message.username == current_username)?' current_user':'')} title={item_message.username}>
                          {item_message.username}: {item_message.message}
                      </div>
                ))
              }
          </div>

          <div>
              
              <form onSubmit={handleSendMessageToServer}>
                  <input className="input_message" onChange={handleChangeInput} type="text" name="message" value={input_message} />
                  <button className="button_send_message" type="submit">
                    <img src="/images/send_message.png"  alt="" />Send
                  </button>
              </form>
              
          </div>
        </div>

         {/* {
          (state_show_or_hide == false)?
            <div className="title_chat_form" onClick={handleShowHidePopupChat}>
              Liên hệ chúng tôi
            </div>
          :
            <div>
                <div className="title_chat_form" onClick={handleShowHidePopupChat}>
                  Liên hệ chúng tôi
                </div>
        
                <div className="detect_an_hien">
                  <div className="danh_sach_chat">
                      {list_message.map((item_chat, index) => (
                          <div key={index} className="item_chat">
                              {item_chat.noi_dung}
                          </div>
                      ))}
                  </div>
        
                  <div>
                      
                      <form onSubmit={handleSendMessageToServer}>
                          <input className="input_message" onChange={handleChangeInput} type="text" name="message" value={input_message} />
                          <button className="button_send_message" type="submit">
                            <img src="/images/send_message.png"  alt="" />
                          </button>
                      </form>
                      
                  </div>
                </div>
            </div>
        } */}

    </div>
  );
}

export default PopupChat;

