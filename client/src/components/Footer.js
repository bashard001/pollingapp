import React from 'react';
// import "./footer.css";
import { Row } from 'react-bootstrap';

function Footer() {
    return (
        <div id="footer">

            <div></div>
            <div>
                <div class="row" style={{color: "black", fontSize: "12px"}}>
                    <div class="col-2">
                        <ul>
                            <li><strong>TWN Membership</strong></li>
                            <li>TWN Membership Benefits</li>
                            <li>Why Subsribe?</li>
                            <li>Corporate Subscriptions</li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <ul>
                        <li><strong>Customer Service</strong></li>
                            <li>Customer Center</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <ul>
                        <li><strong>Get Us</strong></li>
                            <li>Emails</li>
                            <li>Home Delivery</li>
                            <li>Newsletters</li>
                            <li>Alerts</li>
                            <li>Podcasts</li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <ul>
                        <li><strong>Ads</strong></li>
                            <li>Advertise</li>
                            <li>Place a Classified</li>
                            <li>Coupons</li>
                            <li>Sell your Business</li>
                            <li>Career Ads</li>
                        </ul>

                    </div>
                    <div class="col-2">
                        <ul>
                        <li><strong>More</strong></li>
                            <li>News Archive</li>
                            <li>Reprints</li>
                            <li>Content Partnerships</li>
                            <li>Buy Issues</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center"></div>
            <div className="text-center">The World Network &#169; March 2020</div>


        </div>
    )
}

export default  Footer;