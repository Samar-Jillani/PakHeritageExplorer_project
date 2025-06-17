import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import placeData from './placeData';
import { useEffect } from 'react';
import axios from 'axios';


function PlaceDetails() {
  const { placeId } = useParams();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/places')
      .then(res => setPlaces(res.data))
      .catch(err => console.error(err));
  }, []);

  const place = placeData.find(
    place => place.place_id.toString() === placeId
  );

  if (!place) {
    return <p className="text-red-500 p-4">Place not found!</p>;
  }

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory p-8">
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-4">{place.name}</h2>
        <p><strong>Location:</strong> {place.location}</p>
        <h2 className="text-3xl font-bold mb-4">{place.name}</h2>
        <p><strong>Location:</strong> {place.location}</p>
        {place.image_url && (
        <div style={{ width: '90%', height: '70%', margin: 'auto' }}>
        <img
        src={`http://localhost:5000/${place.image_url}`} 
        alt={place.name}
        style={{
        width: '100%',
        height: '100%',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        border: '1px solid #d1d5db',
        objectFit: 'cover',
        }}
        />
        </div>
        )}
        <p><strong>History:</strong> {place.history}</p>
        <p><strong>Era:</strong> {place.era}</p>
        <p><strong>Category:</strong> {place.category}</p>
        <p><strong>Coordinates:</strong> Lat: {place.coordinates.lat}, Lng: {place.coordinates.lng}</p>
        <p><strong>Importance:</strong> {place.importance}</p>
        <p><strong>Architectural Style:</strong> {place.architectural_style}</p>
        <p><strong>Period of Significance:</strong> {place.period_of_significance}</p>


        {place.visiting_info && (
          <div className="mt-10 p-2 border-t border-gray-300">
            <h2 className="text-2xl font-semibold mb-2">Visiting Information</h2>
            {typeof place.visiting_info.opening_hours === "object" ? (
            <>
              <p><strong>Opening Hours:</strong></p>
              <p>Weekdays: {place.visiting_info.opening_hours.weekdays}</p>
              <p>Sunday: {place.visiting_info.opening_hours.sunday}</p>
            </>
          ) : (
            <p><strong>Opening Hours:</strong> {place.visiting_info.opening_hours}</p>
          )}
            <p><strong>Best Time to Visit:</strong> {place.visiting_info.best_time_to_visit}</p>
            <p><strong>Contact Info:</strong></p>
            <ul className="ml-6 list-disc">
              <li><strong>Phone:</strong> {place.visiting_info.contact_info.phone}</li>
              <li><strong>Email:</strong> {place.visiting_info.contact_info.email}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlaceDetails;
