/* eslint-disable */
import React,{Fragment,useEffect} from 'react'
import Products from '../Products/Products'

export default function Product() {
        // 返回顶部
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <Fragment>
            <Products/>
        </Fragment>
        
    )
}
