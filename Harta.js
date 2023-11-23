// Loop through the parsed data and create markers
results.data.forEach(function(item) {
  var WKT = item.WKT; // assuming "WKT" is the column name for latitude, longitude, and altitude information
  var name = item.name;
  var description = item.description;
  var fullid = item.full_id;
  var osmId = item.osm_id;
  var osmType = item.osm_type;
  var amenity = item.amenity;

  console.log('Parsed Data:', WKT, name, description, osmId, osmType, amenity);  // Use WKT here

  // Parse WKT to get latitude, longitude, and altitude
  var match = WKT.match(/\((-?\d+\.\d+) (-?\d+\.\d+) (-?\d+\.\d+)\)/);  // Use WKT here

  if (match) {
    var lat = parseFloat(match[2]);
    var lon = parseFloat(match[1]);
    var alt = parseFloat(match[3]);

    // Create a marker and bind a popup
    var popupContent = `<strong>${name}</strong><br>${description}<br>OSM ID: ${osmId}<br>Type: ${osmType}<br>Amenity: ${amenity}<br>Altitude: ${alt}`;
    var marker = L.marker([lat, lon, alt]).bindPopup(popupContent);
    
    // Add the marker to the array
    markers.push(marker);
  } else {
    console.error('Invalid WKT format:', WKT);
  }
});


// Assuming you have a Leaflet map instance called 'map'
const marker = L.marker([42.665648, 21.184981], {
  icon: L.icon({
    iconUrl: 'Icon/kroifoto.png',
    iconSize: [60, 60],
    iconAnchor: [15, 30],
    popupAnchor: [10, -20],
  }),
}).addTo(map);

// Custom styles for the popup content
const customPopupStyle = `
  <style>
    .custom-popup {
      width: 1000px; /* Set the desired width */
      height: 1000px; /* Set the desired height */
      background-color: #ffffff; /* Set the background color */
      border: 5px solid #000000; /* Set the border */
      padding: 10px; /* Adjust padding as needed */
    }
  </style>
`;
