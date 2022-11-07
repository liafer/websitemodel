import React from 'react'
import './home.css'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import techGirl from '../../images/undraw_girl.svg'
import Pricing from '../../components/Pricing'
import Footer from '../../components/Footer'
import Services from '../../components/Services'


export default function Home() {
    return (
        <div id='container-home'>
            <div className='container'>
                <Header />

                <div id='hero'>
                    <div className='content'>
                        <div className='intro'>
                            <h1>Web Design & Development </h1>
                            <span>Start your project today!</span>

                            <a className='projects-link' href="#pricing">Get Started</a>

                        </div>

                        <img className='avatarGirl' src={techGirl} alt='Avatar Girl' />

                    </div>
                </div>

                <div id='services'>
                    <Services />
                </div>

                <div id='pricing'>
                    <Pricing />
                </div>

                <Footer />
            </div>
        </div>
    )
}
