import React, {useState} from 'react'
import './OurServices.css'

export default function OurServices() {
  const [data] = useState([
    {id:'1',img:'/images/icon-1.png',title:'adventure'},
    {id:'2',img:'/images/icon-2.png',title:'tour guide'},
    {id:'3',img:'/images/icon-3.png',title:'trekking'},
    {id:'4',img:'/images/icon-4.png',title:'camp fire'},
    {id:'5',img:'/images/icon-5.png',title:'off road'},
    {id:'6',img:'/images/icon-6.png',title:'camping'},
  ]);
  return (
    <section className='services'>
      <h1 className='heading-title'> Our Services</h1>
      <div className='box-container'>
        { 
          // map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
          data.map((item)=>{
            return (
            <div className='box' key={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            </div> )
          })
        }
      </div>
    </section>
  )
}
