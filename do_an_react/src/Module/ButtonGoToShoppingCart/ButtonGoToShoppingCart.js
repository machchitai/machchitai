import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ButtonGoToShoppingCart extends Component {
    render() {
        return (
            <div>
                <Link to='/shopping-cart'>
                    <div className='button_shopping_cart'>
                    
                        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>          

                    </div>                    
                </Link>
            </div>
            
        )
    }
}
