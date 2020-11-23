import React from 'react';

const BestDishes = () => {
    return (
        <div>
            <div className="bestdisheswrapper">
                <div id="bestdishes" className="container">
                
                    <h2 className="wow fadeInUp" data-wow-delay="0.3s">BEST DISHES</h2>
                    <div className="slider">
                        <ul className="slides">
                            <li className="slide">
                                <div className="item">
                                    <img src="images/thumb1.png" width="226" height="225" alt="sliderimg" className="wow flipInX"
                                    data-wow-delay=".8s"/> 
                                    <h3>Pasta Capellini</h3>
                                </div> {/**end of item */}
                                
                                <div className="item2">
                                        <img src="images/thumb2.jpg" width="226" height="225" alt="sliderimg" className="wow flipInX"
                                        data-wow-delay=".8s"/> 
                                        <h3>Pasta Pillus</h3>
                                </div> {/**end of item */}
                                
                                <div className="item3">
                                    <img src="images/thumb3.png" width="226" height="225" alt="sliderimg" className="wow flipInX"
                                    data-wow-delay=".8s"/> 
                                    <h3>Pasta Fusilli</h3>
                                </div> {/**end of item */}
                            </li>
                            <li className="slide">
                                <div className="item">
                                    <img src="images/thumb1.png" width="226" height="225" alt="sliderimg" /> 
                                    <h3>Pasta Capellini</h3>
                                </div> {/**end of item */}
                                
                                <div className="item2">
                                    <img src="images/thumb2.jpg" width="226" height="225" alt="sliderimg"/> 
                                    <h3>Pasta Pillus</h3>
                                </div> {/**end of item */}
                                
                                <div className="item3">
                                    <img src="images/thumb3.png" width="226" height="225" alt="sliderimg"/> 
                                    <h3>Pasta Fusilli</h3>
                                </div>  {/**end of item */}
                            </li>
                   
                        </ul>
                    </div> {/**end of slider */}
                </div> {/**end of best dishes */}
            </div> {/**end of bestdishes wrapper */}
        </div>
    );
};

export default BestDishes;