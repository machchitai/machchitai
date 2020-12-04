import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ItemMenu extends Component {

    constructor (props){
        super(props);
    }

    render() {
        return (
            <li key={this.props.index} className={this.props.class_name}>
                <Link to={this.props.item_menu.links}>{this.props.item_menu.title}</Link>
            </li>
        )
    }
}
