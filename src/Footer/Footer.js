import React, { Component } from "react";

import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footerContainer">
          <div className="copyright">
            <h4>&copy; Cloud9 Lifestyle LLC </h4>
          </div>
          <div className="links">
            <div class="logos">
              <a href="https://www.facebook.com/cloud9lifestylellc">
                <i class="fab fa-facebook fa-2x"></i>
              </a>

              <i class="fab fa-instagram fa-2x"></i>
              <i class="fab fa-twitter fa-2x"></i>
              <i class="fab fa-snapchat fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
