var React = require('react');


var SearchPropertyExtraInfo = React.createClass({
    render: function() {
        return (
            <div className="row extra-info">
                <div className="col-xs-6 size-info">
                    <p>{this.props.size + " " + "מ״ר"}</p>
                </div>
                <div className="col-xs-6 rooms-info">
                    <p>{this.props.rooms + " " + "חדרים"}</p>
                </div>
            </div>
        )
    }
})

module.exports = SearchPropertyExtraInfo;