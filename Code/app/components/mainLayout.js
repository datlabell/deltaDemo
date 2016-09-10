var React = require('react');
var Navbar = require('./navigation/navbar');

var MainLayout = React.createClass( {
  render: function() {
    return (
      <div>
        <Navbar />
        <div className="main-content">
            {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = MainLayout;