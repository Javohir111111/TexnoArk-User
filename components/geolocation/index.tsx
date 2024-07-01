'use client';

import React, { useRef, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function GoogleMaps() {
  const MapRef = useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
          
          version: 'quarterly',
        });
        console.log('API Key:', process.env.NEXT_PUBLIC_MAPS_API_KEY);
        const { Map } = await loader.importLibrary('maps');
        
        const locationInMap = {
          lat: 41.306589,
          lng: 69.336619,
        };

        const options = {
          center: locationInMap,
          zoom: 15,
          mapId: 'NEXT_MAPS_TUTS',
        };

        new Map(MapRef.current, options);
      } catch (error) {
        console.error('Error initializing Google Map:', error);
      }
    };

    initializeMap();
  }, []);

  return (
    <div className="h-[500px]" ref={MapRef}>
      GoogleMaps
    </div>
  );
}
