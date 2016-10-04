var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var ReactBootstrap = require('react-bootstrap');
var BSThumbnail = ReactBootstrap.Thumbnail;
var BSButton = ReactBootstrap.Button;

var SearchProperty = React.createClass({

    onClick: function() {
        browserHistory.push(this.props.action);
    },

    render: function() {
        return (
            <div className="row search-property">
                <div className="col-xs-10 col-xs-offset-1">
                    <BSThumbnail src={this.props.image}>
                        <h4>{this.props.address}</h4>
                        <p className="property-price">{this.props.price}</p>
                        <div className="row extra-info">
                            <div className="col-xs-4 col-xs-offset-5">
                                <p>{this.props.rooms + " " + "חדרים"}</p>
                            </div>
                            <div className="col-xs-3">
                                <p>{this.props.size + " " + "מ״ר"}</p>
                            </div>
                        </div>
                        <p>
                            <BSButton className="search-proprty-btn" onClick={this.onClick}>הצג</BSButton>
                        </p>
                    </BSThumbnail>
                </div>
            </div>
        )
    }
})


var SearchProperties = React.createClass({
    
    constructClickAction: function(type, id) {
        return "/" + type +  "/" + id;
    },

    renderProperty: function(property) {
        var action = this.constructClickAction(property.type, property.id);
        return (
            <div className="col-xs-6 search-property-container" key={property.id}>
                <SearchProperty action={action} address={property.location.address} 
                    image={property.image}  price={property.price} rooms={property.rooms} 
                    size={property.size}/>
            </div>
        )
    },
    
    render: function() {
        return (
            <div className="row search-properties">
                {this.props.properties.map(this.renderProperty)}
            </div>
        )
    }
});

module.exports = SearchProperties;