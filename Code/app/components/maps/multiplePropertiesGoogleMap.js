var React = require('react');
var ReactDOM = require('react-dom');
var SearchPropertyInfoWindow = require('./searchPropertyInfoWindow');

MapClustersIconsStyles = {
  
  gridSize: 40,

  maxZoom: 15,

  styles: [
                                 
            {
              textColor: '#eee',
              textSize: 16,
              url: "/images/icons/map-cluster-40.png",
              height: 40,
              width: 40
            },
            {
              textColor: '#eee',
              textSize: 16,
              url: "/images/icons/map-cluster-44.png",
              height: 44,
              width: 44
            },
            {
              textColor: '#eee',
              textSize: 16,
              url: "/images/icons/map-cluster-48.png",
              height: 48,
              width: 48
            },
            {
              textColor: '#eee',
              textSize: 18,
              url: "/images/icons/map-cluster-56.png",
              height: 56,
              width: 56
            },
            {
              textColor: '#eee',
              textSize: 18,
              url: "/images/icons/map-cluster-64.png",
              height: 64,
              width: 64
            }
    ]
};

//Required for using react component in google map info window.
var createInfoWindow = function(property) {
  
  var infoWindowContainer = document.createElement('div');
  ReactDOM.render(<SearchPropertyInfoWindow property={property} /> , infoWindowContainer);
  return infoWindowContainer;

}

var MultiplePropertiesGoogleMap = React.createClass({

  createMap: function() {
    
    //Create map
    this.map = new google.maps.Map(this.refs.map, {
        center:  this.props.location,
        scrollwheel: false,
        mapTypeControl: false,
        zoom: 13,
        minZoom: 12
    });

    //Add zoom listener
    this.map.addListener('zoom_changed', this.onZoom);

  },

  createMarkers: function() {
    
    this.markers = this.props.properties.map(function(property) {
        
        var marker =  new google.maps.Marker({
            position: property.location,
            label: property.label,
            icon: "/images/icons/map-marker.png"
        });

        var infowindow = new google.maps.InfoWindow({
          content: createInfoWindow(property)
        });

        marker.addListener('click', function() {
          infowindow.open(this.map, marker);
        });

        return marker;
    })
  },

  componentDidMount: function() {
      
      //Create map
      this.createMap();

      //Create Markers
      this.createMarkers();

      //Create clusters
      this.markerCluster = new MarkerClusterer(this.map, this.markers, MapClustersIconsStyles);

  },

  onZoom: function() {

      //Get value of zoom
      var zoom = this.map.getZoom();
      
      //Change grid size based on zoom
      if (zoom <= 13) {
        this.markerCluster.setGridSize(50);
        return;
      }

      if (zoom == 14) {
        this.markerCluster.setGridSize(70);
        return;
      }

      //In case 15
      this.markerCluster.setGridSize(120);
      return;
      
  },


  render: function() {
    return (
        <div ref="map" className="search-map"></div>
    )
  }
});

module.exports = MultiplePropertiesGoogleMap;