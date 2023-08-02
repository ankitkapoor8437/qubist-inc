import React from 'react'
import '../styles/Counter.css'
import counterData from '../../assets/data/counterDetails'

const Counter = () => {
    return (
        <section className='counter' id='projects'>
            <div className='container'>
                <div className="counter__wrapper">
                    {
                        counterData.map(({ text, number, index }) => (
                            <div className="counter__item" key={index}>
                                <h3 className='counter__number'>{number}</h3>
                                <h4 className='counter__title'>{text}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Counter;