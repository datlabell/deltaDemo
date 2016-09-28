var React = require('react');

var PriceInputView = React.createClass({
    
    validateNumber: function(event) {
        console.log("Validating number");
        return event.charCode >= 48 && event.charCode <= 57;
    },

    render: function() {
        return (
            <div className="col-xs-5 price-filter-input">
                <input type="text" placeholder={this.props.placeholder} onChange={this.props.onChange} onKeyPress={this.validateNumber} /> 
            </div>
        )
    }
})

var PriceFilterView = React.createClass({
    
    getInitialState: function() {
        return {
            minPrice: 0,
            maxPrice: 10000000
        }
    },

    onMinPriceChange: function(e) {
        console.log("Min price change. value: " + e.target.value);
    },
    
    onMaxPriceChange: function(e) {
        console.log("Max price change. value: " + e.target.value);
    },

    render: function() {
        return (
            <div className="col-xs-3 col-xs-offset-2  price-filter">
                <div className="row">
                    <PriceInputView placeholder="מחיר מקסימלי" onChange={this.onMaxPriceChange}/>
                    <div className="col-xs-2 price-filter-label">עד</div> 
                    <PriceInputView placeholder="מחיר מינימלי" onChange={this.onMinPriceChange}/>
                </div>
            </div>
        )
    }
});

module.exports = PriceFilterView;