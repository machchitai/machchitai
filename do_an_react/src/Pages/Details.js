import React, { Component } from 'react';
import Poster from '../Module/Poster/Poster';
import Xbox from '../Module/Xbox/Xbox';

import {withRouter} from 'react-router-dom';

class Details extends Component {

    constructor (props) {
        super(props);
        this.state = {
            item_list: [
                {
                    'id':1,
                    'type': 'Action Games',
                    'title': 'Nulla elementum nunc tempus' ,
                    'image': 'images/t1.jpg',
                    'price': 100000
                  },
                  {
                    'id':2,
                    'type': 'Racing Games',
                    'title': 'Nulla elementum nunc tempus' ,
                    'image': 'images/t3.jpg',
                    'price': 200000
                  },
                  {
                    'id':3,
                    'type': '3D Games',
                    'title': 'Nulla elementum nunc tempus' ,
                    'image': 'images/t2.jpg',
                    'price': 300000
                  },
                  {
                    'id':4,
                    'type': 'Arcade Games',
                    'title': 'Nulla elementum nunc tempus' ,
                    'image': 'images/t4.jpg',
                    'price': 400000
                  }
            ],
            item_current: {}
        };
    }

    componentDidMount(){
        let id_product = this.props.match.params.id_product;
       
        this.state.item_list.forEach((item)=>{
            if(item.id == id_product){
                this.setState({
                    item_current: item
                })
            }
        })
    }


    render() {
        return (
            <div>
                <Poster />

                <Xbox item_current={this.state.item_current}/>
            </div>
        )
    }
}
export default withRouter(Details);
