import React from 'react'
import Navbar from '../../components/common/Navbar'
import Carousel from '../../components/Carousel'
import PopularFoods from '../../components/PopularFoods/PopularFoods'
import CategoriesSection from '../../components/Categories/Categories'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews'
import HowItWorks from '../../components/HowItworks/HowItworks'
import CTASection from '../../components/CTASection/CTASection'
import Footer from '../../components/common/Footer'

const Home = () => {
    return (
        <div>
            <Carousel />
            <PopularFoods/>
            <CategoriesSection/>
            <WhyChooseUs/>
            <CustomerReviews/>
            <HowItWorks/>
            <CTASection/>
            <Footer/>
        </div>
    )
}

export default Home