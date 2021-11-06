/* eslint-disable */

console.log('hello from the client side');
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ2VzdGFwZyIsImEiOiJja3ZucDAydGgxYWI3MnBrbHA3NnlwemUwIn0.iGLh8rhFbjwtW3fpCGsr8A';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/gestapg/ckvnqfhoj4yzr15nziu4bh6hn',
  scrollZoom: false
  // center: [-118.22529693740044, 34.1015864026696],
  // zoom: 10,
  // interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Create Marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add Marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({
    offset: 30
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extend map bounds to include current locations
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 70,
    left: 100,
    right: 100
  }
});
