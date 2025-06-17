import React, { useState } from "react";

const HeritageTour = () => {
  const [places, setPlaces] = useState([
      // Mughal Era
      { name: "Badshahi Mosque", era: "Mughal Era", location: "Lahore" },
      { name: "Lahore Fort", era: "Mughal Era", location: "Lahore" },
      { name: "Shalimar Gardens", era: "Mughal Era", location: "Lahore" },
      { name: "Jahangir's Tomb", era: "Mughal Era", location: "Lahore" },
      { name: "Hiran Minar", era: "Mughal Era", location: "Sheikhupura" },
      { name: "Akbari Sarai", era: "Mughal Era", location: "Lahore" },
      { name: "Sheesh Mahal", era: "Mughal Era", location: "Lahore" },
      { name: "Wazir Khan Mosque", era: "Mughal Era", location: "Lahore" },
    
      // British Colonial Era
      { name: "Frere Hall", era: "British Colonial Era", location: "Karachi" },
      { name: "Montgomery Hall (Quaid-e-Azam Library)", era: "British Colonial Era", location: "Lahore" },
      { name: "Attock Fort", era: "British Colonial Era", location: "Attock" },
      { name: "General Post Office", era: "British Colonial Era", location: "Lahore" },
      { name: "Empress Market", era: "British Colonial Era", location: "Karachi" },
      { name: "Karachi Port Trust Building", era: "British Colonial Era", location: "Karachi" },
      { name: "Clock Tower", era: "British Colonial Era", location: "Faisalabad" },
      { name: "Mohatta Palace", era: "British Colonial Era", location: "Karachi" },
    
      // Ancient Civilizations
      { name: "Mohenjo-Daro", era: "Ancient Civilizations", location: "Sindh" },
      { name: "Harappa", era: "Ancient Civilizations", location: "Punjab" },
      { name: "Sirkap", era: "Ancient Civilizations", location: "Punjab" },
      { name: "Mehrgarh", era: "Ancient Civilizations", location: "Near Bolan Pass" },
      { name: "Ranikot Fort", era: "Ancient Civilizations", location: "Jamshoro, District" },
      { name: "Kot Diji Fort", era: "Ancient Civilizations", location: "Khairpur" },
      { name: "Takh-i-Bhai", era: "Ancient Civilizations", location: "Mardan, District" },
      { name: "Barikot Temple", era: "Ancient Civilizations", location: "Swat Valley" },
    
      // Sikh Era
      { name: "Gurdwara Bhuman Shah", era: "Sikh Era", location: "Okara" },
      { name: "Tambu Gurdwara", era: "Sikh Era", location: "Lahore" },
      { name: "Gurdwara Panja Sahib", era: "Sikh Era", location: "Hasan Abdal" },
      { name: "Gurdwara Dera Sahib", era: "Sikh Era", location: "Lahore" },
      { name: "Gurdwara Rori Sahib", era: "Sikh Era", location: "Eminabad" },
      { name: "Gurdwara Janamasthan", era: "Sikh Era", location: "Nankana Sahib" },
      { name: "Maharaja Ranjit Singh's Haveli", era: "Sikh Era", location: "Lahore" },
      { name: "Baradari of Maharaja Sher Singh", era: "Sikh Era", location: "Lahore" },
    
      // Islamic Sultanates
      { name: "Tomb of Shah Rukn-e-Alam", era: "Islamic Sultanates", location: "Multan" },
      { name: "Rohtas Fort", era: "Islamic Sultanates", location: "Jhelum" },
      { name: "Makli Necropolis", era: "Islamic Sultanates", location: "Thatta, Sindh" },
      { name: "Derawar Fort", era: "Islamic Sultanates", location: "Bahawalpur" },
      { name: "Shrine of Bahauddin Zakariya", era: "Islamic Sultanates", location: "Multan" },
      { name: "Uch Sharif", era: "Islamic Sultanates", location: "Bahawalpur" },
      { name: "Sadiq Garh Palace", era: "Islamic Sultanates", location: "Bahawalpur" },
      { name: "HazratDataGanjBaksh", era: "Islamic Sultanates", location: "Lahore" }
    
  ]);

  const [searchText, setSearchText] = useState(""); 
  const [sortOption, setSortOption] = useState(""); 
  const [newPlace, setNewPlace] = useState({ name: "", era: "", location: "" });

   const addPlace = () => {
    if (newPlace.name && newPlace.era && newPlace.location) {
      setPlaces([...places, newPlace]);
      setNewPlace({ name: "", era: "", location: "" }); 
    }
  };

  const filteredPlaces = places.filter((place) => {
    if (sortOption === "name") {
      return place.name.toLowerCase().includes(searchText.toLowerCase());
    } else if (sortOption === "era") {
      return place.era.toLowerCase().includes(searchText.toLowerCase());
    } else if (sortOption === "location") {
      return place.location.toLowerCase().includes(searchText.toLowerCase());
    } else {
      return place.name.toLowerCase().includes(searchText.toLowerCase());
    }
  });

  const sortedPlaces = [...filteredPlaces].sort((a, b) => {
    if (sortOption === "name") return a.name.localeCompare(b.name);
    if (sortOption === "era") return a.era.localeCompare(b.era);
    if (sortOption === "location") return a.location.localeCompare(b.location);
    return 0;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", marginTop: "-80px"}}>
      <h3 style={{ textAlign: "center", marginTop: "100px", fontWeight: 600, fontSize: "30px" }}>
        Visit Your Fav Places
      </h3>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "none",
          borderRadius: "4px",
        }}
      />

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "none",
          borderRadius: "4px",
        }}
      >
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="era">Era</option>
        <option value="location">Location</option>
      </select>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Name"
          value={newPlace.name}
          onChange={(e) => setNewPlace({ ...newPlace, name: e.target.value })}
          style={{ flex: 1, padding: "10px", border: "none" }}
        />
        <input
          type="text"
          placeholder="Era"
          value={newPlace.era}
          onChange={(e) => setNewPlace({ ...newPlace, era: e.target.value })}
          style={{ flex: 1, padding: "10px", border: "none" }}
        />
        <input
          type="text"
          placeholder="Location"
          value={newPlace.location}
          onChange={(e) => setNewPlace({ ...newPlace, location: e.target.value })}
          style={{ flex: 1, padding: "10px", border: "none" }}
        />
        <button onClick={addPlace} style={{ padding: "10px", cursor: "pointer" }}>
          ➕ Add
        </button>
      </div>
     
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Era</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Location
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPlaces.length > 0 ? (
            sortedPlaces.map((place, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {place.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {place.era}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {place.location}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                style={{
                  textAlign: "center",
                  padding: "10px",
                  color: "#888",
                  fontStyle: "italic",
                }}
              >
                No places found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HeritageTour;
