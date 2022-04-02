import React, { useRef, useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';

export const MapInterface = () => {
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    map
      .panTo([40.737, -73.923])
      .flyTo([28.3852, -81.5639], 14, { duration: 3 });
    return () => {};
  }, [mapRef]);

  return (
    <Map ref={mapRef} center={[39.5, -98.35]} zoom={5}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
};
