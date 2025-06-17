import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import MughalEra from './MughalEra/MughalEra';
import BritishColonial from './BritishColonial/BritishColonial';
import AncientCivilization from './AncientCivilization/AncientCivilization';
import SikhEra from './SikhEra/SikhEra';
import IslamicSultanates from './IslamicSultanates/IslamicSultanates';

export default function HistoricalSites() {
  const { era } = useParams();
  const navigate = useNavigate();

  const eras = ["Mughal", "British", "Ancient", "Sikh", "Islamic"];

  // agar URL me era invalid ya nahi diya toh default Mughal
  const selectedEra = eras.includes(era) ? era : "Mughal";

  const eraComponents = {
    Mughal: <MughalEra />,
    British: <BritishColonial />,
    Ancient: <AncientCivilization />,
    Sikh: <SikhEra />,
    Islamic: <IslamicSultanates />,
  };

  // Navbar ko pass karo ek function jo route update kare
  const handleEraChange = (newEra) => {
    navigate(`/historicalsites/${newEra}`);
  };

  return (
    <div>
      <Navbar setSelectedEra={handleEraChange} selectedEra={selectedEra} />
      <div className="main">
        {eraComponents[selectedEra]}
      </div>
    </div>
  );
}
