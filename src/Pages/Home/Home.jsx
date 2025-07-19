import React from 'react'
import Navbar from '../../components/common/Navbar'
import Carousel from '../../components/Carousel'
import PopularFoods from '../../components/PopularFoods/PopularFoods'
import CategoriesSection from '../../components/Categories/Categories'

const Home = () => {
    return (
        <div>
            <Carousel />
            <PopularFoods/>
            <CategoriesSection/>
        </div>
    )
}

export default Home