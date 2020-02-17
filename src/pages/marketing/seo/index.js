import React from "react"
import Header from "../../../components/header"
import Form from "../../../components/form"
import Footer from "../../../components/footer"

export default () => (
  <>
    <Header classSeo="active"/>
    <div className="topslide-wrapper topslide2">
        <div className="topslide">
            <h1>Seo</h1>
        </div>
    </div>
    <div className="seo1-wrapper">
      <div className="seo1">
        <p>If you need to boost your sales, we are here to help. In the past few years, search optimization has changed greatly. What hasn't changed is the fact that search traffic results provide the best conversion rates. That's why we see SEO as a promising marketing tool, even if new search engine ranking algorithms may change the approach to website promotion.</p>
        <h2>We are proud to offer a complete service package <br />to increase traffic to your website:</h2>
        <div className="seo1-blocks">
          <div className="seo1-block" id="seo1_1">
            <p>SEO audit</p>
          </div>
          <div className="seo1-block" id="seo1_2">
            <p>Keyword research</p>
          </div>
          <div className="seo1-block" id="seo1_3">
            <p>Competitor analysis</p>
          </div>
          <div className="seo1-block" id="seo1_4">
            <p>Keyword optimization</p>
          </div>
          <div className="seo1-block" id="seo1_5">
            <p>Local SEO</p>
          </div>
          <div className="seo1-block" id="seo1_6">
            <p>Link audit</p>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
    <div className="trust-wrapper trust2 trust_1">
      <div className="trust">
        <h2>SEO Services that Grow Traffic <br />and Increase Revenue</h2>
        <p>If you're looking for serious business growth, SEO, or search engine optimization is the strategy for you. Why does it work? Simple! It targets the users that are most likely to convert on your website, and takes them there. A custom SEO campaign with RG-fintech includes things like keyword research and content implementation to help your most valuable audience find you online. Not only that, but we'll analyze the results in order to ensure that your campaign is performing at its best.</p>
      </div>
    </div>
    <Form />
    <Footer />
  </>
)
