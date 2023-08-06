import React from 'react'
import '../styles/Blog.css'

// import BlogImage from '../../assets/images/video.png'
import blogDetails from '../../assets/data/blogDetails'

function Blog() {
    return (
        <section>
            <div className='container'>
                <div className='blog__top-content'>
                    <h6 className='subtitle'>Our Blog</h6>
                    <h2>
                        Let's have a look from our
                        <span className='highlight'>recent blog</span>
                    </h2>
                </div>
                <div className='blog__wrapper'>
                    {
                        blogDetails.map(({ index, title, imgUrl, desc, linkUrl }) => (
                            <div className='blog__item' key={index}>
                                <h2>{title}</h2>
                                <div className='blog__img'>
                                    <img src={imgUrl} alt="" />
                                </div>
                                <p className='description blog__desc'>
                                    {desc}
                                </p>
                                <div>
                                    <a href={linkUrl} className='learn__more'>
                                        <i className='ri-arrow-right-line'></i>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog