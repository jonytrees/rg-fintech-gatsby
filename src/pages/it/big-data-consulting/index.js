import React from "react"
import Header from "../../../components/header"
import Form from "../../../components/form"
import Footer from "../../../components/footer"
import TitleH1 from "../../../components/TitleH1"
import TitleH2 from "../../../components/TitleH2"
import TitleH3 from "../../../components/TitleH3"

export default () => (
  <>
    <Header classBig="active"/>
    <div className="topslide-wrapper topslide14">
      <div className="topslide">
        <TitleH1 h1="Big data consulting"/>
      </div>
    </div>
    <div className="seo2-wrapper">
      <div className="seo2">
        <p>Our big data consultants help companies operating in the increasingly data-centric environment to derive strategic business value from data of multiple origins, including:</p>
          <div className="seo2-blocks">
            <div className="seo2-box">
              <div className="seo2-block" id="bigdata_1">
                <TitleH3 h3="Enterprise data"/>
                <p>Embracing CRM systems, transactional ERP data, and the variety of semi-structured and unstructured data types residing in content repositories.</p>
              </div>
              <div className="seo2-block" id="bigdata_2">
                <TitleH3 h3="Machine data"/>
                <p>Clickstream, log files and any other machine-generated data for end-to-end transaction visibility and complete insight across IT infrastructure.</p>
              </div>
            </div>
            <div className="seo2-box seo2-box-small">
              <div className="seo2-block" id="bigdata_3">
                <TitleH3 h3="Sensor-generated data"/>
                <p>Data collected from industrial equipment, smart devices, connected appliances, control systems and any other IoT devices.</p>
              </div>
              <div className="seo2-block" id="bigdata_4">
                <TitleH3 h3="Social data"/>
                <p>Human-generated digital footprints and other data from social media sources and location-based services laying basis for a 360⁰ customer view.</p>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
      <div className="fountain-wrapper">
        <div className="fountain">
          <TitleH2 h2="Services"/>
          <div className="fountain-blocks">
            <div>
                <div className="fountain-block">
                  <TitleH3 h3="Business Analysts"/>
                  <p>Got lost navigating through the big data landscape? RG Fintech business analysts will help you come up with thorough understanding of the right goals and the shortest path to them.</p>
                </div>
                <div className="fountain-block i-1">
                  <br /><TitleH3 h3="Data Scientists"/>
                  <p>We are experts at orchestrating the cast of BI technologies for a potentially multiplicative effect on the business along with curating the data veracity of the analysis pipeline.</p>
                </div>
              </div>
              <div>
              <div className="fountain-block">
                <TitleH3 h3="Big Data Architects &amp; Engineers"/>
                <p>Got lost navigating through the big data landscape? RG Fintech business analysts will help you come up with thorough understanding of the right goals and the shortest path to them.</p>
              </div>
              <div className="fountain-block">
                <TitleH3 h3="Database Admins"/>
                <p>We are experts at orchestrating the cast of BI technologies for a potentially multiplicative effect on the business along with curating the data veracity of the analysis pipeline.</p>
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
