import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
         <div className="HeroGroup">
            <h1>Hi people! Let's have some fun</h1>
            <p>Welcome to my new site, Schegly. This was not the best idea</p>
            <Link to="/page-2/">Go to Hell,        bitches</Link>
        </div>
    </div>
  </Layout>
)

export default IndexPage
