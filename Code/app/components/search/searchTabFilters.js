var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSNav = ReactBootstrap.Nav;
var BSNavDropdown = ReactBootstrap.NavDropdown;



var SearchTabFilters = React.createClass({
    
    onClickFilter: function(filterKey) {
        this.props.onClickFilter(filterKey);
    },

    renderFilter: function(filterKey) {
        var filterTitle = this.props.filters[filterKey].title;
        return (
            <div className="col-xs-2" key={filterKey}>
                <div className="tab-filter" id={filterTitle} onClick={this.onClickFilter.bind(this, filterKey)}>
                    {filterTitle}
                    <span className="caret" />
                </div>
            </div>
        )
    },
    
    render: function() {
        return (
            <div className="row search-tab-filters">
                {Object.keys(this.props.filters).map(this.renderFilter)}
            </div>
        )
    }
})


module.exports = SearchTabFilters;