import React, { Component } from 'react';
import Slider from '../Module/Slider/Slider';
import Content from '../Module/Content/Content';
import Lastest from '../Module/Lastest/Lastest';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Content />
                <Lastest />
            </div>
        )
    }
}
