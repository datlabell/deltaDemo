var React = require('react');

var SingleProperty3DMap = React.createClass({
    
    render: function() {
        return (
            <div className="delta-map">
                <iframe src="http://simplex-mapping.ccc-cloud.com/Jerusalem_Example/app/#%2F" className="delta-map" allowFullScreen />
            </div>
        )
    }

});

module.exports = SingleProperty3DMap;