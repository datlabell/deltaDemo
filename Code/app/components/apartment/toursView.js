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
    
    getInitialState: function() {
        return {
            activeKey: (this.props.sources.length - 1).toString()
        }
    },

    onSelect: function(key) {
        this.setState({
            activeKey: key
        });

        this.props.onSelect(key);
    },

    renderNavigationItem: function(key) {
        return (
            <BSNavItem eventKey={key} key={key}>
                <span className="tours-navigation-item">{this.props.sources[key].title}</span>
            </BSNavItem>
        )
    },
    
    
    render: function() {
        return (
            <div className="row tours-navigation">
                <BSNav navbar pullRight activeKey={this.state.activeKey} onSelect={this.onSelect}>
                    {Object.keys(this.props.sources).map(this.renderNavigationItem)}
                </BSNav>
            </div>
        )
    }
});


var ToursView = React.createClass({

    getInitialState: function() {
        var lastFrame = this.props.data.sources.length - 1;
        return {
            currentFrame: <TourFrame src={this.props.data.sources[lastFrame].src} />
        }
    },

    setCurrentFrame: function(key) {
        this.setState({
            currentFrame: <TourFrame src={this.props.data.sources[key].src} />
        })
    },

    render: function() {
        return (
            <div className="row" >
                <div className="col-xs-12">
                    <ToursNavigation  sources={this.props.data.sources} onSelect={this.setCurrentFrame}/>
                    {this.state.currentFrame}
                </div>
            </div>            
        )
    }
});

module.exports = ToursView;