var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

var ReactBootstrap = require('react-bootstrap');
var BSFormGroup = ReactBootstrap.FormGroup;
var BSFormControl = ReactBootstrap.FormControl;
var BSImage = ReactBootstrap.Image;

var regions = [
    "המרכז",
    "הצפון",
    "הדרום",
    "השרון",
    "תל אביב",
    "ירושלים"
]


var RegionSelect = React.createClass({

    onChange: function(e) {
        this.props.onChange(e.target.value)
    },

    renderOption: function(region) {
        return (
            <option value={region} key={region}>{region}</option>
        )
    },

    render: function(){
        return (
            <BSFormGroup controlId="formControlsSelect">
                <BSFormControl componentClass="select" 
                placeholder="איזור" 
                bsClass="form-control home-region-form region-select container-rtl" 
                value = {this.props.value}
                onChange={this.onChange}
                >
                    {regions.map(this.renderOption)}
                </BSFormControl>
            </BSFormGroup>
        )
    }
})

var RegionInput = React.createClass({
    
    onChange: function(e) {
        this.props.onChange(e.target.value)
    },

    onClick: function() {
        browserHistory.push('/search');
    },

    renderSuggestion: function(suggestion) {
        return (
            <div className="home-region-suggestion" key={suggestion} onClick={this.onClick}>{suggestion}</div>
        )
    },

    render: function() {
        return (
            <BSFormGroup controlId="regionInput">

                <BSFormControl type="text" 
                    placeholder="חפש איזור, עיר, שכונה או כתובת"  
                    bsClass="form-control home-region-form container-rtl"
                    value = {this.props.value}
                    onChange={this.onChange}
                    />
                    {this.props.suggestions.map(this.renderSuggestion)}

            </BSFormGroup>
        )
    }
});


var HomeHeader = React.createClass({

    render: function() {
      return (
          <div className="home-headline">
                <h1 className="home-headline-header text-center">עזור לנו למצוא לך נכס</h1>       
                <div className="row">
                    <div className="col-xs-8">
                        <RegionInput  onChange={this.props.onInputChange} value={this.props.input} suggestions={this.props.suggestions}/>
                    </div>
                    <div className="col-xs-4">
                        <RegionSelect onChange={this.props.onRegionChange} value={this.props.region} />
                    </div>
                </div>
          </div>
      )
    }
})


var HomeHeadline = React.createClass({

    getInitialState: function() {
        return {
            region : regions[0],
            input  : "",
            suggestions: []
        }
    },

    onRegionChange: function(value) {
        
        this.setState({
            region : value
        });

        console.log(value);
    },

    onInputChange: function(value) {
        
        var suggestions = value.length > 0 ?  [ "אופציה 1", "אופציה 2", "אופציה 3"] : [];
        this.setState({
            input : value,
            suggestions : suggestions
        });
    },

    render: function() {
        return (
          <div className="row">
            <BSImage src={this.props.src} id="homeImage" responsive/>
            <HomeHeader 
                onRegionChange={this.onRegionChange} 
                onInputChange={this.onInputChange} 
                region={this.state.region}
                input={this.state.input}
                suggestions={this.state.suggestions}
                />
          </div>
        )
      }

});


module.exports = HomeHeadline;