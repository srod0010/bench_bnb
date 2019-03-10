import React from 'react';

class BenchMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }
    render() {
        // this ref gives us access to the map dom node
    return (
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    )
  }
}

export default BenchMap;