var React = require('react');

var SinglePropertyGoogleMap = React.createClass({
   
   componentDidMount: function() {
        
        // Create map
        this.map = new google.maps.Map(this.refs.map, {
            center:  this.props.location,
            scrollwheel: false,
            mapTypeControl: false,
            zoom: 18
        });

        // Create marker
        this.marker = new google.maps.Marker({
            position: this.props.location,
            map: this.map,
            title: 'דירה'
        });
    },

   render: function() {
     return (
        <div ref="map" className="delta-map"></div>
     )
   } 
});


module.exports = SinglePropertyGoogleMap;