import React from 'react'
import IslamicSultanatesCSS from './../IslamicSultanates/IslamicSultanates.module.css'

import { Link } from 'react-router-dom'



export default function IslamicSultanates() {
  return (
     <>
     <div className={IslamicSultanatesCSS.main}>
     <h2>Islamic Sultanates Era's Places</h2>
     </div>
    <div className={`${IslamicSultanatesCSS.wrapper} section`}>
    <div style={{
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  maxWidth: '400px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  marginBottom: '20px'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    Rohtas Fort
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A colossal fortress built by Sher Shah Suri, standing defiantly against time and invaders.
  </p>
  
  <Link to="/place/33" style={{
    backgroundColor: '#1e90ff',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-block'
  }}>
    View Details <span style={{ marginLeft: '8px' }}>→</span>
  </Link>
</div>

<div style={{
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  maxWidth: '400px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  marginBottom: '20px'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    Derawar Fort
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A vast desert stronghold, its towering walls glowing golden under the sun’s embrace.
  </p>
  
  <Link to="/place/34" style={{
    backgroundColor: '#1e90ff',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-block'
  }}>
    View Details <span style={{ marginLeft: '8px' }}>→</span>
  </Link>
</div>

<div style={{
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  maxWidth: '400px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  marginBottom: '20px'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    Sadiq-Garh Palace
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A regal masterpiece, blending Eastern and Western architectural grandeur in its silent halls.
  </p>
  
  <Link to="/place/35" style={{
    backgroundColor: '#1e90ff',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-block'
  }}>
    View Details <span style={{ marginLeft: '8px' }}>→</span>
  </Link>
</div>

<div style={{
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  maxWidth: '400px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  marginBottom: '20px'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    Shrine Shah-Rukn-Alam
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A magnificent Sufi shrine, crowned with a celestial blue dome, radiating peace.
  </p>
  
  <Link to="/place/36" style={{
    backgroundColor: '#1e90ff',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-block'
  }}>
    View Details <span style={{ marginLeft: '8px' }}>→</span>
  </Link>
</div>

<div style={{
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  maxWidth: '400px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  marginBottom: '20px'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    Bahauddin Tomb
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A revered Sufi retreat, enveloped in spiritual tranquility and timeless devotion.
  </p>
  
  <Link to="/place/37" style={{
    backgroundColor: '#1e90ff',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-block'
  }}>
    View Details <span style={{ marginLeft: '8px' }}>→</span>
  </Link>
</div>

<div style={{
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  maxWidth: '400px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  marginBottom: '20px'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    UCH Sharif
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A mystical town of shrines and legends, where saints once walked and miracles unfolded.
  </p>
  
  <Link to="/place/38" style={{
    backgroundColor: '#1e90ff',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-block'
  }}>
    View Details <span style={{ marginLeft: '8px' }}>→</span>
  </Link>
</div>

<div style={{
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  maxWidth: '400px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  marginBottom: '20px'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    Necropolis
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A hauntingly beautiful city of the dead, where intricately carved tombs whisper ancient secrets.
  </p>
  
  <Link to="/place/39" style={{
    backgroundColor: '#1e90ff',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-block'
  }}>
    View Details <span style={{ marginLeft: '8px' }}>→</span>
  </Link>
</div>

<div style={{
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  maxWidth: '400px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  marginBottom: '20px'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    Darbar DataGanjBaksh
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A beacon of Sufi wisdom, where seekers find solace in the echoes of devotional hymns.
  </p>
  
  <Link to="/place/40" style={{
    backgroundColor: '#1e90ff',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-block'
  }}>
    View Details <span style={{ marginLeft: '8px' }}>→</span>
  </Link>
</div>
    </div>
    </>
  )
}
