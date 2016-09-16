var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSNav = ReactBootstrap.Nav;
var BSNavItem = ReactBootstrap.NavItem;


var TourFrame = React.createClass( {
  render: function() {
    return (
      <div className="row tours-frame">
          <iframe src={this.props.src}  allowFullScreen />
      </div>
    )
  }
});


var ToursNavigation = React.createClass({
    render: function() {
        return (
            <div className="row tours-navigation">
                <BSNav navbar pullRight activeKey={1}>
                    <BSNavItem eventKey={2}>
                        <span className="tours-navigation-item">וידאו</span>
                    </BSNavItem>
                    <BSNavItem eventKey={1} >
                        <span className="tours-navigation-item">סיור תלת מימדי</span>
                    </BSNavItem>
                </BSNav>
            </div>
        )
    }
});


var ToursView = React.createClass({

    getInitialState: function() {
        return {
            currentFrame: <TourFrame src={this.props.data.sources[0]} c/>
        }
    },

    render: function() {
        return (
            <div className="row" >
                <div className="col-xs-12">
                    <ToursNavigation />
                    {this.state.currentFrame}
                </div>
            </div>            
        )
    }
});

module.exports = ToursView;