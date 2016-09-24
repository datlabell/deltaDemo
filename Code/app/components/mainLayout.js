var React = require('react');
var Navbar = require('./navigation/navbar');
var Footer = require('./navigation/footer');

var MainLayout = React.createClass( {
  render: function() {
    return (
      <div>
        <Navbar staticNav={this.props.children.props.route.staticNav}/>
        <div className="main-content">
            {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
});

module.exports = MainLayout;