import React, {useState, useEffect} from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };  

    useEffect(() => {
        window.addEventListener('scroll',transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])



    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                <img 
                    className='nav__logo'
                    src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='' />
                <img
                    className='nav__avatar'
                    src='https://www.beyoung.in/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/c/a/captain_america_logo_navy_blue_men_thumb_2.jpg'
                    alt='' />
                
            </div>
        </div>
    )
}

export default Nav
