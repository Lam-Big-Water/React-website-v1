import React,{Fragment} from 'react'
import './index.css'

export default function AboutC
() {
    return (
        <Fragment>
            <div className='heading header-img2'>
                <h1>about us</h1>
            </div>
            <section className='about'>
                <div className='image'>
                    <img src='/images/about-img.jpg' alt=''></img>
                </div>
                <div className='content'>
                    <h3>why choose us?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure numquam nulla iusto corporis dolor commodi libero, vitae obcaecati optio rerum ab culpa nesciunt, earum mollitia quasi ipsam non. Aliquid, iure.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum, delectus voluptate aliquam quaerat iusto repellendus error nulla ab atque.</p>
                    <div className="icons-container">
                        <div className="icons">
                            <i className="fas fa-map"></i>
                            <span>top destinations</span>
                        </div>
                        <div className="icons">
                            <i className="fas fa-hand-holding-usd"></i>
                            <span>affordable price</span>
                        </div>
                        <div className="icons">
                            <i className="fas fa-headset"></i>
                            <span>24/7 guide service</span>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
