import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Thanks for visiting us.</p>
    <p>We will be launching soon!.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
  <div id="tripetto"></div>
<script src="https://unpkg.com/tripetto-runner-foundation"></script>
<script src="https://unpkg.com/tripetto-runner-autoscroll"></script>
<script src="https://unpkg.com/tripetto-services"></script>
<script>
var tripetto = TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiLzFKUmx1NW5BYUVoeVNNekxBV0xoVlJDUmhUQWZKNEhjNGNSL0FGblRQdz0iLCJkZWZpbml0aW9uIjoiN2FiRGpXMUkxZkY5Y0FqQzJyNUdpRDhZMHpMT3hyelU0SXdEWVdQV3d6ND0iLCJ0eXBlIjoiY29sbGVjdCJ9.Qg7gmo3NgXufG3IwvD4yvhZv23yViLfkngEK7ttXFJE" });

TripettoAutoscroll.run({
    element: document.getElementById("tripetto"),
    definition: tripetto.definition,
    styles: tripetto.styles,
    l10n: tripetto.l10n,
    locale: tripetto.locale,
    translations: tripetto.translations,
    attachments: tripetto.attachments,
    onSubmit: tripetto.onSubmit
});
</script>  
 </div>  
<Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
