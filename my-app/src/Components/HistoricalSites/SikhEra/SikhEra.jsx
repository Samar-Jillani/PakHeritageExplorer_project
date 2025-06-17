import React from 'react'
import SikhEraCSS from './../SikhEra/SikhEra.module.css'

import { Link } from 'react-router-dom'

export default function AncientCivilization() {
  return (
    <>
    <div className={SikhEraCSS.main}>
    <h2>Sikh Era's Places</h2>
    </div>
    <div className={`${SikhEraCSS.wrapper} section`}>
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
    Gurdwara Jamansthan
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    The birthplace of Guru Nanak, where every stone echoes his teachings of Gurunanak.
  </p>
  
  <Link to="/place/25" style={{
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
    Gurdwara Panja Sahib
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A place of divine imprints, where legend meets devotion in flowing waters.
  </p>
  
  <Link to="/place/26" style={{
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
    Gurudwara Rori Sahib
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A sacred sanctuary where Guru Nanak once sought refuge, wrapped in history’s embrace.
  </p>
  
  <Link to="/place/27" style={{
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
    Haveli Ranjit Singh
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A royal residence reflecting the power and grandeur of the great founder of Sikh Empire.The haveli has also been the subject of some sections being restored to maintain its cultural heritage.
  </p>
  
  <Link to="#/place/28" style={{
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
    Sher Singh Baradari
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
  The Baradari was constructed as a place for relaxation and leisure, where Maharaja Sher Singh and his courtiers would retreat to enjoy the serenity of the surroundings, particularly during the hot summer months.
  </p>
  
  <Link to="/place/29" style={{
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
    Gurdwara Darbar Sahib
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A sacred sanctuary where Guru Nanak Dev Ji spent his final years, radiating peace and spiritual harmony.
  </p>
  
  <Link to="/place/30" style={{
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
    Bhuman Shah
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A revered Sikh shrine, resonating with hymns of devotion and timeless faith of Sikh's.
  </p>
  
  <Link to="/place/31" style={{
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
    Tambu Gurudwara
  </h5>
  
  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
    A sacred site where Guru Hargobind Sahib once camped, enveloped in spiritual serenity.
  </p>
  
  <Link to="/place/32" style={{
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