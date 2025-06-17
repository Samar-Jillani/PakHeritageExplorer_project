import React from 'react'
import MughalEraCSS from './../MughalEra/MughalEra.module.css'
import { Link } from 'react-router-dom'


export default function MughalEra() {
  return (
    <>
    <div className={MughalEraCSS.main}>
    <h2>Mughal Era's Places</h2>
    </div>
    <div class={`${MughalEraCSS.wrapper} section`}>
    <div style={{
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  marginBottom: '20px',
  maxWidth: '400px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    Badshahi Mosque
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A majestic red sandstone mosque with intricate marble, reflecting Mughal grandeur and spiritual elegance.
  </p>
  
  <Link to="/place/1" style={{
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
  marginBottom: '20px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer'
}}
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>

  <h5 style={{ fontWeight: "700", fontSize: "1.3rem", marginBottom: "10px", color: "#2c3e50" }}>
    Lahore Fort
  </h5>
  <p style={{ fontSize: "1rem", color: "#555", marginBottom: "20px" }}>
    A UNESCO-listed fortress with ornate palaces, lush gardens, and timeless Mughal artistry.
  </p>
  <Link to="/place/2" style={{
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
  marginBottom: '20px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer'
}}
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>

  <h5 style={{ fontWeight: "700", fontSize: "1.3rem", marginBottom: "10px", color: "#2c3e50" }}>
    Shalimaar Garden
  </h5>
  <p style={{ fontSize: "1rem", color: "#555", marginBottom: "20px" }}>
    A serene Persian-style paradise with cascading terraces, marble pavilions, and flowing fountains.
  </p>
  <Link to="/place/3" style={{
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
  marginBottom: '20px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer'
}}
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>

  <h5 style={{ fontWeight: "700", fontSize: "1.3rem", marginBottom: "10px", color: "#2c3e50" }}>
    Jahangir Tomb
  </h5>
  <p style={{ fontSize: "1rem", color: "#555", marginBottom: "20px" }}>
    A stunning mausoleum adorned with intricate frescoes and inlaid marble, resting in tranquil gardens.
  </p>
  <Link to="/place/4" style={{
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
  marginBottom: '20px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer'
}}
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>

  <h5 style={{ fontWeight: "700", fontSize: "1.3rem", marginBottom: "10px", color: "#2c3e50" }}>
    Hiran Minar
  </h5>
  <p style={{ fontSize: "1rem", color: "#555", marginBottom: "20px" }}>
    A poetic blend of architecture and nature, built in memory of Emperor Jahangir’s beloved deer.
  </p>
  <Link to="/place/5" style={{
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
  marginBottom: '20px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer'
}}
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>

  <h5 style={{ fontWeight: "700", fontSize: "1.3rem", marginBottom: "10px", color: "#2c3e50" }}>
    Sheesh Mahal
  </h5>
  <p style={{ fontSize: "1rem", color: "#555", marginBottom: "20px" }}>
    A dazzling palace of mirrors, reflecting the opulence and artistic mastery of the Mughal period.
  </p>
  <Link to="/place/6" style={{
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
  marginBottom: '20px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer'
}}
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>

  <h5 style={{ fontWeight: "700", fontSize: "1.3rem", marginBottom: "10px", color: "#2c3e50" }}>
    Wazir Khan Mosque
  </h5>
  <p style={{ fontSize: "1rem", color: "#555", marginBottom: "20px" }}>
    A masterpiece of Persian tilework, where vibrant frescoes and calligraphy mesmerize the soul.
  </p>
  <Link to="/place/7" style={{
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
  marginBottom: '20px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer'
}}
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>

  <h5 style={{ fontWeight: "700", fontSize: "1.3rem", marginBottom: "10px", color: "#2c3e50" }}>
    Akbari Sarai
  </h5>
  <p style={{ fontSize: "1rem", color: "#555", marginBottom: "20px" }}>
    A grand Mughal caravanserai, once a resting place for travelers, echoing stories of a bygone era.
  </p>
  <Link to="/place/8" style={{
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
