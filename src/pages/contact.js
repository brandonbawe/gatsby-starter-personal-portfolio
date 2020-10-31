import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Links from "../components/links"
import contactimg from "../images/contactimg.svg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-8">
            <h1>Hit Me Up</h1>
            <p>
              I appreciate working with people to create solution for various digital needs. If you have any
              inquiries or feedback, please don't hesitate to reach out. I am
              available on the following social media platforms:
            </p>
            <Links />
            <p>
              I am currently available for freelance work. My scope of work
              includes but not limited to:
            </p>
            <ul>
              <li>Website Development</li>
              <li>User Interface (UI) Design</li>
              <li>Logo Creation</li>
              <li>Digital Marketing</li>
            </ul>

            {/* <a
              href="content"
              className="main-button btn btn-primary shadow-sm mt-2"
            >
              Download my resume
            </a> */}
          </div>
          <div className="col-lg-4 my-auto">
            <div className="img-container">
              <img src={contactimg} alt="Vector of a man and a phone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
