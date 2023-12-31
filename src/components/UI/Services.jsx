import React from 'react';
import "../styles/Services.css";
import serviceData from '../../assets/data/servicesDetails';

const Services = () => {
    return (
        <section id='services'>
            <div className='container'>
                {/* Top content of services section */}
                <div className='services_top-content'>
                    <h6 className='subtitle'>Our Services</h6>
                    <h2>Save time managing your business with</h2>
                    <h2 className='highlight'>our best services</h2>
                </div>

                {/* Container for service items */}
                <div className='service__item-wrapper'>
                    {
                        // Mapping through serviceData array to render individual service items
                        serviceData.map(({ icon, title, desc, index }) => (
                            <div className='services__item' key={index}>
                                {/* Service icon */}
                                <span className='service__icon'>
                                    <i className={icon}></i>
                                </span>
                                {/* Service title */}
                                <h3 className='service__title'>{title}</h3>
                                {/* Service description */}
                                <p className='description'>{desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Services;
