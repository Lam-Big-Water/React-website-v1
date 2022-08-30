import React,{useEffect} from 'react'
import '../../App.css'
import Carousel from '../Home-C/Carousel/Carousel'
import OurServices from '../Home-C/OurServives/OurServices'
import AboutUs from '../Home-C/AboutUs/AboutUs'
import Packages from '../Home-C/Packages/Packages'
import HomeOffer from '../Home-C/HomeOffer/HomeOffer'


export default function Home() {
    // 返回顶部
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Carousel/>
            <OurServices/>
            <AboutUs/>
            <Packages/>
            <HomeOffer/>
        </div>
    )
}
