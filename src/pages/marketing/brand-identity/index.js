import React from "react"
import Header from "../../../components/header"
import Form from "../../../components/form"
import Footer from "../../../components/footer"

export default() => (
  <>
    <Header classBrand="active"/>
    <div className="topslide-wrapper topslide4">
      <div className="topslide">
        <h1>Brand identity</h1>
      </div>
    </div>
    <div className="seo1-wrapper">
      <div className="seo1">
        <p>If you're aspiring to raise your clientele's loyalty and confidence or get down to building your brand from scratch, we are here to help you pursue your goals. Not only does a skilful branding campaign contribute to the company's unique and "catchy" image, it also encourages clients to purchase goods or services from you. We will carry out a thorough market analysis, formulate the basic brand positioning aspects and build a successful and powerful brand for your company.</p>
        <h2>Our branding service includes:</h2>
        <div className="seo1-blocks" style={{maxWidth: "890px"}}>
          <div className="seo1-block" id="brand1_1">
            <p>Brand Creation</p>
          </div>
        <div className="seo1-block" id="brand1_4">
          <p>Consultancy &amp; Workshops</p>
        </div>
        <div className="seo1-block" id="brand1_2">
          <p>Brand Development</p>
        </div>
        <div className="seo1-block" id="brand1_5">
          <p>Copywriting</p>
        </div>
        <div className="seo1-block" id="brand1_3">
          <p>Digital Guidelines</p>
        </div>
        <div className="seo1-block" id="brand1_6">
          <p>Print Design</p>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  </div>
  <div className="trust-wrapper trust4">
    <div className="trust">
      <h2>Brand identity</h2>
      <p>A brand is the soul of an experience. The features provided and the technologies utilized might be impressive, but at the end of the day, the brand is what people remember you by. It ties to the hearts of your users and helps maintain their loyalty.</p>
      <p>A great brand combines design and messaging to evoke emotion and drive strategy. It conveys the value of your company to employees inside and customers outside the organization. When a company thoughtfully balances these elements, the value of the brand is reinforced in everything else the company does, driving performance in sales, marketing, and retention.</p>
    </div>
  </div>
  <Form />
  <Footer />
  </>
)
