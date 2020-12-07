import React, { useState, useEffect } from 'react';

const Xbox = (props) => {

    // const [an_hien_hinh, setAnHienHinh] = useState(true);

    const [array_cart, setArrayCart] = useState([]);

    useEffect(()=>{
        var string_array_cart = localStorage.getItem('shoppingcart');

        if(typeof string_array_cart != 'undefined' && string_array_cart != null){
            console.log(string_array_cart);
            var temp = JSON.parse(string_array_cart);
            console.log(temp);
            setArrayCart(temp);
        }
    })

    const handleClick = (e) => {
        // console.log('đã click vào ReadMore Xbox Component');
        // console.log(e);

        // setAnHienHinh(false);
        
        var string_array_cart_temp = array_cart;

        if (string_array_cart_temp.length > 0 ){
            var flag = false;
            for (var i=0; i< string_array_cart_temp.length;i++){
                if(string_array_cart_temp[i].id == props.item_current.id){
                    string_array_cart_temp[i].quantity+=1;
                    flag=true;
                    break;
                }
            }
            if (flag==false){
                var item_temp = props.item_current;
                item_temp.quantity = 1;
                string_array_cart_temp.push(item_temp);
            }
        }   
        else {
            var item_temp = props.item_current;
            item_temp.quantity = 1;
            string_array_cart_temp.push(item_temp);

           
        }
        console.log(string_array_cart_temp);
        localStorage.setItem('shoppingcart', JSON.stringify(string_array_cart_temp));

    }

    return (
        <div className="x-box">
            <div className="container">
            <div className="x-box_sec">
                <div className="col-md-7 x-box-left">
                <h2>{props.item_current.title}</h2>
                <h3>{props.item_current.type}</h3>
                <p>Proin ornare metus eros, quis mattis lorem venenatis eget. Curabitur eget dui
                    euismod, varius nisl eu, pharetra lacus. Sed vehicula tempor leo. Aenean dictum suscipit magna
                    vel tempus.
                    Aliquam nec dui dolor. Quisque scelerisque aliquet est et dignissim.</p>
                <p>{props.item_current.price}</p>
                <a className="hvr-bounce-to-top" onClick={handleClick}>Buy now</a>
                </div>
                {
                    (array_cart)?
                    <div className="col-md-5 x-box-right">
                        <img src={props.item_current.image} className="img-responsive" alt="" />
                    </div>
                    :
                    <></>
                }
                
                <div className="clearfix"></div>
            </div>
            </div>
        </div>
    );
};

export default Xbox;