import React from 'react'
import './services.css'
import webDesign from '../../images/webdesign.svg'
import webDevelopment from '../../images/webdevelopment.svg'

export default function Services() {
    return (
        <div className='container-services'>
            <div className='title-services'>
                <h1>Our Services</h1>
                <div id="cards">
                    <div className="card-design">
                        <span>Web Design </span> <hr></hr>
                        <img className='design' src={webDesign} alt='Web Design Picture' />
                    </div>
                    <div className="card-development">
                        <span>Web Development </span> <hr></hr>
                        <img className='development' src={webDevelopment} alt='Web Development Picture' />
                    </div>

                </div>
            </div>
        </div>
    )
}
