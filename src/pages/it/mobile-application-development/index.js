import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../../../components/header"
import Form from "../../../components/form"
import Footer from "../../../components/footer"

export const query = graphql`
  query {
    topOne: file(relativePath: { eq: "it_mobapp/top1.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    topTwo: file(relativePath: { eq: "it_mobapp/top2.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    topThree: file(relativePath: { eq: "it_mobapp/top3.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default ({data}) => (
      <>
        <Header classMobile="active" />
        <div className="topslide-wrapper topslide11">
          <div className="topslide">
            <h1>Mobile application development</h1>
          </div>
        </div>
        <div className="mobapp-wrapper">
          <div className="mobapp">
            <div className="mobapp-blocks">
              <div className="mobapp-block">
                <div>
                  <Img fixed={data.topOne.childImageSharp.fixed} alt="" />
                </div>
                <div>
                  <h3>Enteprise mobile app development</h3>
                  <p>RG-Fintech designs and builds custom enterprise mobile applications from the ground up implementing enterprise requirements and unique company-related functionality. We offer enterprise mobile app development across devices and platforms, with secure application integration with any type of corporate systems.</p>
                </div>
                <div className="clear"></div>
              </div>
              <div className="mobapp-block">
                <div>
                  <Img fixed={data.topTwo.childImageSharp.fixed} alt="" />
                </div>
                <div>
                  <h3>Enterprise application mobilization</h3>
                  <p>We extend the reach of the existing corporate products, transforming web and desktop enterprise solutions to fit mobility requirements while keeping required functionality. RG-Fintech’s team doesn’t simply port existing applications to mobile, we adapt the functionality and UX to create a well thought-out enterprise mobile app.</p>
                </div>
                <div className="clear"></div>
              </div>
              <div className="mobapp-block">
                <div>
                  <Img fixed={data.topThree.childImageSharp.fixed} alt="" />
                </div>
                <div>
                  <h3>Mobile application upgrade</h3>
                  <p>RG-Fintech helps upgrade and optimize legacy enterprise mobile applications, solve application performance and usability issues, ensure smooth operation, migrate to new platforms, implement up-to-date functionality, and create greater user experience to keep up with the developing technology environment.</p>
                </div>
                <div className="clear"></div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
        <div className="enterapp-wrapper">
          <div className="enterapp">
            <h2>Enterprise application mobilization</h2>

            <h3>Mobile enterprise operations</h3>
            <ul>
              <li>Customer and sales management</li>
              <li>Enterprise content management</li>
              <li>Document management</li>
              <li>Supply chain management</li>
              <li>Inventory and procurement management</li>
              <li>Financial resource management</li>
            </ul>
            <h3>Employee productivity</h3>
              <ul>
                <li>Task-based employee applications</li>
                <li>Data management apps</li>
                <li>Task management and issue tracking apps</li>
                <li>Mobile project workplaces</li>
                <li>Productivity apps</li>
                <li>Personal dashboards</li>
              </ul>
              <h3>Mobile collaboration</h3>
              <ul>
                <li>Document collaboration and file-sharing apps</li>
                <li>Collaboration portals</li>
                <li>Enterprise social networking</li>
                <li>Personalized content delivery</li>
                <li>Knowledge management</li>
                <li>Enterprise-wide search</li>
              </ul>
              <h3>Mobile dashboards</h3>
              <ul>
                <li>Performance metrics</li>
                <li>Profitability analytics</li>
                <li>Customer analytics</li>
                <li>Supply chain analytics</li>
                <li>Asset analytics</li>
                <li>Comparison reports</li>
              </ul>
            </div>
          </div>

        <Form />
        <Footer />
      </>
)
