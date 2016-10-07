var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSThumbnail = ReactBootstrap.Thumbnail;


var Regions = [
    {
        title: "תל אביב",
        src : "http://d122o8puwjz892.cloudfront.net/home/tlv-min.jpg"
    },
    {
        title: "ירושלים",
        src : "http://d122o8puwjz892.cloudfront.net/home/jerusalem-min.jpg"
    },
    {
        title: "חיפה",
        src : "http://d122o8puwjz892.cloudfront.net/home/haifa-min.jpg"
    }
]


var HomeRegionPanel = React.createClass({
    
    renderRegion: function(region) {
        return (
            <div className="col-xs-4" key={region.title}>
                <BSThumbnail src={region.src} alt="" onClick={this.props.notImplementedAction}>
                    <h3>{region.title}</h3>
                </BSThumbnail>
            </div>
        )
    },

    render: function() {
        return (
            <div className="row home-regions-panel container-rtl text-center">
                <h2>איזורים מבוקשים</h2>
                <div className="row regions-container">
                    {Regions.map(this.renderRegion)}
                </div>
            </div>
        )
    }

});


module.exports = HomeRegionPanel;