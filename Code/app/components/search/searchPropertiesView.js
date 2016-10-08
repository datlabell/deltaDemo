var React = require('react')


var SearchProperties= require('./searchProperties');
var SearchModeSelect = require('./searchModeSelect');

var SearchPropertiesView = React.createClass({

    getInitialState: function() {
        return {
            modes: this.props.modes,
            activeModeKey: this.props.modes.length - 1,
            modeTitle: "נכסים בלבד"
        }
    },

    render: function() {
        return (
            <div className="row search-view-properties">
                <div className="col-xs-12 search-properties-container">
                    <SearchModeSelect onSelectSearchMode={this.props.onSelectSearchMode} 
                                        modes={this.state.modes} 
                                        value={this.state.modeTitle}
                                        selectSize={2}/>
                    <SearchProperties properties={this.props.properties} propertySize={3}/>
                </div>
            </div>
        )
    }
});

module.exports = SearchPropertiesView;