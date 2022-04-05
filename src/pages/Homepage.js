import { useState } from 'react'
import { Header , HomepageBanner , FeaturedProducts , About , NewsletterEmail , Footer} from '../components/index'

function Homepage () {
    return (
        <>
            <Header />
            <HomepageBanner />
            <FeaturedProducts />
            <About />
            <NewsletterEmail />
            <Footer />
        </>
    )
}

export default Homepage;