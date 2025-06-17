import React from 'react'
import aboutCSS from './../About/About.module.css'


export default function About() {
  return (
    <>
    <div className={`${aboutCSS.about_wrapper} section`}>
      <div className={aboutCSS.about_content}>

        <h2>Exploring the Legacy of Ancient Wonders</h2>

        <p>Discover the timeless charm of Pakistan's historical landmarks, where every stone whispers stories of glory, culture, and heritage.</p>

        <div className={aboutCSS.about}>
          <p><i className="ri-phone-line"> 24/7 Support </i></p>
          <p><i className="fas fa-compass"></i> Navigate Through History</p>
          <p><i className="fas fa-scroll"></i> Discover Cultural Stories</p>
          <p><i className="fas fa-cloud-sun"></i> Check Weather Before Visiting</p>
          <p><i className="fas fa-calendar-alt"></i> Upcoming Events</p>
          <p><i className="fas fa-map-marked-alt"></i> Interactive Maps</p>
        </div>
      </div>
    </div>
    <div className={aboutCSS.about_footer}>
      <h2>Our Mission </h2>
      <p>Our mission is to bring history to life, guiding you through the marvels of architecture, the whispers of forgotten civilizations, and the vibrant traditions that continue to shape our identity.To preserve, promote, and celebrate Pakistan's rich heritage by providing an engaging platform that educates, inspires, and connects people to its historical landmarks, fostering awareness and pride while supporting conservation and sustainable tourism.</p> <br />
      <h2>Join Us In Discovering Past</h2> 
      <p>Step into the echoes of the past and explore the timeless beauty of Pakistan's rich heritage. From the ancient ruins of Mohenjo-Daro to the majestic grandeur of Badshahi Mosque, every corner of this land tells a story of resilience, culture, and artistry.Step into the world of history with <span>Pak Heritage Explorer </span>and uncover the stories that make our world unique. <br />
      Let the journey begin!</p> 
      <h2>Our Commitment</h2>
      <p>Pak Heritage Explorer is dedicated to documenting and showcasing Pakistan’s diverse heritage, from ancient civilizations to colonial-era landmarks. We aim to inspire curiosity, learning, and a sense of responsibility toward our cultural assets</p>
      <h2>Our Achievements</h2>
      <p>We don’t just provide historical information; we also inspire people toward heritage preservation and cultural appreciation. Through our website, people not only learn about history but also discover ways to preserve it.</p>
      <p><span>* 100+ Historical Sites Explored</span></p>
      <p><span>* 300+ Users Engaged</span></p>
      <p><span>* Collaboration with Historians & Researchers</span></p>
      <br />
    </div>   
    </>
  )
}
