var React = require('react')


var SearchMap = require('./searchMap');
var SearchModeSelect = require('./searchModeSelect');

var SearchMapView = React.createClass({

    getInitialState: function() {
        return {
            modes: this.props.modes,
            activeModeKey: this.props.modes.length - 1,
            modeTitle: "מפה בלבד"
        }
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
                    <SearchMap properties={this.props.properties} location={this.props.location} />
                </div>
            </div>
        )
    }
});

module.exports = SearchMapView;