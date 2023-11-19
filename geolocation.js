//Create map and circle based on user location
function initMap(latitude, longitude) {
    //list of users and their respective locations
    let usermap = {
        User1: {
            center: {lat: latitude, lng: longitude}
        }
      };
        // Create the map
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 13,
          center: { lat: 45.5019, lng: -73.5674 },
          mapTypeId: "terrain",
        });
      
        // Construct the circle for each value in usermap.
        for (const user in usermap) {
            // Add the circle for this user to the map.
            const cityCircle = new google.maps.Circle({
              strokeColor: "#FF0000",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#FF0000",
              fillOpacity: 0.35,
              map,
              center: usermap[user].center,
              radius: 250
            });
        }
      }

/// Check if geolocation is supported by the browser
let latitude = 0
let longitude = 0
function get_lat_and_long(lat, lng) {
    return lat, lng
}
if ("geolocation" in navigator) {
    // Prompt user for permission to access their location
    function success(pos) {
        let crd = pos.coords;
      
        console.log(`Latitude: ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        // latitude = crd.latitude
        // longitude = crd.log
        //get_lat_and_long(crd.latitude, crd.longitude)

        initMap(crd.latitude, crd.longitude);
      }
      //User denied availability of location
      function error(err) {
        console.warn("Error getting user location:", error);
      }
      
    navigator.geolocation.getCurrentPosition(success, error);
    console.log(`Latitude: ${latitude}, longitude: ${longitude}`);

  } 
  else {
    // Geolocation is not supported by the browser
    console.error("Geolocation is not supported by this browser.");
  }