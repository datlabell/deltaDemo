var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSImage = ReactBootstrap.Image;
var BSButton = ReactBootstrap.Button;



var Sections = [
    {
        title: "טנכלוגיות חדשניות",
        icon: "/images/icons/3d-small.png"
    },
    {
        title: "מידע מעודכן כל הזמן",
        icon:  "/images/icons/update-small.png"
    },
    {
        title: "מאגר מידע ממשלתי ומשפטי",
        icon: "/images/icons/copy-small.png"
    }, 
    {
        title: "נכסי נדל״ן אקסלוסיביים",
        icon: "/images/icons/mansion-small.png"
    }
]

var InformationSections = React.createClass({

    renderSection: function(section) {
        return  (
            <div className="col-xs-3 panel-section" key={section.title}>
                <div className="row panel-section-icon-container">
                    <BSImage src={section.icon} rounded />
                </div>
                <div className="row text-center panel-section-description">{section.title}</div>
            </div>
        )
    },

    render: function() {
        return (
            <div className="row home-information-panel-sections">
                {this.props.sections.map(this.renderSection)}
            </div>
        )
    }
});

var InformationPanel = React.createClass({

    render: function() {
        return (
            <div className="row home-information-panel container-rtl text-center">
                <h2>שילוב של מידע, טכנולוגיה ונדל״ן</h2>
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-2">
                        <InformationSections sections={Sections} />
                    </div>
                </div>
                <div className="row">
                    <BSButton className="home-btn-information" bsSize="large" onClick={this.props.notImplementedAction}>למד עוד עלינו</BSButton>
                </div>
            </div>
        )
    }

});


module.exports = InformationPanel;