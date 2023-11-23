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
