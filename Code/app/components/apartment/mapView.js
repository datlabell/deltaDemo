var React = require('react');

var MapView = React.createClass( {

  componentDidMount: function() {
    this.map = new google.maps.Map(this.refs.map, {
        center: {lat: 31.778604, lng: 35.232116},
        zoom: 14
    });
  },
  render: function() {
    return (
      <div className="row delta-map-container">
        <div ref="map" className="delta-map"></div>
      </div>
    )
  }
});

module.exports = MapView;