var React = require('react');

var values = [
    {
        title: "דירה",
        value: true
    },
    {
        title: "פרטי",
        value: true
    },
    {
        title: "יחידת דיור",
        value: true
    },
    {
        title: "דו משפחתי",
        value: true
    },
    {
        title: "בניין מגורים",
        value: true
    },
    {
        title: "סטודיו",
        value: true
    },
    {
        title: "לופט",
        value: true
    },
    {
        title: "פנטהאוז",
        value: true
    },
    {
        title: "דירת גן",
        value: true
    }
]



var ProperyTypeFilterView = React.createClass({
    
    renderCheckbox: function(checkbox) {
        return (
            <div className="col-xs-4 container-rtl search-filter-checkbox-container" key={checkbox.title}>
                <div className="row">
                    <div className="col-xs-6">
                        <input type="checkbox" />
                    </div>
                    <div className="col-xs-6">
                        {checkbox.title}
                    </div>             
                </div>
            </div>
        )
    },

    render: function() {
        return (

            <div className="col-xs-5 col-xs-offset-1 proprty-type-filter">
                <div className="row">
                    {values.map(this.renderCheckbox)}
                </div>
            </div>
        )
    }
});

module.exports = ProperyTypeFilterView;