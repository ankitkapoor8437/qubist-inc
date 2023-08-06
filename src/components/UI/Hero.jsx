import React from 'react'
import '../styles/Hero.css'

// Imported Images
import heroDarkImage from '../../assets/images/hero-img.png'
import lightImage from '../../assets/images/light-hero-bg.jpg'


const Hero = ({theme}) => {
    return (
        <section className='hero__section'>
            <div className='container'>
                <div className='hero__wrapper'>
                    <div className='hero__content'>
                        <div >
                            <h2>We're Creating Perfect</h2>
                            <h2>Digital Products To</h2>
                            <h2 className='highlight'>Promote Your Brand</h2>
                        </div>
                        <p className='description'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Similique, quam. Ex, vero consequuntur. Et, placeat.
                        </p>
                        <div className="hero__btns">
                            <button className='primary__btn'>Get Started Now</button>
                            <button className='secondary__btn'>Discover More</button>
                        </div>
                    </div>

                    <div className='hero__img'>
                        <img src={ theme=== "light-theme" ? lightImage : heroDarkImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero