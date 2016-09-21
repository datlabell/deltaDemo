var React = require('react');
var Navbar = require('./navigation/navbar');

var MainLayout = React.createClass( {
  render: function() {
    return (
      <div>
        <Navbar transparentNav={this.props.children.props.route.transparentNav}/>
        <div className="main-content">
            {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = MainLayout;