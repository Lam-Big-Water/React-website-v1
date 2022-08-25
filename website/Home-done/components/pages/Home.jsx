import React from 'react'
import '../../App.css'
import Carousel from '../Carousel/Carousel'
import OurServices from '../OurServives/OurServices'
import AboutUs from '../AboutUs/AboutUs'
import Packages from '../Packages/Packages'
import HomeOffer from '../HomeOffer/HomeOffer'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <div>
            <Carousel/>
            <OurServices/>
            <AboutUs/>
            <Packages/>
            <HomeOffer/>
            <Footer/>
        </div>
    )
}
