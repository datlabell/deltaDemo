var React = require('react');


var SearchTabFilters = require('./searchTabFilters');
var SearchInput = require('./searchInput');

//Filters views
var PropertyTypeFilterView = require('./filters/propertyTypeFilterView');
var RoomsFilterView = require('./filters/roomsFilterView');
var PriceFilterView = require('./filters/priceFilterView');
var FloorsFilterView = require('./filters/floorsFilterView');
var AdvancedFilterView = require('./filters/advancedFilterView');

var filters = [
    {
        title:  "מתקדם",
        component: <AdvancedFilterView />
    },
    {
        title:  "קומה",
        component: <FloorsFilterView />
    },
    {
        title:  "מחיר",
        component: <PriceFilterView />
    },
    {
        title: "חדרים",
        component: <RoomsFilterView />
    },
    {
        title: "סוג נכס",
        component: <PropertyTypeFilterView />
    }
]

var SearchFilter = React.createClass({
    
    getInitialState: function() {
        return {
            input : this.props.suggestion,
            prevFilterKey: null,
            activeFilter: null
        }
    },

    onInputChange: function(e) {
        this.setState({
            input : e.target.value
        });
    },

    onClickFilter: function(key) {
       
        if (key === this.state.prevFilterKey) {
            
            this.setState({
                prevFilterKey: null,
                activeFilter: null
            });

            return;
        }

        this.setState({
            prevFilterKey: key,
            activeFilter: filters[key].component
        })
    },

    render: function() {
        return (
            <div>
                <div className="row search-filter">
                    <div className="col-xs-7">
                        <div className="row">
                            <SearchTabFilters filters={filters} onClickFilter={this.onClickFilter}/>
                        </div>
                    </div>
                    <div className="col-xs-5">
                        <SearchInput 
                            value={this.state.input}
                            onChange={this.onInputChange}/>
                    </div>
                </div>
                <div className="row active-filter-container">
                    {this.state.activeFilter}
                </div>
            </div>
        )
    }
});

module.exports = SearchFilter;