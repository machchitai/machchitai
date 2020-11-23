import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footerwrapper">
                <footer className="container">
                    <div className="customerreview">
                        <h2>Customer Reviews</h2>
                        <div className="review">
                            <p><strong>&#8220; </strong>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor
                    aliquet. Aenean 			            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
                    nec sagittis sem nibh id elit.
                    Duis sed odio sit amet nibh vulputate  a ornare odio. Sed non  mauris vitae erat consequat
                    <strong>&#8221;</strong></p>

                            <h4>- JOHN ALVES</h4>


                        </div> {/**end of review */}

                        <div className="clearfix"></div>
                        <div className="line"></div>

                        <div className="review">
                            <p><strong>&#8220; </strong>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor
                    aliquet. Aenean 			            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
                    nec sagittis sem nibh id elit.
                    Duis sed odio sit amet nibh vulputate  a ornare odio. Sed non  mauris vitae erat consequat
                    <strong>&#8221;</strong></p>

                            <h4>- CATHREINE JOHNES</h4>


                        </div> {/**end of review */}





                    </div>
                    <div className="socialize">

                        <h2>Socialize</h2>
                        <div className="socialimgs">
                            <a href="https://www.facebook.com/Mido.HHH"><img src="images/fb.png" width="68" height="68" className="facebook"
                                alt="fb" /></a>
                            <a href="https://twitter.com/Mido_A7X"><img src="images/twitter.png" width="68" height="68" className="twitter"
                                alt="twitter" /></a>
                            <a href="#"><img src="images/youtube.png" width="68" height="69" className="youtube" alt="youtube" /></a>
                            <a href="#"><img src="images/g+.png" width="68" height="68" className="google" alt="g+" /></a>
                            <a href="#"><img src="images/message.png" width="68" height="68" className="message" alt="message" /></a>
                        </div> {/**end of social img */}

                    </div>


                    <div className="sendfeedback">
                        <h2>Send Feedback</h2>
                        <form>
                            <h6>Your Name:</h6>
                            <input type="text" className="yourname" />
                            <h6>Mobile Number :</h6>
                            <input type="text" className="mobilenumber" />
                            <h6>Message :</h6>
                            <textarea></textarea>

                            <button>SUBMIT </button>



                        </form>

                    </div> {/**end of feedback */}




                </footer> {/**end of footer */}

            </div> {/**end of footerwrapper */}
        </div>
    );
};

export default Footer;