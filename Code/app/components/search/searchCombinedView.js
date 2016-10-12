var React = require('react')

var SearchModeSelect= require('./searchModeSelect');
var SearchProperties= require('./searchProperties');

// Get google map
var SearchMap = require('./searchMap');
var MultiplePropertiesGoogleMap = require('../maps/multiplePropertiesGoogleMap');

var SearchCombinedView = React.createClass({

    getInitialState: function() {
        return {
            modes: this.props.modes,
            modeTitle: "חלון משולב",
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
            <div className="row search-view-combined">
                <div className="col-xs-5 search-properties-container">
                    <SearchModeSelect onSelectSearchMode={this.props.onSelectSearchMode} 
                                    modes={this.state.modes}
                                    value={this.state.modeTitle}
                                    selectSize={3} />
                    <SearchProperties properties={this.props.properties} propertySize={6}/>
                </div>
                <div className="col-xs-7 search-map-container">
                    <SearchMap map={this.state.map} />
                </div>
            </div>
        )
    }
});

module.exports = SearchCombinedView;

