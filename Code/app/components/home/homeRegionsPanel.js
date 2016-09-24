var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSThumbnail = ReactBootstrap.Thumbnail;


var Regions = [
    {
        title: "תל אביב",
        src : "/images/home/tlv.jpg"
    },
    {
        title: "ירושלים",
        src : "/images/home/jerusalem.jpg"
    },
    {
        title: "חיפה",
        src : "/images/home/haifa.jpg"
    }
]


var HomeRegionPanel = React.createClass({
    
    renderRegion: function(region) {
        return (
            <div className="col-xs-4" key={region.title}>
                <BSThumbnail src={region.src} alt="" >
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