var React = require('react');

//Add style
var ReviewStyle = require("../../css/ownerNotes.css");

var FeaturesView = React.createClass({

      renderSpanCheck: function(isChecked) {
          return isChecked ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove";
      },

      renderFeature: function(feature) {
          return (
            <div className="col-xs-4 owner-notes-feature" key={feature.title}>
                <div className="row">
                      <div className="col-xs-2 col-xs-offset-5 feature-check">
                           <span className={this.renderSpanCheck(feature.enabled)} aria-hidden="true"></span>
                      </div>
                      <div className="col-xs-5 feature-title">
                            <span className={feature.glyphiconStyle} aria-hidden="true"></span>
                            {feature.title}
                      </div>
                </div>
            </div>
          )
      },

      render: function() {
          return (
             <div className="row owner-notes-features">
                {this.props.features.map(this.renderFeature)}
            </div>
          )
      }
});

var DescriptionsView = React.createClass({

      renderDescription: function(description) {
          return (
            <div className="col-xs-6 owner-notes-description" key={description.title}>
                <div className="row description-title">
                    <h3>
                        {description.title}
                    </h3>
                </div>
                <div className="row description-text">
                      {description.text}
                </div>
            </div>
          )
      },

      render: function() {
         return (
            <div className="row owner-notes-descriptions">
              <div className="col-xs-11 col-xs-offset-1">
                  <div className="row">
                        {this.props.descriptions.map(this.renderDescription)}
                  </div>
              </div>
          </div>
         ) 
      }

});


var OwnerNotesView = React.createClass( {
  render: function() {
    return (
      <div className="row">
          <div className="col-xs-12">
                <FeaturesView features={this.props.data.features} />
                <DescriptionsView descriptions={this.props.data.descriptions} />
          </div>
      </div>
    )
  }
});

module.exports = OwnerNotesView;