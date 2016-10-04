//Get react.
var React = require('react');

//Get main apartment style
var ApartmentStyle = require('../css/apartment.css');

//Get Galery
var GalleryStyle = require('../css/gallery.css');
var GalleryView = require('./images/galleryView');

//Get apartment headline
var ApartmentHeadline = require('./apartment/apartmentHeadline');

//Get Sidebar
var SidebarStyle = require('../css/sidebar.css');
var Sidebar = require('./navigation/sidebar');

//Get inner views
var Views = require('./apartment/apartmentViews');


//Get apt data.
var ApartmentData = require('./data/apartmentData');

var ApartmentViewContainer = React.createClass({

    render: function() {
      return (
      <div className="row">
           <div className="col-xs-11 col-xs-offset-1">
              <div className="row"><a className="anchor" id={this.props.id}></a></div>
              <div className="row apt-content-item-title">
                  <h1 className="page-header">
                     <span className={this.props.glyphiconStyle} aria-hidden="true"></span>
                    {this.props.title}
                  </h1>
              </div>
              <div className="row apt-content-item-body">
                <div className="col-xs-12">
                    { React.createElement(this.props.component, {data: this.props.data})}
                </div>
              </div>
          </div>
      </div>
    )

    }
});

var ApartmentLayout = React.createClass({
  
  getInitialState: function() {
    return {
      sections: this.generateSections(Views),
      data : ApartmentData 
    };
  },

  componentDidMount: function() {
    
    //Adding affix plugin to side dynamically.
    $('.sidebar-container').affix({
      offset: {
        top: 550
      }
    });

  },

  generateSections: function(views) {
    var sections = {};
    views.forEach(function(view) {
      
      if (sections[view.section] === undefined) {
        sections[view.section] = [];
      }

      var link = {
        title: view.title
      }

      if (view.id !== undefined) {
        link.href = "#" + view.id;
      }

      sections[view.section].push(link);

    });

    return sections;
  },

  renderContentView: function(view) {
      if (view.component !== undefined) {
        return <ApartmentViewContainer 
         component={view.component}
         id={view.id} 
         title={view.title}
         key={view.id}
         data={this.state.data[view.id]}
         glyphiconStyle = {view.glyphiconStyle}/>
      }
  },

  render: function() {
    return (
        <div className="container-fluid container-rtl">
          <GalleryView images={this.state.data.images} />
          <ApartmentHeadline rightSection={this.state.data.rightSection} centerRightSection={this.state.data.centerRightSection}
          centerLeftSection={this.state.data.centerLeftSection} leftSection={this.state.data.leftSection}/>

          <div className="row apt-content">
            <div className="col-xs-2 pull-right sidebar-container" data-spy="affix" data-offset-top="550">
                <Sidebar sections={this.state.sections}/>
            </div>
            <div className="col-xs-10 apt-items-container">
                {Views.map(this.renderContentView)}
            </div>
          </div>
        </div>
    )
  }
});

module.exports = ApartmentLayout;