var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var ReactBootstrap = require('react-bootstrap');
var BSThumbnail = ReactBootstrap.Thumbnail;
var BSButton = ReactBootstrap.Button;

var SearchPropery = React.createClass({

    onClick: function() {
        browserHistory.push(this.props.action);
    },

    render: function() {
        return (
            <div className="row search-property">
                <div className="col-xs-10 col-xs-offset-1">
                    <BSThumbnail src={this.props.image}>
                        <h4>{this.props.address}</h4>
                        <p className="propery-price">{this.props.price}</p>
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
                <SearchPropery action={action} address={property.location.address} 
                    image={property.image}  price={property.price}/>
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