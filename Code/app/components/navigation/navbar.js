var React = require('react');
var ReactRouter= require('react-router');
var browserHistory = ReactRouter.browserHistory;

var ReactBootstrap = require('react-bootstrap');
var BSNavbar = ReactBootstrap.Navbar;
var BSNav = ReactBootstrap.Nav;
var BSNavItem = ReactBootstrap.NavItem;
var BSImage = ReactBootstrap.Image;
var BSButton = ReactBootstrap.Button;

var BackButton = React.createClass({

    onClick: function() {
        browserHistory.goBack();
    },

    render: function() {
      return (
        <BSButton className="nav-back-btn" onClick={this.onClick}>
          חזרה
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </BSButton>
      )
    }
})

var Navbar = React.createClass( {
  
  getNavClass: function() {
    return this.props.staticNav ? "delta-navbar delta-navbar-static" : "delta-navbar";
  },

  getNavBrandImage: function() {
    return  "/images/icons/delta-ico.png";
  },

  renderBackButtonIfRequired: function() {
      return this.props.goBack ?  <BSNavItem eventKey={0}><BackButton /></BSNavItem> : "";
  },
  
  render: function() {

    return (
      <BSNavbar fixedTop className={this.getNavClass()}>
        <BSNavbar.Header>
            <BSNavbar.Brand>
                <a href="/home" id="delta-brand">
                  <span><BSImage alt="Delta" src={this.getNavBrandImage()} /></span>
                  <span id="delta-brand-text">Delta Project</span>
                </a>
            </BSNavbar.Brand>
        </BSNavbar.Header>
        <BSNav pullRight className="delta-navbar-nav">
            <BSNavItem eventKey={1} href="/home">
                <span>דירות למכירה</span>
            </BSNavItem>
            {this.renderBackButtonIfRequired()}
        </BSNav>
      </BSNavbar>
    )
  }
});

module.exports = Navbar;