function iniciarMap(){
    var options ={
        zoom: 8,
        center: {lat:-34.5956145, lng: -58.4431949}
    }
    
    var map = new google.maps.Map(document.getElementById('map'), options);

    // var marker = new google.maps.Marker({
    //     position: {lat:-34.5956145, lng: -58.4431949},
    //     map: map
    // });

    // var infoWindow = new google.maps.InfoWindow({
    //     content: '<p></p>'
    // });

    // marker.addListener('click', function(){
    //     infoWindow.open(map, marker);
    // });

    addMarker({
        coords:{lat:-34.5956145, lng: -58.4431949},
        iconImage: 'https://img.icons8.com/office/30/null/filled-flag.png'
    });

    function addMarker(props){
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: props.iconImage
        });
    }
}