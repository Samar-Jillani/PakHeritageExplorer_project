import React, { useEffect, useRef } from 'react';
import historicalPlaces from './../data/historicalPlaces';

const GoogleMap = () => {
  const mapRef = useRef(null);
  const googleMap = useRef(null);
  

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDoCtVQFeI8IkvLaRLm-pYX9WvW6JapDsQ`;
    script.async = true;
    script.defer = true;
    script.onload = () => initMap();
    document.body.appendChild(script);
  }, []);

  const initMap = () => {
    googleMap.current = new window.google.maps.Map(mapRef.current, {
      center: { lat: 30.3753, lng: 69.3451 },
      zoom: 5,
    });

    historicalPlaces.forEach(place => {
      const marker = new window.google.maps.Marker({
        position: { lat: place.latitude, lng: place.longitude },
        map: googleMap.current,
        title: place.name,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `<div><h3>${place.name}</h3><p>${place.description}</p>
         <p><strong>Location:</strong> 
              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.locationName)}" 
                 target="_blank" 
                 rel="noopener noreferrer">
                ${place.locationName}
              </a>
            </p>
        </div>`,
      });

      marker.addListener('click', () => {
        infoWindow.open(googleMap.current, marker);
      });
    });
  };

  return (
    <div>
      <h2 style={{marginLeft: '75px', fontWeight: '700', fontSize: '35px'}}>
        Discover Pakistan’s Heritage
      </h2>
      <div
        ref={mapRef}
        style={{ width: '104%', height: '700px', border: '1px solid #ccc' }}
      />
      <br />
      <br />
    </div>
  );
};

export default GoogleMap;
