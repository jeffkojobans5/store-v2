import { useState } from 'react'
import { Header , HomepageBanner , FeaturedProducts , About} from '../components/index'

function Homepage () {
    return (
        <>
            <Header />
            <HomepageBanner />
            <FeaturedProducts />
            <About />
        </>
    )
}

export default Homepage;