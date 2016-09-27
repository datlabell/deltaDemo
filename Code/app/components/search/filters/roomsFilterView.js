var React = require('react');

var values = [
    {
        title: "+6",
        value: true
    },
    {
        title: "5",
        value: true
    },
    {
        title: "4",
        value: true
    },
    {
        title: "3",
        value: true
    },
    {
        title: "2",
        value: true
    },
    {
        title: "1",
        value: true
    }
]

var RoomsFilterView = React.createClass({
    
    renderCheckbox: function(checkbox) {
        return (
            <div className="col-xs-2 container-rtl search-filter-checkbox-container" key={checkbox.title}>
                <div className="row">
                    {checkbox.title}   
                    <input type="checkbox" />       
                </div>
            </div>
        )
    },

    render: function() {
        return (
            <div className="col-xs-3 col-xs-offset-2 rooms-filter">
                <div className="row">
                    {values.map(this.renderCheckbox)}
                </div>
            </div>
        )
    }
});

module.exports = RoomsFilterView;