$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "https://api.covid19api.com/summary",
    }).then(function (res) {
        console.log(res);
    });

    var $globeViz = document.querySelector("#globeViz");
    
    const world = Globe();

    world($globeViz).globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg');
    world($globeViz).bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png');


});

// const myGlobe = Globe();

// Globe({ configOptions })(<domElement>)

// myGlobe(<myDOMElement>).globeImageUrl(<imageUrl>).pointsData(<myData>);