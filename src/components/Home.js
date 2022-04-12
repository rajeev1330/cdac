import React from 'react'
import '../css/Home.css';
import { Link } from 'react-router-dom';
import Testimonial from './Testimonial';
import Offer from './Offer';

const Home = () => {
    return (
        <>
            <div className='outerdiv'>
                <div className='innerdiv'>
                    <div>
                        <h4>Everything you need available here.....<br></br>
                            Explore more!</h4>
                        <p>Success isn't always about greatness. It's about consistency. Consistent <br></br> hard work gains
                            success. Greatness will come.</p>
                        <Link to="/products" className="btn">Explore Now &#8594;</Link>
                    </div>
                </div>
                <div className='innerdiv'>
                    <img src="/images/electronic-gadgets.png" />
                </div>
            </div>
            <div>
                <Offer />
            </div>
            <div>
                <Testimonial />
            </div>
        </>
    )
}

export default Home