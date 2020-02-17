import React from "react";
import {Link} from "gatsby"
import logoFooter from "../images/logo-footer.png"

const Footer = () => {

  return (
    <>
    <footer>
    <div className="footer-wrapper">
      <div className="footer">
          <div className="right-footer">
              <div className="menu-bottom">
                <div>
                  <div>IT</div>
                  <ul className="bottom-submenu">
                    <li><Link to="/it/web-application-development">Website development</Link></li>
                    <li><Link to="/it/server-administration-services">Server administration services</Link></li>
                    <li><Link to="/it/mobile-application-development">Mobile application development</Link></li>
                    <li><Link to="/it/big-data-consulting">Big data consulting</Link></li>
                  </ul>
                </div>
                <div>
                  <div>Marketing</div>
                  <ul className="bottom-submenu">
                    <li><Link to="/marketing/seo">SEO</Link></li>
                    <li><Link to="/marketing/smm">SMM</Link></li>
                    <li><Link to="/marketing/ppc-and-sem">PPC&amp;SEM</Link></li>
                    <li><Link to="/marketing/brand-identity">Brand identity</Link></li>
                    <li><Link to="/marketing/analytics-and-cro">Analytics &amp; CRO</Link></li>
                    <li><Link to="/marketing/interface-design">Interface design</Link></li>
                    <li><Link to="/marketing/content-marketing">Content marketing</Link></li>
                  </ul>
                </div>
                <div className="clear"></div>
            </div>
          </div>
          <div className="logo-footer">
            <Link to="/"><img src={logoFooter} alt=" "/></Link>
            <div className="footer-info">
              <p>The website is owned by RG Fintech Services Limited.</p>
              <p>RG Fintech Services Limited registered in the Hong Kong (registration number 2801096) in accordance with Hong Kong Special Administrative Region Business Corporation Act. </p>
              <p><Link to="/contacts">Contact us</Link></p>
            </div>
          </div>
          <div className="clear"></div>
          <div className="copyright">
            <p>Copyright 2019 © RG Fintech Services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}


export default Footer
