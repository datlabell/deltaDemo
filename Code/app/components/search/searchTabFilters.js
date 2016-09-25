var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSNav = ReactBootstrap.Nav;
var BSNavDropdown = ReactBootstrap.NavDropdown;

var filters = [
    "מתקדם",
    "קומה",
    "מחיר",
    "חדרים",
    "סוג נכס"
]


var SearchTabFilters = React.createClass({
    
    renderFilter: function(filter) {
        return (
            <div className="col-xs-2" key={filter}>
                <BSNavDropdown  eventKey={filter} title={filter} className="tab-filter" id={filter}>
                </BSNavDropdown>
            </div>
        )
    },
    
    render: function() {
        return (
            <div className="row search-tab-filters">
                {filters.map(this.renderFilter)}
            </div>
        )
    }
})


module.exports = SearchTabFilters;