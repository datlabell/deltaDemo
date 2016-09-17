var React = require('react');

var NavStyle = require('../../css/nav.css');
var DeltaNav = require('../navigation/nav');

var Maps = [
  {
    title: "Google Maps"
  },
  {
    title: "מפה תלת מימדית"
  }
]

var MapView = React.createClass( {

  componentDidMount: function() {
    this.map = new google.maps.Map(this.refs.map, {
        center:  this.props.data.location,
        scrollwheel: false,
        mapTypeControl: false,
        zoom: 18
    });

    this.marker = new google.maps.Marker({
        position: this.props.data.location,
        map: this.map,
        title: 'דירה'
    });
    
  },

  onSelectMap: function(key) {
    console.log("Selected map with key: " + key);
  },

  render: function() {
    return (
      <div className="row delta-map-container">
        <div className="col-xs-12">
            <DeltaNav items={Maps}  onSelect={this.onSelectMap}/>
            <div ref="map" className="delta-map"></div>
        </div>
      </div>
    )
  }
});

module.exports = MapView;