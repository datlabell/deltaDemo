var React = require('react')

var SearchMap = require('./searchMap');
var SearchModeSelect = require('./searchModeSelect');

// Get map
var MultipleProperties3DMap = require('../maps/multipleProperties3DMap');

var SearchMap3DView = React.createClass({

    getInitialState: function() {
        return {
            modes: this.props.modes,
            modeTitle: "מפה תלת מימד",
            map: this.createMap()
        }
    },

    createMap: function() {
        return (
            React.createElement(MultipleProperties3DMap, {
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

module.exports = SearchMap3DView;