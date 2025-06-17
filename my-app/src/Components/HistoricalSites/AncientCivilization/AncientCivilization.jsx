import React from 'react'
import AncientCivilizationCSS from './../AncientCivilization/AncientCivilization.module.css'

import { Link } from 'react-router-dom'

export default function AncientCivilization() {
  return (
    <>
    <div className={AncientCivilizationCSS.main}>
    <h2>Ancient Civilization's Places</h2>
    </div>
    <div className={`${AncientCivilizationCSS.wrapper} section`}>
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
    Mohenjo Daro
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A lost city of the Indus Valley, where silent ruins speak of a sophisticated ancient civilization.
  </p>
  
  <Link to="/place/17" style={{
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
    Harappa
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A cradle of Gandhara art and Buddhist learning, adorned with monasteries and relics of wisdom.
  </p>
  
  <Link to="/place/18" style={{
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
    Kot Diji Fort
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A towering relic of an ancient kingdom, its stone walls standing resilient against time.
  </p>
  
  <Link to="/place/20" style={{
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
    Mehrgarh
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    One of the world’s earliest settlements, where the dawn of human civilization took root.
  </p>
  
  <Link to="/place/21" style={{
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
    Takht-i-Bahi
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A sacred Buddhist monastery perched on a hill, echoing chants of monks from centuries past.
  </p>
  
  <Link to="/place/22" style={{
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
    Ranikot Fort
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    The ‘Great Wall of Sindh,’ sprawling fortress lost in the wilderness, guarding forgotten secrets.
  </p>
  
  <Link to="/place/23" style={{
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
    Barikot Temple
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A historic stronghold of Alexander’s conquests, where Hellenistic and Gandharan cultures intertwined.
  </p>
  
  <Link to="/place/24" style={{
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
    Sirkap
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    Sirkap is an ancient Indo-Greek archaeological site near Taxila, founded in the 2nd century BCE.
  </p>
  
  <Link to="/place/24" style={{
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
