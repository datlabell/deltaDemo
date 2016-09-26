var React = require('react');

//Get home style
var HomeStyle = require('../css/home.css');


var HomeHeadline = require('./home/homeHeadline');
var HomeSalesPanel = require('./home/homeSalesPanel');
var HomeRegionsPanel = require('./home/homeRegionsPanel');
var HomeInformationPanel = require('./home/homeInformationPanel');



var HomeLayout = React.createClass( {
  
  render: function() {
    return (
        <div className="row">
          <div className="col-xs-12">
              <HomeHeadline src="http://d122o8puwjz892.cloudfront.net/home/3dcity1-min.jpg" />
              <HomeSalesPanel />
              <HomeRegionsPanel />
              <HomeInformationPanel />
          </div>
        </div>
    )
  }
});

module.exports = HomeLayout;