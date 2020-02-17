import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
 // important: case sensitive.


class HeaderImg extends React.Component {

  render(){
    return(
      <>
      <div className="whitehouse-wrapper"></div>
      <header className="header-wrapper">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt=" "/>
            </Link>
          </div>
          <div className="top-mob">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="top-menu">
            <ul>
              <li>
                <Link style={this.props.style} to="/company/">COMPANY</Link>
              </li>
              <li>
                <span>
                  IT
                </span>
                <ul className="submenu">
                  <li>
                    <Link className={this.props.classServer} to="/it/server-administration-services/">
                      Server administration services
                    </Link>
                  </li>
                  <li>
                    <Link className={this.props.classWeb} to="/it/web-application-development/">
                      Website development
                    </Link>
                  </li>
                  <li>
                    <Link className={this.props.classMobile} to="/it/mobile-application-development/">
                      Mobile application development
                    </Link>
                  </li>
                  <li>
                    <Link className={this.props.classBig} to="/it/big-data-consulting/">
                      Big data consulting
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>MARKETING</span>
                <ul className="submenu">
                  <li><Link className={this.props.classSeo} to="/marketing/seo/">SEO</Link></li>
                  <li><Link className={this.props.classPpc} to="/marketing/ppc-and-sem/">PPC&amp;SEM</Link></li>
                  <li><Link className={this.props.classBrand} to="/marketing/brand-identity/">Brand identity</Link></li>
                  <li><Link className={this.props.classInterface} to="/marketing/interface-design/">Interface design</Link></li>
                  <li><Link className={this.props.classContent} to="/marketing/content-marketing/">Content marketing</Link></li>
                  <li><Link className={this.props.classAnalytics} to="/marketing/analytics-and-cro/">Analytics &amp; CRO</Link></li>
                  <li><Link className={this.props.classSmm} to="/marketing/smm/">SMM</Link></li>
                </ul>
              </li>
              <li className="active">
                <Link className={this.props.classContact} to="/contacts/">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      </>
    )
  }

}
export default HeaderImg
