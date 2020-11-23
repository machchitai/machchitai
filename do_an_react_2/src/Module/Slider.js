import React from 'react';

const Slider = () => {
    return (
        <div>
            <div className="sliderwrapper">
                <div id="slider" className="container">
                    <div className="slider">
                        <ul className="slides">
                            <li className="slide">
                                <h5 className="wow fadeInDown" data-wow-delay="0.8s">What is Pasta ? </h5>
                                <p className="wow fadeInUp" data-wow-delay="0.8s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                                also the leap into
                                electronic typesetting</p>
                                <img src="images/slideimg.png" width="317" height="256" className="wow fadeInRight"
                                    data-wow-delay="0.8s" alt="slide1img"/> 
                            </li>
                            <li className="slide">
                                <h5 className="wow fadeInDown" data-wow-delay="0.8s">What is Pasta ? </h5>
                                <p className="wow fadeInUp" data-wow-delay="0.8s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                                also the leap into
                                electronic typesetting</p>
                                <img src="images/slideimg.png" width="317" height="256" className="wow fadeInRight"
                                    data-wow-delay="0.8s" alt="slideimg2"/> 
                            </li>
                            <li className="slide" >
                                    <h5 className="wow fadeInDown" data-wow-delay="0.8s">What is Pasta ? </h5>
                                    <p className="wow fadeInUp" data-wow-delay="0.8s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                                    also the leap into
                                    electronic typesetting</p>
                                    <img src="images/slideimg.png" width="317" height="256" className="wow fadeInRight"
                                        data-wow-delay="0.8s" alt="slideimg2"/> 
                            </li>
        		        </ul>
                    </div>
                </div>{/**End of Slider */}
            </div> {/**end of slidewrapper */}
        </div>            
    );
};

export default Slider;