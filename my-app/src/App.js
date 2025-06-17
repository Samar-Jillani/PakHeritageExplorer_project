import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import HeritageTour from './Components/HeritageTour/HeritageTour';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HistoricalSites from './Components/HistoricalSites/HistoricalSites';
import EventCalendar from './Components/EventCalendar/EventCalendar';
import { useState } from 'react';
import PlaceDetails from './Components/Pages/PlaceDetails';
import MughalEra from './Components/HistoricalSites/MughalEra/MughalEra';
import BritishColonial from './Components/HistoricalSites/BritishColonial/BritishColonial';
import AncientCivilization from './Components/HistoricalSites/AncientCivilization/AncientCivilization';
import IslamicSultanates from './Components/HistoricalSites/IslamicSultanates/IslamicSultanates';
import SikhEra from './Components/HistoricalSites/SikhEra/SikhEra';
import Weather from './Components/Weather/Weather';
import GoogleMap  from './Components/GoogleMap/GoogleMap';
import StoryForm from './Components/StoryForm/StoryForm';
import StoryList from './Components/StoryList/StoryList';
import ReviewHistory from './Components/ReviewHistory/ReviewHistory';



function App() {
  const [year, setYear] = useState(new Date().getFullYear());


  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Router>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <HeritageTour />
              <Weather/>
            </>
          } />

          <Route path='/about Us' element={
            <>
              <About Us/>
              <GoogleMap/>
            </>
          }/>
          <Route path="/historicalsites/:era?" element={<HistoricalSites />} />
          <Route path='/historicalsites/mughal' element={<MughalEra />} />
          <Route path='/historicalsites/british' element={<BritishColonial />} />
          <Route path='/historicalsites/ancient' element={<AncientCivilization />} />
          <Route path='/historicalsites/islamic' element={<IslamicSultanates />} />
          <Route path='/historicalsites/sikh' element={<SikhEra />} />

          <Route path='/eventcalendar' element={
            <>
              <div className="year-selector">
                <label>Select Year: </label>
                <input
                  type="number"
                  value={year}
                  onChange={handleYearChange}
                  min="2000"
                  max="2100"
                />
              </div>
              <EventCalendar year={year} />
            </>
          } />

          <Route path="/place/:placeId" element={<PlaceDetails />} />
          <Route path="/reviews" element={
            <>
              <StoryForm />
              <StoryList />
            </>
          } />
          <Route path="/show-feedback" element={<ReviewHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
