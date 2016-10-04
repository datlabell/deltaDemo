var React = require('react')


var SearchMap = require('./searchMap');
var SearchProperties= require('./searchProperties');
var SearchModeNav = require('../navigation/nav');

var modes = [
    {
        title: "נכסים בלבד"
    },
    {
        title: "מפה בלבד"
    },
    {
        title: "חלון משולב"
    }
]


var SearchView = React.createClass({

    getInitialState: function() {
        return {
            modes: modes,
            activeModeKey: modes.length - 1
        }
    },

    onSelectSearchMode: function(key) {
        console.log("Search mode selected: " + this.state.modes[key].title)
    },

    render: function() {
        return (
            <div className="row search-view">
                <div className="col-xs-5 search-properties-container">
                    <SearchModeNav onSelect={this.onSelectSearchMode} items={this.state.modes}/>
                    <SearchProperties properties={this.props.properties}/>
                </div>
                <div className="col-xs-7 search-map-container">
                    <SearchMap properties={this.props.properties} location={this.props.location} />
                </div>
            </div>
        )
    }
});

module.exports = SearchView;

