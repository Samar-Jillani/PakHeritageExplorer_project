import React from 'react';
import navCSS from './../Navbar/Navbar.module.css';
import NavbarImg from './../../Components/PakHeritageExplorer.webp';
import { Link } from 'react-router-dom';

export default function Navbar({ setSelectedEra = () => {}, selectedEra }) {
  const eras = [
    { key: "Mughal", label: "Mughal Era" },
    { key: "British", label: "British Colonial" },
    { key: "Ancient", label: "Ancient Civilization" },
    { key: "Sikh", label: "Sikh Era" },
    { key: "Islamic", label: "Islamic Sultanates" },
  ];

  return (
    <div className={navCSS.Navbar_wrapper}>
      <div className={navCSS.logo}>
        <img src={NavbarImg} alt="Pak Heritage Explorer" />
      </div>
      <ul>
        <li className="nav-item"><Link className="nav-link" to="/" style={{color: 'white'}}>Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about Us" style={{color: 'white'}}>About Us</Link></li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/historicalsites" style={{color: 'white'}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            HistoricalSites
          </Link>
          <ul className="dropdown-menu">
            {eras.map(({ key, label }) => (
              <li key={key}>
                <Link
                  className={`dropdown-item ${selectedEra === key ? 'active' : ''}`}
                  to={`/historicalsites/${key}`}
                  onClick={() => setSelectedEra(key)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/eventcalendar" style={{color: 'white'}}>EventCalendar</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/reviews" style={{color: 'white'}}>Explorers Feedback</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/show-feedback" style={{color: 'white'}}>ReviewHistory</Link></li>
      </ul>
    </div>
  );
}
