var React = require('react');
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

    renderOption: function(region) {
        return (
            <option value="select" key={region}>{region}</option>
        )
    },

    render: function(){
        return (
            <BSFormGroup controlId="formControlsSelect">
                <BSFormControl componentClass="select" placeholder="איזור" bsClass="form-control home-region-form region-select container-rtl" >
                    {regions.map(this.renderOption)}
                </BSFormControl>
            </BSFormGroup>
        )
    }
})

var RegionInput = React.createClass({
    
    render: function() {
        return (
            <BSFormGroup controlId="regionInput">
                <BSFormControl type="text" placeholder="חפש איזור, עיר, שכונה או כתובת"  bsClass="form-control home-region-form container-rtl"/>
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
                        <RegionInput />
                    </div>
                    <div className="col-xs-4">
                        <RegionSelect />
                    </div>
                </div>
          </div>
      )
    }
})


var HomeHeadline = React.createClass({

    onRegionChange: function(val) {
        console.log(val);
    },


    render: function() {
        return (
          <div className="row">
            <BSImage src={this.props.src} id="homeImage" responsive/>
            <HomeHeader />
          </div>
        )
      }

});


module.exports = HomeHeadline;