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
                <div className="tab-filter" id={filter}>
                    {filter}
                    <span className="caret" />
                </div>
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