

async function initMap() {


    let occcCord = {lat: 35.3880, lng: -97.5699};

    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: occcCord,
        mapTypeId: "satellite"
    });

    new google.maps.Marker({
        position: occcCord,
        map: map,
        Animation: google.maps.Animation.DROP,
        draggable: true
    });

}