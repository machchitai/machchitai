import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="headerwrapper">
                <div id="header" className="container">
                    <div className="logo"> 
                        <a href="#"><img src="images/LOGO.png" alt="logo" width="165" height="74"/></a>                                        
                    </div> {/**end of Logo */}
                    <nav>
                        <ul id="navigations">
                            <li><a href="#navigations">HOME</a></li>
                            <li> <a href="#slider">ABOUT</a></li>
                            <li><a href="#map">LOCATONS</a></li>
                            <li><a href="#bestdishes">MENU</a></li>
                            <li><a href="#contactus">CONTACT</a></li>
                        </ul>
                    </nav>
                </div> {/** end of header */}
            </div> {/**end of headerwrapper */}
        </div>
    );
};

export default Header;