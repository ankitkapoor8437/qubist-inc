import React from 'react';
import '../styles/Hero.css';

// Imported Images
import heroDarkImage from '../../assets/images/hero-img.png';
import lightImage from '../../assets/images/light-hero-bg.jpg';

const Hero = ({ theme }) => {
    return (
        // Hero section
        <section className='hero__section' id='hero'>
            <div className='container'>
                {/* Hero content and image wrapper */}
                <div className='hero__wrapper'>
                    {/* Hero content */}
                    <div className='hero__content'>
                        <div>
                            {/* Hero heading */}
                            <h2>We're Creating Perfect</h2>
                            <h2>Digital Products To</h2>
                            <h2 className='highlight'>Promote Your Brand</h2>
                        </div>
                        {/* Hero description */}
                        <p className='description'>
                            Crafting Digital Excellence, Amplifying Brands.
                            Your Vision, Our Innovation, Remarkable Results.
                            Trust Qubist.Inc to Transform Your Digital Landscape.
                        </p>
                        {/* Buttons for action */}
                        <div className="hero__btns">
                            <button className='primary__btn'>Get Started Now</button>
                            <button className='secondary__btn'>Discover More</button>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div className='hero__img'>
                        {/* Conditional rendering of image based on theme */}
                        <img src={theme === "light-theme" ? lightImage : heroDarkImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
