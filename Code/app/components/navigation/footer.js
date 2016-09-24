var React = require('react');

var Regions = [
    "המרכז",
    "הצפון",
    "הדרום",
    "השרון",
    "תל אביב",
    "ירושלים"
]

var Footer = React.createClass({

    renderRegionItem: function(region) {
        return (
            <li key={region}>{region}</li>
        )    
    },

    render: function() {
        return (
            <div className="delta-footer-container container-rtl">
                <footer>
                    <div className="row footer-regions-container">
                        <ul className="footer-regions-list">
                            {Regions.map(this.renderRegionItem)}
                        </ul>
                    </div>
                    <div className="row footer-copyright-container">כל הזכויות שמורות לדלתא, 2016</div>
                </footer>
            </div>
        )
    }
});

module.exports = Footer;