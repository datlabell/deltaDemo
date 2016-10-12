var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var ReactBootstrap = require('react-bootstrap');
var BSImage = ReactBootstrap.Image;
var BSButton = ReactBootstrap.Button;

var SearchPropertyExtraInfo = require('./searchPropertyExtraInfo');

var SearchPropertyInfoWindow = React.createClass({
    
    onClick: function() {
        var actionPath = "/" + this.props.property.type + "/" + this.props.property.id;
        browserHistory.push(actionPath);
    },

    render: function() {
        return (
           <div className="row search-property-info-window container-rtl">
                <div className="col-xs-7 image-container">
                    <BSImage src={this.props.property.image} onClick={this.onClick}/>
                </div>
                <div className="col-xs-5 details-container">
                    <div className="row address-container">
                        {this.props.property.location.address}
                    </div>
                    <div className="row price-container">
                        {this.props.property.price}
                    </div>
                    <SearchPropertyExtraInfo size={this.props.property.size} 
                                            rooms={this.props.property.rooms} />
                    <div className="row action-container">
                        <BSButton className="action-btn" onClick={this.onClick}>הצג</BSButton>
                    </div>
                </div>
           </div>
        )
    }
});

module.exports = SearchPropertyInfoWindow;