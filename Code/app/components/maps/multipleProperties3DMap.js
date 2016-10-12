var React = require('react');

var MultipleProperties3DMap = React.createClass({
    
    render: function() {
        return (
            <div className="search-map">
                <iframe src="http://simplex-mapping.ccc-cloud.com/Jerusalem_Example/app/#%2F" className="search-map" allowFullScreen />
            </div>
        )
    }

});

module.exports = MultipleProperties3DMap;