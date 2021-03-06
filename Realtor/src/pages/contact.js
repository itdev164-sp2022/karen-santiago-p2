import React from "react"
import { Link, graphql }  from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = ({ data }) => {
    const { name, company, address } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Contact" />
            <h1>Contact Me</h1>
            <p>Please send all inqueries to: </p>
            <div>{company}</div>
            <div>{`C/O ${name}`}</div>            
            <div>{address}</div>
            <p></p>
            <p>Email: js@rethought-realestate.com</p>
            <p>Phone Number: 414-430-9633</p>

            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`}}>
                <StaticImage
                    src="../images/contact.png"
                    width={300}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby astronaut"
                    style={{ marginBottom: `1.45rem` }}
                />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default Contact

export const query = graphql`

    query {
	site{
		siteMetadata{
			contact {
				name
                company
                address
      }
    }
  }
}
`