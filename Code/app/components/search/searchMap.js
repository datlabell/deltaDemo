var React = require('react');


var MockLocation = {
    lat: 32.089800, 
    lng: 34.775580
};

var SearchMap = React.createClass({
  
  componentDidMount: function() {
    this.map = new google.maps.Map(this.refs.map, {
        center:  MockLocation,
        scrollwheel: false,
        mapTypeControl: false,
        zoom: 15
    });
  },

  render: function() {
    return (
      <div className="row search-map">
        <div className="col-xs-12 search-map">
            <div ref="map" className="search-map"></div>
        </div>
      </div>
    )
  }
});

module.exports = SearchMap;