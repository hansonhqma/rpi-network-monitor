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