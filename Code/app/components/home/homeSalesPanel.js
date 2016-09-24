var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSButton = ReactBootstrap.Button;

var HomeSalesPanel = React.createClass({

    render: function() {
        return (
            <div className="row home-sales-panel container-rtl text-center">
                <h2>מכור נכסים איתנו</h2>
                <div className="row">
                    <div className="col-xs-4 col-xs-offset-4">
                        <p>הצטרף למאגר הדירות האקסוליסיבי שלנו. שילוב של טכנלוגיות חדשניות, שירותי תיווך ומערכת שיווקית יציבה.</p>
                    </div>
                </div>
                <div className="row">
                    <BSButton className="home-btn-sales" bsSize="large">מידע נוסף</BSButton>
                </div>
            </div>
        )
    }
});


module.exports = HomeSalesPanel;