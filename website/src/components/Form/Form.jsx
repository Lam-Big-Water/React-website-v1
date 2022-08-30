import React,{Fragment} from 'react'
import './Form.css'
export default function Form() {
    return (
        <Fragment>
            <div className='heading header-img3'>
                <h1>Book now</h1>
            </div>
            <section className='booking'>
                <h1 className='heading-title'>Book your trip!</h1>
                <form className='book-form'>
                    <div className="flex">
                        <div className="inputBox">
                            <span>name :</span>
                            <input type="text" placeholder="enter your name" name="name"/>
                        </div>
                        <div className="inputBox">
                            <span>email :</span>
                            <input type="email" placeholder="enter your email" name="email"/>
                        </div>
                        <div className="inputBox">
                            <span>phone :</span>
                            <input type="number" placeholder="enter your number" name="phone"/>
                        </div>
                        <div className="inputBox">
                            <span>address :</span>
                            <input type="text" placeholder="enter your address" name="address"/>
                        </div>
                        <div className="inputBox">
                            <span>where to :</span>
                            <input type="text" placeholder="place you want to visit" name="location"/>
                        </div>
                        <div className="inputBox">
                            <span>how many :</span>
                            <input type="number" placeholder="number of guests" name="guests"/>
                        </div>
                        <div className="inputBox">
                            <span>arrivals :</span>
                            <input type="date" name="arrivals"/>
                        </div>
                        <div className="inputBox">
                            <span>leaving :</span>
                            <input type="date" name="leaving"/>
                        </div>
                    </div>
                    <input type="submit" value="submit" className="btn " name="send"/>
                </form>
            </section>
        </Fragment>
    )
}
