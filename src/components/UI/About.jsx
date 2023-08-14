import React from 'react'
import '../styles/About.css'
import aboutDetail from '../../assets/data/aboutDetails';

import aboutImg from '../../assets/images/about-us.jpg'

const About = () => {
    return (
        <section id='about'>
            <div className='container'>
                <div className='about__wrapper'>
                    <div className='about__content'>
                        <h6 className='subtitle'>Why choose us</h6>
                        <h2>Specialist in aviding clients on</h2>
                        <h2 className='highlight'>financial challenges</h2>
                        <p className='description about__content-desc'>
                            With a deep understanding of financial challenges, we specialize in guiding clients through complex situations, ensuring they make informed decisions and achieve their goals.
                        </p>
                        <div className='choose__item-wrapper'>

                            {
                                aboutDetail.map(({ icon, title, desc }) => (
                                    <div className='choose__us-item'>
                                        <span className='choose__us-icon'>
                                            <i className={icon}></i>
                                        </span>
                                        <div>
                                            <h4 className='choose__us-title'>
                                                {title}
                                            </h4>
                                            <p className='description'>
                                                {desc}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='about__img'>
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;