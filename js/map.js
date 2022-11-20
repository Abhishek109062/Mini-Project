function initMap(){
    // map options
    var options = {
        zoom:4,
        //india lat and lng
        center: {lat: 20.593683, lng: 78.962883}
    };
    // new map 
    var map = new google.maps.Map(document.getElementById("map"),options); 

    // listen for click on map 
     google.maps.event.addListener(map,'click', 
     function(event){
        //add anywhere marker
        addMarker({coords: event.latLng });
     });

     /*
    // add marker
    var marker = new google.maps.Marker({
        position: {lat: 28.704060, lng: 77.102493},
        map: map,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<h1>my country</h1>'
    })

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    })
    */

    // array of markers
    var markers = [
        {
            coords:{lat: 28.704060, lng: 77.102493},
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h3>INDIA</h3>'
        },
        {coords:{lat: 23.704060, lng: 71.102493}},
        {coords:{lat: 24.704060, lng: 75.102493}}

    ];
    // loop through markers
    for(var i=0;i<markers.length;i++){
        addMarker(markers[i]);
    }

    
    //add marker function
    function addMarker(props){
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            // icon: props.iconImage
        });
        //check for custom icon
        if(props.iconImage){
            // set icon image
            marker.setIcon(props.iconImage );
        }
        //check content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            })
        
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            })
        }
    }

}

// function initMap(){
    // var location = {lat: 28.704060, lng: 77.102493};
    // var map = new google.maps.Map(document.getElementById("map"), {
    //     zoom: 4,
    //     center: location
    // });
    // var marker = new google.maps.Marker({
    //     position: location,
    //     map: map
    // });
// }