import React from "react"
import {Link} from "gatsby"
import Header from "../../components/header"
import Form from "../../components/form"
import Footer from "../../components/footer"
import TitleH1 from "../../components/TitleH1"
import TitleH2 from "../../components/TitleH2"
import TitleH3 from "../../components/TitleH3"
import { useStaticQuery, graphql } from "gatsby"
import "../../css/style.css"


const Company =() => {

  const data = useStaticQuery(graphql`
    {
    allFile(filter: {publicURL: {regex: "/flag/"}}) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`);

  return(
    <>
    <Header style={{background:"#727272", color:"#fff", textDecoration: "none !important"}}/>
    <div className="topslide-wrapper topslide12">
      <TitleH1 h1="Company overview" />
    </div>
    <div className="mobileblock-wrapper">
        <div className="mobileblock it-p">
            <p>We Offer the Best of Tech and Marketing Intelligence Expertise</p>
            <div className="mobileblock-text">
                <TitleH2 h2="About RG Fintech Services"/>
                <p>RG Fintech is a global information technology services company offering innovative software development, IT outsourcing and IT consulting services. RG Fintech is actively helping global corporations to transform and address critical business issues by applying innovative information technology solutions. With unparalleled experience and comprehensive capabilities across verticals and business functions, we enable businesses to reduce time-to-market and drive transformational growth.</p>
                <p>Our global delivery and mature engagement models are designed to improve efficiency, governance and bring predictability. We constantly innovate and implement new methodologies, frameworks and best practices giving our clients the winning edge.</p>
            </div>
            <div className="mobileblock-blocks">
                <Link className="mob-block7 mobileblock-block">
                    <div>
                        <TitleH3 h3="Our Vision"/>
                        <p>To be a customer-centric organization that simplifies solutions for everyday business challenges.</p>
                    </div>
                </Link>
                <Link className="mob-block8 mobileblock-block">
                    <div>
                      <TitleH3 h3="Our Promise"/>
                        <p>To provide unsurpassed services to our clients by extending competent, custom-fit and cost-effective software solutions.</p>
                    </div>
                </Link>
                <Link className="mob-block9 mobileblock-block">
                    <div>
                      <TitleH3 h3="Our Vibe"/>
                        <p>We believe that it takes people with different ideas, strengths, interests, and cultural backgrounds to accelerate innovative thinking.</p>
                    </div>
                </Link>
                <div className="clear"></div>
            </div>
        </div>
    </div>

    <div className="companymap-wrapper">
        <div className="companymap">
            <TitleH2 h2="About RG Fintech Services"/>
            <p>We offer our clients technology solutions that add real value to their business.</p>
            <p>It’s simple — we understand that our success is measured by the success of our clients.</p>
            <div className="map-flag-wrapper">
                <div className="map-flags">


                  {data.allFile.edges.map(({ node }, index) => (
              <div key={index}>
                <img src={node.publicURL} alt=" " />
              </div>
            ))}
                    <div className="clear"></div>
                    <p>Clients and partners in 15+ countries</p>
                </div>
            </div>
        </div>
    </div>

    <div className="companynum-wrapper">
        <div className="companynum">
            <div>
                <p><span>94%</span> of our customers recommend us to their business partners</p>
            </div>
            <div>
                <p><span>98%</span> report exceptional quality of delivered solutions</p>
            </div>
            <div>
                <p><span>92%</span> state added value received</p>
            </div>
            <div>
                <p><span>97%</span> notice the ability to meet customer needs</p>
            </div>
            <div>
                <p><span>96%</span> praise staff competency</p>
            </div>
            <div className="clear"></div>
        </div>
    </div>
    <Form />
    <Footer />
    </>
  )
}

export default Company
