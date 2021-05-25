import React from "react";
import "../styles/footer.css";
import im from "../images/Rectangle 308 (1).png"
import im1 from "../images/Vector (3).png"
import im2 from "../images/Phone.png"
import im3 from "../images/Vector (4).png"
import im4 from "../images/Kumars Photo Logo (White) 2.png"

function Footer () {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4  className="item1">Like us on Facebook</h4>
            <div className="line1"></div>
             <img src={im} className="image1"alt=""></img>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4 className="item2">Contact Us</h4>
            <div className="line2"></div>
            <img src={im1} className="image3"alt=""></img>
            <img src={im2} className="image4"alt=""></img>
            <img src={im3} className="image5"alt=""></img>
            <ui className="list-unstyled" >
              <li className="item3">Kukatpally Hyderabad, Telangana, India 500072</li>
              <li className="item4"> +91-8639439088</li>
              <li className="item5">skumarsphoto@gmail.com</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4 className="item6">Follow Us On Instagram</h4>
            <div className="line3"></div>
            <img src={im4} className="image6"alt=""></img>
            <ui className="list-unstyled">
              <li className="item7">Kumarsphoto</li>
              <li className="item8">wedding photography | pre-wedding Shoots</li>
              <li><img src={im} className="image2"alt=""></img></li>
            </ui>
            <div className="item9"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;