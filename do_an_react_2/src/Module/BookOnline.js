import React from 'react';

const BookOnline = () => {
    return (
        <div>
            <div className="bookonlinewrapper">
                <div className="container" id="bookonline">
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s"> BOOK ONLINE</h3>
                    <form >
                        <input type="text" className="name wow zoomIn" placeholder="Your Name" />
                        <input type="text" className="email wow zoomIn" placeholder="Your E-MAIL"/>
                        <input type="text" className="from wow zoomIn" placeholder="09-06-2014"/>
                        <input type="text" className="to wow zoomIn" placeholder="09-06-2014"/>
                        <input type="text" className="persons wow zoomIn" placeholder="Number of persons"/>
                        
                    
                        
                        <button className="booknow wow fadeInUp"> BOOK NOW </button>
                    
                    </form>
                    
                
                </div>
            </div>  {/**end of book online wrapper */}
        </div>
    );
};

export default BookOnline;