import React from "react"
import Header from "../components/header"
import Form from "../components/form"
import Footer from "../components/footer"
import TitleH1 from "../components/TitleH1"
import TitleH3 from "../components/TitleH3"
import SEO from "../components/seo"
import {Link} from "gatsby"
import "../css/style.css"

export default() => (
  <div>
  <Header/>
  <SEO title="Home"/>
  <div className="topslide-wrapper topslide1">
    <div className="topslide">
      <TitleH1 h1="Your business needs our software solutions"/>
    </div>
  </div>
  <div className="mobileblock-wrapper">
    <div className="mobileblock">
      <h2>Advanced web & mobile solutions.<br/> Enterprise apps & portals.</h2>
      <p>
        Full-cycle servicing that covers every aspect of app production and implementation.
      </p>
      <div className="mobileblock-blocks">
        <div className="mob-block1 mobileblock-block">
          <div>
            <TitleH3 h3="Custom software development"/>
            <p>Full spectrum of development services spiced with flexible engagement models.</p>
          </div>
        </div>
        <div className="mob-block2 mobileblock-block">
          <div>
            <TitleH3 h3="Web Application Development"/>
            <p>Productive, engaging and reliable web solutions for business outcomes you deserve.</p>
          </div>
        </div>
        <div className="mob-block3 mobileblock-block">
          <div>
            <TitleH3 h3="Mobile Application Development"/>
            <p>End-to-end mobile development for consumer-facing and corporate environments.</p>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  </div>
  <div className="menulist-wrapper">
    <div className="menulist">
      <Link to="/it/web-application-development/" className="menulist1">
        <div>
          <h3>web &amp; enterprise
            <br/>portals</h3>
          <p>Incredible UX and compelling functionality under the hood.</p>
        </div>
      </Link>
      <Link to="/it/mobile-application-development/" className="menulist2">
        <div>
          <h3>enterprise
            <br/>mobility</h3>
          <p>Device-agnostic apps to help enterprises go mobile and augment their operational strength.</p>
        </div>
      </Link>
      <Link to="/it/server-administration-services/" className="menulist3">
        <div>
          <h3>All-Inclusive
            <br/>Server Support</h3>
          <p>Server setup, upgrade, migration, security audit, software installation, control panel administration.</p>
        </div>
      </Link>
      <Link to="/it/big-data-consulting/" className="menulist4">
        <div>
          <h3>big data
            <br/>consulting</h3>
          <p>Business requirements analysis and conceptual solution elaboration.</p>
        </div>
      </Link>
      <div className="clear"></div>
    </div>
  </div>
  <div className="customers-wrapper">
    <div className="customers">
      <h2>
        <span className="redcolor">200+</span>
        CUSTOMERS FROM
        <span className="redcolor">SMBs</span>
        <br/>TO
        <span className="redcolor">FORTUNE 500</span>
        COMPANIES</h2>
      <p>We know corporate rules, we match high tech’s quality standards, and we share the zeal embodied by startup firms.</p>
      <div className="redgrad">
        <Link to="/contacts">Contact us</Link>
      </div>
    </div>
  </div>
  <div className="trust-wrapper trust1">
    <div className="trust">
      <p>RG Fintech is a global IT solutions company with over 6 years of experience and about 65+ employees. We provide full-cycle services in the areas of software development, web-based enterprise solutions, web application and portal development.</p>
      <p>We combine our solid business domain experience, technical expertise, profound knowledge of latest industry trends and quality-driven delivery model to offer progressive, end-to-end web solutions.</p>
      <div className="redgrad">
        <Link to="/company">Learn more</Link>
      </div>
    </div>
  </div>
  <div className="fullservicetitle-wrapper">
    <div className="fullservicetitle">
      <h2>Full service digital marketing Agency</h2>
    </div>
  </div>
  <div className="menulist-wrapper">
    <div className="menulist">
      <Link to="/marketing/seo" className="menulist5">
        <div className="h3var2">
          <h3>SEO</h3>
          <p>Complete service package to increase traffic to your website.</p>
        </div>
      </Link>
      <Link to="/marketing/ppc-and-sem" className="menulist6">
        <div className="h3var2">
          <h3>PPC&amp;SEM</h3>
          <p>Everything you need to get high search engine rankings.</p>
        </div>
      </Link>
      <Link to="/marketing/smm" className="menulist7">
        <div>
          <h3>Social Media
            <br/>Marketing (SMM)</h3>
          <p>Complex analysis of your business and ensuring promotion efficiency.</p>
        </div>
      </Link>
      <Link to="/marketing/analytics-and-cro" className="menulist8">
        <div className="h3var2">
          <h3>Analytics &amp; CRO</h3>
          <p>Improving site structure and contents for better conversion rates.</p>
        </div>
      </Link>
      <div className="clear"></div>
    </div>
  </div>
  <Form />
  <Footer />
</div>
)
