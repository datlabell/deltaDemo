var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSNav = ReactBootstrap.Nav;
var BSNavItem = ReactBootstrap.NavItem;

var Nav = React.createClass({
    
    getInitialState: function() {
        return {
            activeKey: (this.props.items.length - 1).toString()
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
                <span className="delta-nav-item">{this.props.items[key].title}</span>
            </BSNavItem>
        )
    },
    
    
    render: function() {
        return (
            <div className="row delta-nav">
                <BSNav navbar pullRight activeKey={this.state.activeKey} onSelect={this.onSelect}>
                    {Object.keys(this.props.items).map(this.renderNavigationItem)}
                </BSNav>
            </div>
        )
    }
});


module.exports = Nav;