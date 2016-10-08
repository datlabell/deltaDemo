var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSFormGroup = ReactBootstrap.FormGroup;
var BSFormControl = ReactBootstrap.FormControl;

var SearchModeSelect = React.createClass({
    
    onChange: function(e) {
        this.props.onSelectSearchMode(e.target.value);
    },

    renderOption: function(mode) {
        return (
            <option value={mode.title} key={mode.title}>{mode.title}</option>
        )
    },

    getSelectSize: function() {
        return "col-xs-" + this.props.selectSize + " pull-right";
    },
    
    render: function() {
        return (
            <div className="row search-mode-select">
                <div className={this.getSelectSize()}>
                    <BSFormGroup controlId="formControlsSelect">
                    <BSFormControl componentClass="select"  
                        bsClass="form-control" 
                        value = {this.props.value}
                        onChange={this.onChange}
                        >
                        
                        {this.props.modes.map(this.renderOption)}
                    </BSFormControl>
                    </BSFormGroup>
                </div>
            </div>
        )
    }
});


module.exports = SearchModeSelect;