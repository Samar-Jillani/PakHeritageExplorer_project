import React from 'react'
import BritishColonialCSS from './../BritishColonial/BritishColonial.module.css'

import { Link } from 'react-router-dom'

export default function BritishColonial() {
  return (
    <>
    <div className={BritishColonialCSS.main}>
    <h2>British Colonial Era's Places</h2>
    </div>
    <div className={`${BritishColonialCSS.wrapper} section`}>
    <div style={{
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  maxWidth: '400px',
  transition: 'transform 0.3s ease',
  cursor: 'pointer'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    Frere Hall
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A Victorian-Gothic landmark surrounded by lush gardens, preserving Karachi’s colonial charm.
  </p>
  
  <Link to="/place/9" style={{
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
  cursor: 'pointer'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    Attock Fort
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A historic stronghold on the banks of the Indus, guarding ancient trade routes.
  </p>
  
  <Link to="/place/10" style={{
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
  cursor: 'pointer'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    Empress Market
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A bustling colonial-era bazaar, where the past and present intertwine in a vibrant spectacle.
  </p>
  
  <Link to="/place/11" style={{
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
  cursor: 'pointer'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    Port Trust Building
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A striking edifice showcasing Edwardian architecture, standing tall over Karachi’s maritime history.
  </p>
  
  <Link to="/place/12" style={{
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
  cursor: 'pointer'
}} 
onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
  
  <h5 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '10px', color: '#2c3e50' }}>
    Mohatta Palace
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A stunning Indo-Saracenic palace, whispering tales of elegance and nostalgia.
  </p>
  
  <Link to="/place/13" style={{
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
    General Post Office
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A magnificent red-brick building, a timeless witness to Lahore’s evolving history.
  </p>
  
  <Link to="/place/14" style={{
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
    Clock Tower
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A central landmark, its grand design symbolizing the city’s colonial heritage.
  </p>
  
  <Link to="/place/15" style={{
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
    Lahore Museum
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A treasure trove of history and culture, Mughal artifacts, and colonial-era exhibits whisper tales of the past.
  </p>
  
  <Link to="/place/16" style={{
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
