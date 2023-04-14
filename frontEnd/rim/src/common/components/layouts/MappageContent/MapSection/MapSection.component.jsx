import React from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './MapSection.module.css';

function MapSection() {
    // Temporary Token. Only could update 5000 times per month for free.
  mapboxgl.accessToken = 'pk.eyJ1Ijoia3VuYXJhIiwiYSI6ImNsZHFwM3FqaTFldGczbnRiNms0ZWhzNTAifQ.lqRFZ326eUyIkXvRPp0w5w';
  const mapContainer = React.useRef(null);

  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-73.678802, 42.730171],
      zoom: 15
    });

    const popup = new mapboxgl.Popup().setHTML('<h3>Reykjavik Roasters</h3><p>A good coffee shop</p>');

    const marker = new mapboxgl.Marker()
      .setLngLat([-73.678802, 42.730171])
      .setPopup(popup)
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div>
      <div id="map-container" ref={mapContainer} style={{ width: '100%', height: '500px' }} />
      <h1>Description of Interactive RPI Map:</h1>
      <p>This feature of RIM is meant to allow users to view internet speed statistics of different buildings around RPI's campus. 
          Each building will have a button associated with it, and when clicked or selected, it will display the statistics of that particular building. 
          By default, the statistics of the building that the user's device is currently connected to will be displayed.
          This feature provides an easy way for users to access important information about different buildings while also being able to see the building location on a campus map. 
      </p>
    </div>
  );
}

export default MapSection;


/*function App() {
    return (
        <html>
        <head>
        
        <script src='https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js'></script>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css' rel='stylesheet' />
        
        
        <title>Page Title</title>
        </head>
        <body>
        
        <div id='map' style='width: 400px; height: 300px;'></div>
        <script>
          mapboxgl.accessToken = 'pk.eyJ1Ijoia3VuYXJhIiwiYSI6ImNsZHFwM3FqaTFldGczbnRiNms0ZWhzNTAifQ.lqRFZ326eUyIkXvRPp0w5w';
          var map = new mapboxgl.Map({
              container: "map', // HTML container id
              style: 'mapbox://styles/mapbox/streets-v9', // style URL
              center: [-21.92661562, 64.14356426], // starting position as [lng, lat]
              zoom: 13
            });
            
            var popup = new mapboxgl.Popup()
            .setHTML('<h3>Reykjavik Roasters</h3><p>A good coffee shop</p>');
            
            var marker = new mapboxgl.Marker()
            .setLngLat([-21.92661562, 64.14356426])
            .setPopup(popup)
            .addTo(map);
        </script>
        
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        
        </body>
        </html>
    );
  }
  
  export default App;*/