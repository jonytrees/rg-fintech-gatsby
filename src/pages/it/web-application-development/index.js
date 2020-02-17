import React from "react"
import Header from "../../../components/header"
import Form from "../../../components/form"
import Footer from "../../../components/footer"
import "../../../css/style.css"

class WebApp extends React.Component {
  
  render(){
    return(
      <>
      <Header classWeb="active" />
      <div className="topslide-wrapper topslide10">
        <div className="topslide">
          <h1>Website development</h1>
        </div>
      </div>
      <div className="mobileblock-wrapper">
        <div className="mobileblock it-p">
          <p>Full-cycle servicing that covers every aspect of app production and implementation.</p>
          <div className="mobileblock-blocks">
          <div className="mob-block4 mobileblock-block" >
            <div>
              <h3>Development</h3>
              <p>We offer a decade-long expertise in delivering exquisitely robust portal solutions.</p>
            </div>
          </div>
          <div className="mob-block5 mobileblock-block">
            <div>
              <h3>Integration</h3>
              <p>Integrating siloed web services and applications under mobile-friendly portal interfaces.</p>
              </div>
          </div>
          <div className="mob-block6 mobileblock-block">
            <div>
              <h3>Optimization</h3>
              <p>Breathing second life into aging and ineffective existing portal solutions and infrastructures.</p>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
    <div className="tackling-wrapper">
      <div className="tackling">
        <h2>Tackling a full range of <br />web portal development scenarios</h2>
        <div className="tackling-opacity">
          <div className="tackling-block tackling1">
            <h3>Web portals</h3>
            <p>When the portal is the business, there is no compromising on the performance, cost-efficiency and growth potential of both. RG-Fintech has the skillset and the experience required to guarantee delivery of a reliable solution to win, serve and retain your customers.</p>
          </div>
          <div className="tackling-block tackling2">
            <h3>Enterprise portals</h3>
            <p>We undertake portal development and deliver highly productive intranets, extranets and engagement workplaces with expansive collaborative capabilities, access to aggregated information, self-service workflows, and enterprise social functionality.</p>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
    <div className="matdom-wrapper">
      <div className="matdom">
        <div className="matdom-arrows">
          <div className="matdom-arrow-left"></div>
          <div className="matdom-arrow-right"></div>
        </div>
        <div className="matdom-unchange">
          <h2>Mature domain expertise</h2>
        </div>
        <div className="matdom-slider">
          <div className="matdom-slides" style={{marginLeft: "-300%"}}>
            <div className="matdom-slide">
              <h3>Ecommerce platforms</h3>
              <p>Addressing the growing demand for better user journeys, advanced back-end capabilities and new transactional models, RG-Fintech enables businesses to smoothly launch multi-vendor online marketplaces and reach scale saving years of guesswork and spared investments.</p>
            </div>
            <div className="matdom-slide">
              <h3>Platforms ecommerce</h3>
              <p>Addressing the growing demand for better user journeys, advanced back-end capabilities and new transactional models, RG-Fintech enables businesses to smoothly launch multi-vendor online marketplaces and reach scale saving years of guesswork and spared investments. Addressing the growing demand for better user journeys, advanced back-end capabilities and new transactional models, RG-Fintech enables businesses to smoothly launch multi-vendor online marketplaces and reach scale saving years of guesswork and spared investments.</p>
            </div>
            <div className="matdom-slide">
              <h3>Platforms platforms</h3>
              <p>Addressing the growing demand for better user journeys, advanced back-end capabilities and new transactional models.</p>
            </div>
            <div className="matdom-slide active">
              <h3>Ecommerce ecommerce</h3>
              <p>Addressing the growing demand for better user journeys, advanced back-end capabilities and new transactional models, RG-Fintech enables businesses to smoothly launch multi-vendor online marketplaces and reach scale saving years of guesswork and spared investments enables businesses to smoothly launch multi-vendor online marketplaces and reach scale saving years of guesswork and spared investments.</p>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="matdom-bullets">
          <ul>
          <li className=""></li>
          <li className=""></li>
          <li className=""></li>
          <li className="active"></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="seo2-wrapper">
    <div className="seo2">
      <h2>Advanced web portal design and <br />development focused on your needs</h2>
      <div className="seo2-blocks">
        <div className="seo2-box">
          <div className="seo2-block" id="webdes2_1">
            <h3>Integration capability</h3>
            <p>We are able to connect a portal solution to multiple data sources and applications, including implementation of Enterprise Service Bus (ESB) and integration with third-party web services, data feeds, payment systems and social collaboration tools.</p>
          </div>
          <div className="seo2-block" id="webdes2_2">
            <h3>Scalability and performance</h3>
              <p>Technology never stops evolving, so don’t let your portal to. Iflexion designs incredibly flexible portal architectures with an eye for growth, fault tolerance, and comfortable accommodation of increasing loads and user numbers.</p>
            </div>
          </div>
          <div className="seo2-box seo2-box-small">
            <div className="seo2-block" id="webdes2_3">
              <h3>Business continuity</h3>
              <p>Iflexion’s mature DevOps approach and extensive build, test, and deployment automation expertise enable us to deploy portal solutions fast, seamlessly and cost-effectively, and ship new features to the solution, flawlessly operating in the wild, right away.</p>
            </div>
            <div className="seo2-block" id="webdes2_4">
              <h3>360° Security</h3>
                  <p>Iflexion pays great attention to ensuring all aspects of portal security, from data access and transactions security to data encryption, digital signature solutions and PCI DSS pre-certification audit and preparations.</p>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
    <Form />
    <Footer />
    </>
    )
  }
}

export default WebApp
