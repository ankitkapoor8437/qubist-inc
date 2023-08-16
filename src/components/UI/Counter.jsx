import React from 'react';
import '../styles/Counter.css';
import counterData from '../../assets/data/counterDetails';

const Counter = () => {
    return (
        // Counter section
        <section className='counter' id='projects'>
            <div className='container'>
                {/* Counter items wrapper */}
                <div className="counter__wrapper">
                    {
                        // Mapping through counterData array to render individual counter items
                        counterData.map(({ text, number, index }) => (
                            <div className="counter__item" key={index}>
                                {/* Counter number */}
                                <h3 className='counter__number'>{number}</h3>
                                {/* Counter title */}
                                <h4 className='counter__title'>{text}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Counter;
