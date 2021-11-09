import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
function HeroSection(){
    return (
        <div className='hero-container'>
            <video src="/videos/v4.mp4" autoPlay loop muted />
            <h1>Good health is good business</h1>
            <h2>What are you waiting fo?</h2>
            <div className="hero-btns">
                <Button 
                 buttonStyle="btn--outline"
                 buttonSize="btn--large">
                     GET STARTED
                 </Button>
                 

            </div>

        </div>
    )
}

export default HeroSection