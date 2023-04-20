import React from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './MapSection.module.css';

import styles from './MapSection.module.css'

function MapSection() {
    // Temporary Token. Only could update 5000 times per month for free.
  mapboxgl.accessToken = 'pk.eyJ1Ijoia3VuYXJhIiwiYSI6ImNsZHFwM3FqaTFldGczbnRiNms0ZWhzNTAifQ.lqRFZ326eUyIkXvRPp0w5w';
  const mapContainer = React.useRef(null);

  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-73.67570101928914, 42.72935756119415],
      zoom: 15,
      bearing: 15
    });
    map.setMinZoom(14);

    const popup = new mapboxgl.Popup().setHTML('<h3>Reykjavik Roasters</h3><p>A good coffee shop</p>');

    map.on('load', () => {
      map.setPaintProperty('building', 'fill-color', 
      [
        'interpolate',
        // Set the exponential rate of change to 0.5
        ['exponential', 0.5],
        ['zoom'],
        // When zoom is 15, buildings will be beige.

        // When zoom is 18 or higher, buildings will be yellow.
        1, 
        '#ffd700'
      ],
      /*{
        "type": "FeatureCollection",
        "filter": ["within", "geometry", 
          ["literal", 
            {"type": "Polygon",
              "coordinates": [[
                [-73.68605458857701,42.73195202975475],
                [-73.68642538303402,42.730726388709],
                [-73.68423769573951,42.73023612550941],
                [-73.68486804631573,42.728166082609846],
                [-73.67808250775755,42.726804174605235],
                [-73.67333633871152,42.72664074363564],
                [-73.67233519367824,42.73018165158143],
                [-73.66732946851243,42.730426783880915],
                [-73.66299119093583,42.735220292273084],
                [-73.67051831840752,42.73636414178196],
                [-73.6717048606688,42.73241504820879],
                [-73.68293993270771,42.73380406841096],
                [-73.68379275995801,42.73178861715493]
              ]]
            }
          ]]
      }*/);
    });
    
    /*const marker = new mapboxgl.Marker()
      .setLngLat([-73.678802, 42.730171])
      .setPopup(popup)
      .addTo(map);*/

    return () => map.remove();
  }, []);

  return (
    <div>
      <div id="map-container" ref={mapContainer} style={{ width: '100%', height: '500px' }} />

      <div className="webpage-content-section-container">
        <div className={`flex flow-col webpage-content-section-main-box ${styles['features-second-margin']}`}>
          <h1>Description of Interactive RPI Map:</h1>
          <p className={`margin-0   margin-bottom-10 ${styles['map-p-line-clamp']}`}>This feature of RIM is meant to allow users to view internet speed statistics of different buildings around RPI&apos;s campus. 
              Each building will have a button associated with it, and when clicked or selected, it will display the statistics of that particular building. 
              By default, the statistics of the building that the user&apos;s device is currently connected to will be displayed.
              This feature provides an easy way for users to access important information about different buildings while also being able to see the building location on a campus map. 
          </p>
        </div>
      </div>

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