import React, { useState } from "react";
import EventCalendarCSS from './../EventCalendar/EventCalendar.module.css';

const events = [
  { name: "History By Night", location: "Lahore Fort, Lahore", date: "2025-05-17" },
  { name: "Mela Chiraghan", location: "Shalimar Gardens, Lahore", date: "2025-04-11" },
  { name: "Khedan Lahore Dian", location: "Jahangir's Tomb, Lahore", date: "2025-02-16" },
  { name: "Akbari Sarai Food Festival", location: "Akbari Sarai, Lahore", date: "2025-09-30" },
  { name: "World Heritage Day", location: "Hiran Minar, Sheikhupura", date: "2025-04-18" },
  { name: "Kathak Dance Performance", location: "Sheesh Mahal, Lahore", date: "2025-02-09" },
  { name: "Mela Baharan", location: "Wazir Khan Mosque, Lahore", date: "2025-04-04" },
  { name: " Islamic Art & Calligraphy Exhibition", location: "Frere Hall, Karachi", date: "2025-04-19" },
  { name: "Karachi Eat Food Festival 2025", location: "Beach View Park, Clifton, Karachi", date: "2025-01-10" },
  { name: "National Maritime Policy Workshop 2025", location: "Karachi Port Trust Building, Karachi", date: "2025-02-28" },
  { name: "Jhuley Lal: Crafting the Contemporary", location: "Mohatta Palace, Karachi", date: "2025-05-17" },
  { name: "UNESCO Workshop on Disaster Risk Reduction for Cultural Heritage", location: "Mohenjo-Daro, Sindh", date: "2025-11-18" },
  { name: "Harappa Festival", location: "Harappa, Punjab", date: "2025-03-01" },
  { name: "Training on ‘Understanding Folk Festivals of Pakistan’", location: "Mehrgarh, Balochistan", date: "2025-02-14" },
  { name: "R-70 Ibn-Sahl Astronomy Trip", location: "Ranikot Fort, Sindh", date: "2025-01-25" },
  { name: "Baisakhi Mela", location: "Gurdwara Panja Sahib, Hasan Abdal", date: "2025-04-12" },
  { name: "Death Anniversary of Maharaja Ranjit Singh", location: "Gurdwara Dera Sahib, Lahore", date: "2025-06-29" },
  { name: "Rori Sahib Historical Exhibition", location: "Gurdwara Rori Sahib, Eminabad", date: "2025-08-10" },
  { name: "Guru Nanak Dev Ji's Birth Anniversary", location: "Gurdwara Janamasthan, Nankana Sahib", date: "2025-11-15" },
  { name: "Urs of Shah Rukn-e-Alam", location: "Tomb of Shah Rukn-e-Alam, Multan", hijri_date: "5 Safar",gregorian_estimate: "2025-08-05", note: "Date based on moon sighting; may vary." },
  { name: "Urs of Hazrat Bahauddin Zakariya", location: "Shrine of Bahauddin Zakariya, Multan", hijri_date: "5 Safar", gregorian_estimate: "2025-08-05", note: "Date based on moon sighting; may vary." },
  { name: "Mela Uch Sharif", location: "Uch Sharif, Bahawalpur", date: "2025-09-20", hijri_date: "10 Rabi al-Awwal", gregorian_estimate: "2025-09-20", note: "Date based on moon sighting; may vary." },
  { name: "Urs of Hazrat Data Ganj Bakhsh:", location: "Dataganjbaksh, Lahore", date: "2025-11-01",hijri_date: "20 Safar", gregorian_estimate: "2025-11-01", note: "Date based on moon sighting; may vary." }
];


const generateCalendar = (year) => {
  const months = [
    { name: "January", days: 31 },
    { name: "February", days: 28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
  ];


  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    months[1].days = 29;
  }

  return months;
};

const FullYearCalendar = ({ year }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const months = generateCalendar(year);

  return (
    <div className={`${EventCalendarCSS.container}section`}>
      <div className={EventCalendarCSS.grid}>
        {months.map((month, index) => (
          <div key={index} className={EventCalendarCSS.month}>
            <h3>{month.name}</h3>
            <div className={EventCalendarCSS.calendar}>
              {[...Array(month.days)].map((_, dayIndex) => {
                const date = `${year}-${String(index + 1).padStart(2, "0")}-${String(dayIndex + 1).padStart(2, "0")}`;
                  const event = events.find(
                  (e) => (e.date && e.date === date) || (e.gregorian_estimate && e.gregorian_estimate === date)
                 );

                return (
                  <div
                    key={dayIndex}
                    className={`calendar-day ${event ? "event-day" : ""}`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    {dayIndex + 1}
                    {event && <span className="event-marker">📍</span>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
       <div className={EventCalendarCSS.details}>
       <h3>{selectedEvent.name}</h3>
       <p>📍 {selectedEvent.location}</p>
       {selectedEvent.hijri_date && (
       <p>🕋 Hijri Date: {selectedEvent.hijri_date}</p>
       )}
       {(selectedEvent.note || selectedEvent.gregorian_estimate) && (
      <p>🗓 Gregorian Estimate: {selectedEvent.gregorian_estimate}</p>
      )}
      {selectedEvent.note && (
      <p style={{ color: "orange", fontStyle: "italic" }}>{selectedEvent.note}</p>
      )}
      <button onClick={() => setSelectedEvent(null)}>Close</button>
    
    </div>
      )}
      <br />
      <br />
      <br />
    </div>
  );
};

export default FullYearCalendar;
