import React from "react"
import Header from "../../../components/header"
import Form from "../../../components/form"
import Footer from "../../../components/footer"

export default() => (
  <>
  <Header classContent="active"/>
  <div className="topslide-wrapper topslide6">
    <div className="topslide">
      <h1>Content marketing</h1>
    </div>
  </div>
  <div className="seo1-wrapper">
    <div className="seo1">
      <p>Our experienced copywriters excel in content marketing and create appealing contents that improve the reputation of a brand. Our team will spread useful and relevant information, which will help you to gain your target audience's attention and confidence. A high quality content marketing strategy is all-inclusive team work aimed at boosting conversion and your business profitability. We know how to make words sell!</p>
      <h2>We are ready to provide you with the <br />following content marketing services:</h2>
      <div className="seo1-blocks seo-long-table">
        <div className="seo1-block" id="content1_1">
          <p>Content Strategy</p>
        </div>
        <div className="seo1-block" id="content1_2">
          <p>Content Curation</p>
        </div>
        <div className="seo1-block" id="content1_3">
          <p>Content for Brand Building</p>
        </div>
        <div className="seo1-block" id="content1_4">
          <p>Premium Content Creation</p>
        </div>
        <div className="seo1-block" id="content1_5">
          <p>Target the Right Audience</p>
        </div>
        <div className="seo1-block" id="content1_6">
          <p>Blog Content Creation</p>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  </div>
  <div className="trust-wrapper trust6 trust_1">
  <div className="trust">
    <h2>Content Marketing</h2>
    <p>Our agency’s content marketing services will help you increase website traffic from your online marketing channels. It will help you take people from other online channels to your website. These online marketing channels may be social media, search engines, or your email marketing efforts. Our content writers will produce relevant content to engage your audience, build trust, and influence their purchasing decisions. Our content marketing services includes strategy development, content writing, editing, and publishing to your website.</p>
    <p>Content marketing is cheaper and more effective than traditional forms of advertising. It is also proven to influence conversions. Our content marketing services will help you write content that will drive results and enhance your entire online marketing presence.</p>
    </div>
  </div>
  <Form />
  <Footer />
  </>
)
