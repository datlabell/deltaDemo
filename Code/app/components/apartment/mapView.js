var React = require('react');

var NavStyle = require('../../css/nav.css');
var DeltaNav = require('../navigation/nav');

// Get maps
var SinglePropertyGoogleMap = require('../maps/singlePropertyGoogleMap');
var SingleProperty3DMap = require('../maps/singleProperty3DMap')

var Maps = [
  {
    title: "מפה תלת מימדית",
    component: SingleProperty3DMap
  },
  {
    title: "Google Maps",
    component: SinglePropertyGoogleMap
  }
]

var MapView = React.createClass( {

  getInitialState: function() {
    return {
      maps: Maps,
      activeMapKey: Maps.length - 1
    }
  },

  renderActiveMap : function() {
    var activeMap = this.state.maps[this.state.activeMapKey].component;
    return React.createElement(activeMap, {location: this.props.data.location})
  },

  onSelectMap: function(key) {
    
    if (key == this.state.activeMapKey) {
      return;
    }

    this.setState({
      activeMapKey: parseInt(key)
    });
  },


  render: function() {
    return (
      <div className="row delta-map-container">
        <div className="col-xs-12">
            <DeltaNav items={this.state.maps}  onSelect={this.onSelectMap}/>
            {this.renderActiveMap()}
        </div>
      </div>
    )
  }
});

module.exports = MapView;