//Get react.
var React = require('react');

//Get Sidebar & Sidebar data.
var Sections = require('./data/sidebarData');
var Sidebar = require('./navigation/sidebar');

//Get apt data.
var ApartmentData = require('./data/apartmentData');

//Get apartment inner views
var TabuView = require('./apartment/tabuView');
var SketchView = require('./apartment/sketchView');
var BuildingDocView = require('./apartment/buildingDocView');
var ReviewsView = require('./apartment/reviewsView');
var OwnerNotesView = require('./apartment/ownerNotesView');
var MapView = require('./apartment/mapView');
var PicturesView = require('./apartment/picturesView');
var TourView = require('./apartment/tourView');
var VirtualizationView = require('./apartment/VirtualizationView');
var VideoView = require('./apartment/videoView');

var ApartmentSection = React.createClass({
    renderValue: function (detail) {
      return detail.shouldEmphasize ? <span className="apt-detail-emphasize">{detail.value}</span> : detail.value;
    },  
    renderDetail: function(detail) {
        return (
          <div className="row" key={detail.key}>
              <p>
                <span className="apt-detail-key">{detail.key}</span> : {this.renderValue(detail)}
              </p>
          </div>
        )
    },
    render: function() {
        return(
          <div className="col-xs-3 pull-right apt-section">
            {this.props.section.map(this.renderDetail)}
          </div>
        )  
    }
});

var ApartmentHeadline = React.createClass({ 
  render: function() {
      return(
        <div className="row apt-headline">
              <ApartmentSection section={this.props.rightSection}/>
              <ApartmentSection section={this.props.centerRightSection}/>
              <ApartmentSection section={this.props.centerLeftSection}/>
              <ApartmentSection section={this.props.leftSection}/>
        </div>
      )
  }
});

var ApartmentContentItem = React.createClass({

    render: function() {
      return (
      <div className="row">
            <a className="anchorjs-link " id={this.props.id}></a>
           <div className="col-xs-10 col-xs-offset-1">
              <div className="row apt-content-item-title">
                  <h1 className="page-header">{this.props.title}</h1>
              </div>
              <div className="row apt-content-item-body">
                  { React.createElement(this.props.component)}
              </div>
          </div>
      </div>
    )

    }
});

var ApartmentLayout = React.createClass({
  getInitialState: function() {
    return ApartmentData;
  },

  render: function() {
    console.log("apartment id : " + this.props.params.id);
    return (
        <div className="container-fluid container-rtl">
          <ApartmentHeadline rightSection={this.state.rightSection} centerRightSection={this.state.centerRightSection}
          centerLeftSection={this.state.centerLeftSection} leftSection={this.state.leftSection}/>
          <div className="row apt-content">
            <div className="col-xs-2 pull-right" data-spy="affix" data-offset-top="210">
                <Sidebar sections={Sections}/>
            </div>
            <div className="col-xs-10 apt-items-container">
                <ApartmentContentItem component={TabuView} title="טאבו" id="tabu" />
                <ApartmentContentItem component={SketchView} title="שרטוט" id="sketch" />
                <ApartmentContentItem component={BuildingDocView} title="תיק בניין" id="buildingDoc" />
                <ApartmentContentItem component={ReviewsView} title="חוות דעת גולשים" id="reviews" />
                <ApartmentContentItem component={OwnerNotesView} title="מידע מבעל הנכס" id="ownerNotes" />
                <ApartmentContentItem component={MapView} title="מפה" id="map" />
                <ApartmentContentItem component={PicturesView} title="תמונות" id="pictures" />
                <ApartmentContentItem component={TourView} title="סיור תלת מימדי"id="tour" />
                <ApartmentContentItem component={VirtualizationView} title="הדמיית תלת מימד" id="virtualization" />
                <ApartmentContentItem component={VideoView} title="וידאו" id="video" />
            </div>
          </div>
        </div>
    )
  }
});

module.exports = ApartmentLayout;