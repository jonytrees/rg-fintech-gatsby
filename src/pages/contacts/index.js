import React from "react"
import Header from "../../components/header"
import Form from "../../components/form"
import Footer from "../../components/footer"
import TitleH1 from "../../components/TitleH1"
import TitleH2 from "../../components/TitleH2"
import TitleH3 from "../../components/TitleH3"
import "../../css/style.css"


export default() => (
  <>
    <Header classContact="active"/>
    <div className="topslide-wrapper topslide13">
      <div className="topslide">
        <TitleH1 h1="Contact us"/>
      </div>
    </div>
    <div className="contact-toptext-wrapper">
      <div className="contact-toptext">
        <p>Thank you for your interest in RG Fintech and our services. <br />Please fill out the form below or e-mail us at <a href="mailto:clients@rg-fintech.com">clients@rg-fintech.com</a> and we will get back to you promptly regarding your request.</p>
      </div>
    </div>
    <Form />
    <div className="seo2-wrapper howtostart">
      <div className="seo2">
        <TitleH2 h2="How to start"/>
        <div className="seo2-blocks">
          <div className="seo2-box">
            <div className="seo2-block" id="howtost_1">
              <TitleH3 h3="1. Contacts"/>
              <p>Please submit your project request. We can sign a Non-Disclosure Agreement (NDA) before sharing any business-sensitive information.</p>
            </div>
            <div className="seo2-block" id="howtost_2">
              <TitleH3 h3="2. Analysis"/>
              <p>RG Fintech consultant will contact you to clarify your project requirements.</p>
            </div>
            <div className="seo2-block" id="howtost_3">
              <TitleH3 h3="3. Proposal"/>
              <p>Having clarified the requirements we will provide our free non-binding bid or proposal for your review.</p>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
    <div className="contact-privacy-wrapper">
      <div className="contact-privacy">
        <TitleH2 h2="PRIVACY"/>
        <p>RG Fintech respects your privacy and takes comprehensive measures to safeguard your personal and business information. We will not share your credentials and business data with any 3rd parties without your permission. Multi-level corporate security policies and procedures ensure prevention from loss, misuse or unauthorized distribution of any business-sensitive information you share with us.</p>
      </div>
    </div>
    <Footer />
  </>
)
