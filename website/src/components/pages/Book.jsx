import React,{Fragment,useEffect} from 'react'
import Form from '../Form/Form'

export default function SignUp() {
    // 返回顶部
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fragment>
            <Form/>
        </Fragment>
    )
}
