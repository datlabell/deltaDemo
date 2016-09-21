var React = require('react');

var Sections = [
    "טנכלוגיות חדשניות",
    "מידע מעודכן כל הזמן",
    "מאגר מידע ממשלתי ומשפטי",
    "נכסי נדל״ן אקסלוסיביים"
]

var InformationSections = React.createClass({

    renderSection: function(section) {
        return <div className="col-xs-3" key={section}>{section}</div>
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
                <h1>שילוב של מידע, טכנולוגיה ונדל״ן</h1>
                <div className="col-xs-8 col-xs-offset-2">
                    <InformationSections sections={Sections} />
                </div>
            </div>
        )
    }

});


module.exports = InformationPanel;