var React = require('react')

var SearchMap = require('./searchMap');

var SearchView = React.createClass({

    render: function() {
        return (
            <div className="row search-view">
                <div className="col-xs-5 search-apartments-container">

                </div>
                <div className="col-xs-7 search-map-container">
                    <SearchMap />
                </div>
            </div>
        )
    }
});

module.exports = SearchView;

