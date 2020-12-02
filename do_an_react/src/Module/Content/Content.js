import React , { useState } from 'react';
import ProductList from '../Product/ProductList';


const Content = () => {

    const [list_item, SetListItem] = useState([       // tự tạo State mới
      {
        'type': 'Action Games',
        'title': 'Nulla elementum nunc tempus' ,
        'image': 'images/t1.jpg'
      },
      {
        'type': 'Racing Games',
        'title': 'Nulla elementum nunc tempus' ,
        'image': 'images/t3.jpg'
      },
      {
        'type': '3D Games',
        'title': 'Nulla elementum nunc tempus' ,
        'image': 'images/t2.jpg'
      },
      {
        'type': 'Arcade Games',
        'title': 'Nulla elementum nunc tempus' ,
        'image': 'images/t4.jpg'
      }

    ])

    return (
        <div className="content">
        <div className="container">

          <div className="top-games">
            <h3>Top Games</h3>
            <span></span>
          </div>
          <div className="top-game-grids">

            <ProductList list_item={list_item}/>    {/** in 1 list */} 

          </div>
        </div>
      </div>
    );
};

export default Content;