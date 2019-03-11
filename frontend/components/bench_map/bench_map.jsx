import React from 'react';
import MarkerManager from '../../util/marker_manager/marker_manager';
import {withRouter} from 'react-router';

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

            let northEast = {lat: ne['lat'](), lng: ne['lng']()}
            let southWest = {lat: sw['lat'](), lng: sw['lng']()}
            let bounds = {
                bounds: {
                    "northEast": northEast,
                    "southWest": southWest
                }
            }
            // this.props.updateBounds(bounds)
            this.props.updateFilter(bounds)
            // debugger;
        })

        google.maps.event.addListener(this.map, 'click', (e) => {
            console.log(e)
            // debugger;
            let lat = e["latLng"]["lat"]()
            let lng = e["latLng"]["lng"]()
            let coords = {lat, lng}
            this._handleClick(coords);
        })
        
        
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.benches !== prevProps.benches) {
            this.MarkerManager.updateMarkers(this.props.benches);
        }
    }

    _handleClick(coords) {
        this.props.history.push({
            pathname: "benches/new",
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

    render() {
        // this ref gives us access to the map dom node
    return (
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    )
  }
}

export default withRouter(BenchMap);