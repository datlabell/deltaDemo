var React = require('react');

var SearchMap = React.createClass({

  render: function() {
    return (
      <div className="row search-map">
        <div className="col-xs-12 search-map">
            {this.props.map}
        </div>
      </div>
    )
  }
});

module.exports = SearchMap;