var React = require('react');

var ReactBootstrap = require('react-bootstrap');
var BSNavbar = ReactBootstrap.Navbar;
var BSNav = ReactBootstrap.Nav;
var BSNavItem = ReactBootstrap.NavItem;

var Navbar = React.createClass( {
  
  getNavClass: function() {
    return this.props.transparentNav ? "delta-navbar delta-navbar-transparent" : "delta-navbar";
  },
  
  render: function() {
    return (
      <BSNavbar fixedTop className={this.getNavClass()}>
        <BSNavbar.Header>
            <BSNavbar.Brand>
                <a href="/home" id="delta-brand">Delta Project</a>
            </BSNavbar.Brand>
        </BSNavbar.Header>
        <BSNav pullRight className="delta-navbar-nav">
            <BSNavItem eventKey={1} href="/home">
                <span>דירות למכירה</span>
            </BSNavItem>
        </BSNav>
      </BSNavbar>
    )
  }
});

module.exports = Navbar;