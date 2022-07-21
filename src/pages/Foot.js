import React, { Component } from 'react';
class Foot extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="top-footer">

                        <div className="">
                            <div className="logo">
                                <h2>

                                <p>WebDev.co </p> 
                                </h2>
                            </div>
                            <p className='cotext'>WebDev is a company that manufacture Website
                                for your company/ organisation/ portfolio and
                                <a href="#">Read
                                    more...</a>
                            </p>
                            <a style={{color:'silver'}} className="p-1" href="https://www.facebook.com/mdishtiyaque.ahmad.581/"><i
                                className="fab fa-2x fa-facebook-square"></i></a>
                            <a style={{color: 'silver'}} className="p-1" href="https://www.linkedin.com/in/md-ishtiyaque-ahmad-1050b81b9/"><i
                                className="fab fa-2x fa-linkedin"></i></a>
                            <a style={{color: 'silver'}} className="p-1" href="https://twitter.com/mAishtiyaque/"><i
                                className="fab fa-2x fa-twitter-square"></i></a>
                            <a style={{color: 'silver'}} className="p-1" href="https://www.instagram.com/maishtiyaque/"><i
                                className="fab fa-2x fa-instagram"></i></a>
                        </div>

                        <div >
                            <h2>Important Links</h2>
                            <a href="#">Privacy Policy</a><br />
                            <a href="#">Youtube Channel Link </a><br />
                            <a href="#">Blog Articles </a><br />
                            <a href="#">Social Media</a>
                        </div>

                        <div >
                            <h2>Our Services</h2>
                            <a href="#">Web Designing </a><br />
                            <a href="#">Web Development </a><br />
                            <a href="#">SEO services </a><br />
                            <a href="#">Software Development </a><br />
                            <a href="#">Mobile App Development </a><br />
                            <a href="#">Graphic Designing</a>
                        </div>

                        <div>
                            <h2>Contact Us</h2>
                            <a href="#"><i className="fas fa-phone"></i> +(91) 99999 99999 </a><br />
                            <a href="#"><i className="fas fa-envelope"></i> inquiry@webdev.co.com </a><br />
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1473.9735977556224!2d86.6865636717627!3d24.780467844967227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4
            f13.1!3m3!1m2!1s0x39f109dbe9dfc815%3A0xc3e2b518d3327dda!2sOlama%20Council%20Trust!5e1!3m2!1sen!2sin!4v1605425024321!5m2!1sen!2sin"
                                    frameBorder="2"></iframe>
                            </div>

                        </div>
                    </div>
                    <div className="bottom-footer">
                        <p>Copyrights © 2022 - All rights reserved</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Foot;