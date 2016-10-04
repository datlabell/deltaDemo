var React = require('react');
var Navbar = require('./navigation/navbar');
var Footer = require('./navigation/footer');

var MainLayout = React.createClass( {
  
  render: function() {

    //Get props for the nav element.
    var isStatic = this.props.children.props.route.staticNav;
    var goBack = this.props.children.props.route.goBack;

    return (
      <div>
        <Navbar staticNav={isStatic} goBack={goBack}/>
        <div className="main-content">
            {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
});

module.exports = MainLayout;