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
                        <p className="description">Grow with us.</p>
                        <p className="small__text description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Veritatis velit non vero dolorem asperiores nobis sed nostrum.
                            Temporibus excepturi, ipsam sed officia veritatis mollitia.
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