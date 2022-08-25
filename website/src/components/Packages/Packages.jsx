import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Packages.css'

export default function Packages() {
    const [data,] = useState([
        {id:'1',img:'images/img-1.jpg',title:'Adventure & Tour',content:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Eos, Sint!'},
        {id:'2',img:'images/img-2.jpg',title:'Adventure & Tour',content:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Eos, Sint!'},
        {id:'3',img:'images/img-3.jpg',title:'Adventure & Tour',content:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Eos, Sint!'},
    ])
    return (
        <section className='home-packages'>
            <h1 className='heading-title'>Our Packages</h1>
                <div className='box-container'>
                    
                        {
                            data.map((item)=>{
                                return (
                                    <div className='box' key={item.id}>
                                        <div className="image">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className="content">
                                            <h3>{item.title}</h3>
                                            <p>{item.content}</p>
                                            <Link to='/SignUp' className="btn">book now</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                <div className="load-more"> <Link to='/Product' className="btn">load more</Link> </div>
        </section>
    )
}
