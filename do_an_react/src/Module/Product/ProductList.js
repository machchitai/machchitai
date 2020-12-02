import React from 'react';
import ProductItem from './ProductItem';

const ProductList = (props) => {
    return (
        <div>
            <ul id="flexiselDemo1">                
                {
                    props.list_item.map(item_info => // dùng vòng lặp map để đưa từng item vào prop list_item
                         <ProductItem item_info={item_info} />  /** in item  */
                    )
                }         

            </ul>
        </div>
    );
};

export default ProductList;