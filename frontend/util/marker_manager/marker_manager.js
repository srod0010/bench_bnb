class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        const benchesObj = {};
        benches.forEach(bench => benchesObj[bench.id] = bench);

        //create a marker for each bench that is in updated benches
        benches
            .filter(bench => !this.markers[bench.id])
            .forEach(newBench => this.createMarkerFromBench(newBench))

        // if markers has any benches that are not in update benches remove them from this.Markers
        Object.keys(benchesObj)
            .forEach(id => {
                // debugger;
                if (!this.markers[id]) {
                    return this.removeMarker(id)
                }
            })

       
    }

    createMarkerFromBench(bench) {
        const position = new google.maps.LatLng(bench.lat, bench.lng)
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            benchId: bench.id,
            title: bench.description

        })
        this.markers[marker.benchId] = marker;
    }

    removeMarker(id) {
        delete this.markers[id]
    }
}

export default MarkerManager;