import React, {useRef, useEffect, useState} from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp'
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker'
import "../styles/Map.css"

export default function Map() {
    mapboxgl.workerClass = MapboxWorker;
    mapboxgl.accessToken = 'pk.eyJ1IjoicmVtaS1tYXJ0aW5lYXUtZGV2IiwiYSI6ImNrbWFudnl1azF0bWUydW53Y3hhdHNiMzQifQ.3ckDixZNfgx1BkY1ZZGJqw';

    const mapContainer = useRef();
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
        return () => map.remove();
      }, []);
      
      return (
        <div>
          <div className="map-container" ref={mapContainer} />
        </div>
      )
}
