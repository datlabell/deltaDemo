var React = require('react')

var SearchMap = require('./searchMap');
var SearchModeSelect = require('./searchModeSelect');

// Get google map
var MultiplePropertiesGoogleMap = require('../maps/multiplePropertiesGoogleMap');

var SearchMapView = React.createClass({

    getInitialState: function() {
        return {
            modes: this.props.modes,
            modeTitle: "מפה בלבד",
            map: this.createMap()
        }
    },

    createMap: function() {
        return (
            React.createElement(MultiplePropertiesGoogleMap, {
                location: this.props.location,
                properties: this.props.properties
            })
        )
    },

    render: function() {
        return (
            <div className="row search-view-map">
                <div className="col-xs-12">
                    <SearchModeSelect onSelectSearchMode={this.props.onSelectSearchMode} 
                                      modes={this.state.modes} 
                                      value={this.state.modeTitle}
                                      selectSize={2}/>
                </div>
                <div className="col-xs-12 search-map-container">
                    <SearchMap map={this.state.map} />
                </div>
            </div>
        )
    }
});

module.exports = SearchMapView;