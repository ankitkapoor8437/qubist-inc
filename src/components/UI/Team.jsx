import React from 'react'
import '../styles/Team.css'
import teamData from '../../assets/data/teamDetails'

const Team = () => {
    return (
        <section className='our__team'>
            <div className='container'>
                <div className="team__content">
                    <h6 className="subtitle">Our Team</h6>
                    <h2>Meet with <span className="highlight">our team</span></h2>
                </div>
                <div className="team__wrapper">
                    {
                        teamData.map(({ imgUrl, name, position }) => (
                            <div className="team__item">
                                <div className="team__img">
                                    <img src={imgUrl} alt="" />
                                </div>
                                <div className='team__details'>
                                    <h4>{name}</h4>
                                    <p className="description">{position}</p>

                                    <div className="team__member-social">
                                        <span>
                                            <i className="ri-linkedin-line"></i>
                                        </span>
                                        <span>
                                            <i className="ri-twitter-line"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team;