import React from 'react';

const ProductItem = (props) => {
    return (                 
        <li>
            <div className="game-grid">
                <h4>{props.item_info.type}</h4>     {/** in giá trị từ state */}
                <p>{props.item_info.title}</p>        {/** in giá trị từ state */}
                <img src={props.item_info.image} className="img-responsive" alt="" />    {/** in giá trị từ state */}
            </div>
        </li>
        
    );
};

export default ProductItem;