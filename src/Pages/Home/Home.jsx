import React from 'react'
import Navbar from '../../components/common/Navbar'
import Carousel from '../../components/Home/Carousel'
import { PopularFoods } from '../../components/Home/PopularFoods/PopularFoods'
import CategoriesSection from '../../components/Home/Categories/Categories'
import WhyChooseUs from '../../components/Home/WhyChooseUs/WhyChooseUs'
import CustomerReviews from '../../components/Home/CustomerReviews/CustomerReviews'
import CallToAction from '../../components/Home/CallToAction/CallToAction'
import Footer from '../../components/common/Footer'


const Home = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Carousel />
                <PopularFoods />
                <CategoriesSection />
                <WhyChooseUs />
                <CustomerReviews />
                <CallToAction />
            </div>
            <Footer />
        </div>
    )
}

export default Home