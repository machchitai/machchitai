import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="contactwrapper">
                <div id="contactus" className="container">
                        <h3 className="wow fadeInUp" data-wow-delay="0.3s">CONTACT US</h3>
                        <div className="staff">
                            <ul>
                                <li>
                                    <img src="images/char3.png" width="163" height="163" className="myimage wow fadeIn" title="mido" alt="1"/>
                                   
                                </li>
                                    <li><img src="images/char4.png" width="163" height="163" className="myimage2 wow fadeIn" data-wow-delay="0.8s"
                                    alt="1"/></li> 
                                    <li><img src="images/char5.png" width="163" height="163" className="myimage3 wow fadeIn" 
                                    data-wow-delay="0.8s" 
                                    alt="1"/></li>
                                    <li><img src="images/char6.png" width="163" height="163" className="myimage4 wow fadeIn" alt="1"
                                    data-wow-delay="0.8s"
                                    /></li>
                                    <li><img src="images/char1.png" width="163" height="163" className="myimage5 wow fadeIn" alt="1"
                                    data-wow-delay="0.8s"/></li>
                                    <li><img src="images/char2.png" width="163" height="163" className="myimage6 wow fadeIn" alt="1"
                                    data-wow-delay="0.8s"
                                    /></li>
                            </ul>   
                            
                        </div>   
                    {/**end of staff */}
                        
                    <img src="images/pop1.png" width="486" height="137" className="firstpop" alt="pop"/>
                    <img src="images/popup2.png" width="487" height="137"  className="secondpop" alt="pop"/>
                    <img src="images/popup3.png" width="487" height="137"  className="thirdpop" alt="pop"/>
                    <img src="images/popup4.png" width="487" height="137"  className="fourthpop" alt="pop"/>  
                    <img src="images/popup6.png" width="487" height="137"  className="fifthpop" alt="pop"/>  
                    <img src="images/popup7.png" width="487" height="137"  className="sixthpop" alt="pop"/>  
                    
                    
                    </div> 
                    {/**contact us class */}
                </div> {/**end of contact wrapper */}
        </div>
    );
};

export default Contact;