import React from "react"
import Header from "../../../components/header"
import Form from "../../../components/form"
import Footer from "../../../components/footer"

export default() => (
  <>
    <Header classInterface="active"/>
    <div className="topslide-wrapper topslide5">
      <div className="topslide">
        <h1>Interface design</h1>
      </div>
    </div>
    <div className="seo1-wrapper">
      <div className="seo1">
        <p>Your website generates traffic but the visitors don't become clients, right? Once the usability of a site is assessed, a skilfully designed and user-friendly interface can raise conversion rates tenfold even if the traffic remains the same! Our team of professional UI/UX designers helps make the interaction between the clients and your product as simple and convenient as possible, and at the same time raise your clientele's awareness of your services and products. A good first impression, eye-catching and easy-to-navigate resources and your company's recognizable style will attract and retain more clients.</p>
        <h2>We are happy to offer you:</h2>
        <div className="seo1-blocks">
          <div className="seo1-block" id="inter1_1">
            <p>Web Design</p>
          </div>
          <div className="seo1-block" id="inter1_2">
            <p>Digital Product Design</p>
          </div>
          <div className="seo1-block" id="inter1_3">
            <p>App Design</p>
          </div>
          <div className="seo1-block" id="inter1_4">
            <p>CRM Design</p>
          </div>
          <div className="seo1-block" id="inter1_5">
            <p>Mobile Design</p>
          </div>
          <div className="seo1-block" id="inter1_6">
            <p>eCommerce</p>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
    <div className="trust-wrapper trust5 trust_1">
      <div className="trust">
        <h2>Interface design</h2>
        <p>User Interface design is what gives a user the first impression of your site or app. That very initial visual perception can be critical to spark likeability. The more engaged the user becomes, the more important becomes usability. Both these aspects shape the UI design experience and tell the story of your brand and product. We design user experiences that effectively ensure your digital solution becomes a lovable product. Our goal is to make your user's life as simple and pleasant as possible.</p>
        <p>Combining user insights, UX best practice, strategic approach to IA and branding we craft simple, effective, intuitive and delightful interface design solutions that fit the product and brand purpose and meet your users’ needs.</p>
      </div>
    </div>
    <Form />
    <Footer />
  </>
)
