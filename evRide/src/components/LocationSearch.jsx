import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};
const center = {
  lat: 28.6139, // Default: New Delhi
  lng: 77.2090,
};

const LocationSearch = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [originRef, setOriginRef] = useState(null);
  const [destinationRef, setDestinationRef] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_API_KEY_HERE', // replace with your API key
    libraries,
  });

  const handleOriginPlace = () => {
    const place = originRef.getPlace();
    setOrigin(place.formatted_address);
  };

  const handleDestinationPlace = () => {
    const place = destinationRef.getPlace();
    setDestination(place.formatted_address);
  };

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search Route</h2>
      
      <div className="mb-4">
        <Autocomplete
          onLoad={(ref) => setOriginRef(ref)}
          onPlaceChanged={handleOriginPlace}
        >
          <input
            type="text"
            placeholder="Enter Source"
            className="w-full px-4 py-2 border rounded"
          />
        </Autocomplete>
      </div>

      <div className="mb-4">
        <Autocomplete
          onLoad={(ref) => setDestinationRef(ref)}
          onPlaceChanged={handleDestinationPlace}
        >
          <input
            type="text"
            placeholder="Enter Destination"
            className="w-full px-4 py-2 border rounded"
          />
        </Autocomplete>
      </div>

      <div className="mb-6">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
        />
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <p><strong>From:</strong> {origin || 'Not selected'}</p>
        <p><strong>To:</strong> {destination || 'Not selected'}</p>
      </div>
    </div>
  );
};

export default LocationSearch;
