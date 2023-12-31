import React from 'react'
import '../styles/Testimonial.css'
import Slider from "react-slick"

import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slideToShow: 1,
        slideToScroll: 1,
        swipeToSolid: true,
    };

    return (
        <section>
            <div className='container'>
                <div className='slider__content-top'>
                    <h6 className='subtitle'>Testimonials</h6>
                    <h2>
                        Trusted by more than{" "}
                        <span className='highlight'>100+ customers</span>
                    </h2>
                </div>

                <div className='slider__wrapper'>
                    <Slider {...settings}>
                        <div className='slider__item'>
                            <p className='description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente ea magni, quasi maxime excepturi animi
                                velit incidunt nemo at, ipsam nihil soluta dicta quaerat!
                                Minima eos excepturi ipsum autem sapiente!
                            </p>

                            <div className='customer__details'>
                                <div className='customer__img'>
                                    <img src={ava01} alt="" />
                                </div>

                                <div>
                                    <h5 className='customer__name'>Testing Name</h5>
                                    <p className='description'>CEO, Workcreation</p>
                                </div>
                            </div>
                        </div>
                        <div className='slider__item'>
                            <p className='description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente ea magni, quasi maxime excepturi animi
                                velit incidunt nemo at, ipsam nihil soluta dicta quaerat!
                                Minima eos excepturi ipsum autem sapiente!
                            </p>

                            <div className='customer__details'>
                                <div className='customer__img'>
                                    <img src={ava02} alt="" />
                                </div>

                                <div>
                                    <h5 className='customer__name'>Testing Name</h5>
                                    <p className='description'>CEO, Workcreation</p>
                                </div>
                            </div>
                        </div>
                        <div className='slider__item'>
                            <p className='description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente ea magni, quasi maxime excepturi animi
                                velit incidunt nemo at, ipsam nihil soluta dicta quaerat!
                                Minima eos excepturi ipsum autem sapiente!
                            </p>

                            <div className='customer__details'>
                                <div className='customer__img'>
                                    <img src={ava03} alt="" />
                                </div>

                                <div>
                                    <h5 className='customer__name'>Testing Name</h5>
                                    <p className='description'>CEO, Workcreation</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;