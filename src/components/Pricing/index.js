import React from 'react'
import './pricing.css'

export default function Pricing() {
    return (
        <div className='container-cards'>
            <h1>Our Pricing</h1>
            <div id="cards">
                <div className="card-left">
                    <h2>Basic</h2>
                    <h3>$5</h3>
                    <p>Lorem Ipsum </p><hr></hr>
                    <p>Lorem Ipsum </p><hr></hr>
                    <p>Lorem Ipsum</p><hr></hr>
                    <p>Lorem Ipsum</p><hr></hr>
                    <button><strong>GET STARTED</strong></button>
                </div>
                <div className="card-middle">
                    <h2>Standard</h2>
                    <h3>$10</h3>
                    <p>Lorem Ipsum </p><hr></hr>
                    <p>Lorem Ipsum</p><hr></hr>
                    <p>Lorem Ipsum</p><hr></hr>
                    <p>Lorem Ipsum</p><hr></hr>
                    <button><strong>GET STARTED</strong></button>
                </div>
                <div className="card-right">
                    <h2>Premium</h2>
                    <h3>$15</h3>
                    <p>Lorem Ipsum </p><hr></hr>
                    <p>Lorem Ipsum </p><hr></hr>
                    <p>Lorem Ipsum </p><hr></hr>
                    <p>Lorem Ipsum </p><hr></hr>
                    <button><strong>GET STARTED</strong></button>
                </div>
            </div>
        </div>
    )
}