var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSFormControl = ReactBootstrap.FormControl;

var selectOptions = [
    "קרקע",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8+"
]


var FloorSelectView = React.createClass({
    
    renderOption: function(option) {
        return <option value={option} key={option}>{option}</option>
    },

    render: function() {
        return (
            <div className="col-xs-5">
                <BSFormControl componentClass="select" bsClass="form-control floor-filter-select container-rtl" 
                               value = {this.props.value} onChange={this.props.onChange}>

                    {selectOptions.map(this.renderOption)}

                </BSFormControl>
            </div>
        )
    }
});

var FloorsFilterView = React.createClass({
    
    getInitialState: function() {
        return {
            minFloor: "קרקע",
            maxFloor: "8+"
        }
    },

    onMinFloorChange: function(value) {
        console.log("Min floor change. Value: " + value);
        this.setState({
            minFloor: value
        })
    },

    onMaxFloorChange: function(value) {
        console.log("Max floor change. Value: " + value);
        this.setState({
            maxFloor: value
        })
    },
    
    render: function() {
        return (
            
            <div className="col-xs-3 col-xs-offset-1 floors-filter">
                <div className="row">
                    <FloorSelectView value={this.state.maxFloor} onChange={this.onMaxFloorChange}/>
                    <div className="col-xs-2 floors-filter-label">עד</div> 
                    <FloorSelectView value={this.state.minFloor} onChange={this.onMinFloorChange}/>
                </div>
            </div>
        )
    }
});

module.exports = FloorsFilterView;