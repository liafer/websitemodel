import React from 'react'
import { Link } from 'react-scroll'
import './header.css'

export default function Header() {
    return (
        <header>
            <Link className='home'
                to="/websitemodel"
                smooth={true}
                offset={50}
                duration={500}>Home
            </Link>

            <Link className='services'
                to="services"
                smooth={true}
                duration={500}>Services
            </Link>

            <Link className='pricing'
                to="pricing"
                smooth={true}
                offset={50}
                duration={500}>Pricing
            </Link>
        </header >
    )
}