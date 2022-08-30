import React,{Fragment,useEffect} from 'react'
import AboutC from '../About-C'

export default function Servicers() {
        // 返回顶部
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <Fragment>
            <AboutC/>
        </Fragment>
    )
}
