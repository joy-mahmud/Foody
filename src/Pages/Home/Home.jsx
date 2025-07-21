import React from 'react'
import Navbar from '../../components/common/Navbar'
import Carousel from '../../components/Carousel'
import { PopularFoods } from '../../components/PopularFoods/PopularFoods'

const Home = () => {
    return (
        <div>
            <Carousel />
            <PopularFoods/>
        </div>
    )
}

export default Home