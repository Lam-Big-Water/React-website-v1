/* eslint-disable */
import React,{Fragment,useState} from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

export default function Product() {
    const [data] = useState([
        {id:'1',img:'/images/img-1.jpg',title:'adventure & tour',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!'},
        {id:'2',img:'/images/img-2.jpg',title:'adventure & tour',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!'},
        {id:'3',img:'/images/img-3.jpg',title:'adventure & tour',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!'},
        {id:'4',img:'/images/img-4.jpg',title:'adventure & tour',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!'},
        {id:'5',img:'/images/img-5.jpg',title:'adventure & tour',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!'},
        {id:'6',img:'/images/img-6.jpg',title:'adventure & tour',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!'},
        
    ])
    return (
        <Fragment>
            <div className='heading header-img'>
                <h1>packages</h1>
            </div>
            <section className='packages'>
                <h1 className='heading-title'>top destinations</h1>
                <div className='box-container'>
                    {
                        data.map((item)=>{
                            return (
                                <div className='box' key={item.id}>
                                    <div className='image'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className='content'>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                        <Link to="/SignUp" className='btn'>Book Now</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </Fragment>
        
    )
}
