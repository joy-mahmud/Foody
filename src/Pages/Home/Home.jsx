import React from 'react'
import Navbar from '../../components/common/Navbar'
import Carousel from '../../components/Home/Carousel'
import { PopularFoods } from '../../components/Home/PopularFoods/PopularFoods'
import CategoriesSection from '../../components/Home/Categories/Categories'
import WhyChooseUs from '../../components/Home/WhyChooseUs/WhyChooseUs'
import CustomerReviews from '../../components/Home/CustomerReviews/CustomerReviews'


const Home = () => {
    return (
        <div>
            <Carousel />
            <PopularFoods />
            <CategoriesSection />
            <WhyChooseUs />
            <CustomerReviews />
        </div>
    )
}

export default Home