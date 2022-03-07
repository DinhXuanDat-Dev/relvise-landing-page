import React from 'react'
import "./Hero.scss"

const Hero = () => {
    return (
        <div className="relvise__hero">
            <h1>Finance and Consultancy Solution</h1>
            <p>We know how large objects will act, but things on a small scale.</p>
            <div className="relvise__hero-buttons">
                <button className="btn btn-primary">
                    <a href="/">Get Quote Now</a>
                </button>
                <button className="btn btn-transparent">
                    <a href="/">Learn More</a>
                </button>
            </div>
        </div>
    )
}

export default Hero 
