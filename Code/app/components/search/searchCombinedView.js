var React = require('react')

var SearchModeSelect= require('./searchModeSelect');
var SearchMap = require('./searchMap');
var SearchProperties= require('./searchProperties');

var SearchCombinedView = React.createClass({

    getInitialState: function() {
        return {
            modes: this.props.modes,
            activeModeKey: this.props.modes.length - 1,
            modeTitle: "חלון משולב"
        }
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
                    <SearchMap properties={this.props.properties} location={this.props.location} />
                </div>
            </div>
        )
    }
});

module.exports = SearchCombinedView;

