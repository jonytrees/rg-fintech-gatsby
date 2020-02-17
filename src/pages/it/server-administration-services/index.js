import React from "react"
import Header from "../../../components/header"
import Form from "../../../components/form"
import Footer from "../../../components/footer"


export default () => (
  <>
  <Header classServer="active" />
  <div className="topslide-wrapper topslide9">
    <div className="topslide">
      <h1>Server administration services</h1>
    </div>
  </div>
  <div className="seo1-wrapper">
    <div className="seo1 it-toptext">
      <p>Network administration and monitoring gives you tools to monitor your applications  and environment through a single web console. Our monitoring and administration solutions include custom  collections of different templates, application monitors and alerts to monitor server or network status  and issues. Monitoring provides a wide range of specific and customizable application types including  application servers, operating systems, authentication servers, database servers and entire business or  enterprise network.</p>
    </div>
  </div>
    <div className="it1-wrapper it-slide1">
      <div className="it1">
        <p>Monitoring helps delivering operational analytics for end-to-end insights across your entire infrastructure  and all mission-critical infrastructure components. It provides deep visibility into faults, events, capacity,  configurations and security of your server and network elements, whether it is a traditional equipment or distributed cloud infrastructure.</p>
      </div>
  </div>
  <div className="server1-wrapper">
    <div className="server1">
        <h2>24 X 7 SERVER MANAGEMENT</h2>
        <div className="lines"></div>
          <div className="server1-text">
            <ul>
                <li>Server setup &amp; backups</li>
                <li>Server connectivity &amp; security</li>
                <li>System patching<br /> &amp; upgrades</li>
                <li>Quick response time</li>
                <li>Disaster recovery</li>
              <li>Certified technology experts</li>
            </ul>
            <ul>
              <li>Local &amp; remote backup <br />configuration</li>
              <li>Server managemen &amp; migration</li>
              <li>Server monitoring <br />&amp; adminstration</li>
              <li>Affordable IT costs</li>
              <li>24/7/365 expert supports</li>
            </ul>
          <div className="clear"></div>
      </div>
    </div>
  </div>
  <div className="seo1-wrapper">
                <div className="seo1 it-toptext">
                    <h2>Types of servers</h2>
                    <div className="seo1-blocks" style={{maxWidth: "960px"}}>
                        <div className="seo1-block" id="servadm1_1">
                            <p>Web &amp; Mail Server</p>
                        </div>
                        <div className="seo1-block" id="servadm1_2">
                            <p>Application Server</p>
                        </div>
                        <div className="seo1-block" id="servadm1_3">
                            <p>FTP Server</p>
                        </div>
                        <div className="seo1-block" id="servadm1_4">
                            <p>Collaboration Server</p>
                        </div>
                        <div className="seo1-block" id="servadm1_5">
                            <p>List Server</p>
                        </div>
                        <div className="seo1-block" id="servadm1_6">
                            <p>Telnet Serverg</p>
                        </div>
                        <div className="seo1-block" id="servadm1_7">
                            <p>Open Source Server</p>
                        </div>
                        <div className="seo1-block" id="servadm1_8">
                            <p>Real time communication Server</p>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
            <div className="trust-wrapper trust9 trust_2">
                <div className="trust">
                    <h2>Services</h2>
                    <ul>
                        <li>Securing and Upgrading of Your Server</li>
                        <li>New Server Setup</li>
                        <li>Secure and Optimize Apache (HTTP)</li>
                        <li>Install Mod_Security</li>
                        <li>PHP Tightening</li>
                        <li>Rootkit/Virus Checking</li>
                        <li>Log Analysis</li>
                        <li>Software Installation</li>
                    </ul>
                    <ul>
                        <li>Removal of Unused Software or Services</li>
                        <li>Removal of Old Logfiles</li>
                        <li>Clear Disk Space Usage</li>
                        <li>APF or CSF Firewall Installation</li>
                        <li>Brute Force Detection Installation</li>
                        <li>Shell Fork Bomb/Memory Hog Protection</li>
                        <li>MySQL optimization</li>
                        <li>TMP Directory Issues</li>
                    </ul>
                    <ul>
                        <li>Kernel Patching</li>
                        <li>Malware Scanning</li>
                        <li>Virus Scanning</li>
                        <li>Hard Disk Performance Tweaking</li>
                        <li>Increase RAM Memory Efficiency</li>
                        <li>Backup Audit</li>
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
            <Form />
            <Footer />
  </>
)
