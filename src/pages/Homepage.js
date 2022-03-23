import { useState } from 'react'
import { Header , HomepageBanner , FeaturedProducts} from '../components/index'

function Homepage () {
    return (
        <>
            <Header />
            <HomepageBanner />
            <FeaturedProducts />
        </>
    )
}

export default Homepage;