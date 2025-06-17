import React from 'react'
import headerCSS from './../Header/Header.module.css'

export default function Header() {
  return (
    <>
    <div className={`${headerCSS.header_wrapper} section`}>
        <div className={headerCSS.imageContainer}>
            <h2>Explore The Places, <br/> One Unforgettable Journey</h2>
        </div> 
    </div>
    </>
  )
}
