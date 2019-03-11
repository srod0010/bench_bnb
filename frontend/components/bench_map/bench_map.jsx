import React from 'react';
import MarkerManager from '../../util/marker_manager/marker_manager';

class BenchMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches);
       
        google.maps.event.addListener(this.map, 'idle', () => {
            let LatLng = this.map.getBounds();
            let ne = LatLng.getNorthEast();
            let sw = LatLng.getSouthWest();

            let northeast = {lat: ne['lat'](), lng: ne['lng']()}
            let southwest = {lat: sw['lat'](), lng: sw['lng']()}
            let bounds = {
                bounds: {
                    "northEast": northeast,
                    "southWest": southwest
                }
            }
            // debugger;
        })
        
        
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.benches !== prevProps.benches) {
            this.MarkerManager.updateMarkers(this.props.benches);
        }
    }

    render() {
        // this ref gives us access to the map dom node
    return (
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    )
  }
}

export default BenchMap;