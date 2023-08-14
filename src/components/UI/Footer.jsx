import React from 'react'
import '../styles/Footer.css'
import { quickLinks01, quickLinks02, quickLinks03 } from '../../assets/data/footerDetails'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <h2>Qubist.Inc</h2>
                        <p className="description">We make brands.</p>
                        <p className="small__text description">
                            Crafting Digital Excellence, Amplifying Brands. Your Vision, Our Innovation, Remarkable Results. Trust Qubist.Inc to Transform Your Digital Landscape.
                        </p>
                    </div>

                    <div className="footer__quick-links">
                        <h3 className="quick__links-title">Solution</h3>
                        <ul className="quick__links">
                            {
                                quickLinks01.map(({ index, display, path }) => (
                                    <li className='quick__link-item' key={index}>
                                        <a href={path}>{display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footer__quick-links">
                        <h3 className="quick__links-title">Company</h3>
                        <ul className="quick__links">
                            {
                                quickLinks03.map(({ index, display, path }) => (
                                    <li className='quick__link-item' key={index}>
                                        <a href={path}>{display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footer__quick-links">
                        <h3 className="quick__links-title">Support</h3>
                        <ul className="quick__links">
                            {
                                quickLinks02.map(({ index, display, path }) => (
                                    <li className='quick__link-item' key={index}>
                                        <a href={path}>{display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <p className='copyright'>Copyright {year}, Developed by Qubist.Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;