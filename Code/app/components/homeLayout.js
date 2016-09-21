var React = require('react');

//Get home style
var HomeStyle = require('../css/home.css');


//Mock for displaying different options for home image 
var imageDictionary = {
  "3dcity" : "/images/home/3dcity.jpg",
  "3dapt" : "/images/home/3dapt.jpg",
  "jerusalem1" : "/images/home/jerusalem1.jpg",
  "jerusalem2" : "/images/home/jersualem2.jpg",
  "family" : "/images/home/family.jpg",
  "tlv" : "/images/home/tlv.jpg"
}


var HomeHeadline = require('./home/homeHeadline');
var HomeInformationPanel = require('./home/homeInformationPanel');


var HomeLayout = React.createClass( {
  
  render: function() {
    return (
        <div className="row">
          <div className="col-xs-12">
              <HomeHeadline src="/images/home/3dcity.jpg" />
              <HomeInformationPanel />
          </div>
        </div>
    )
  }
});

module.exports = HomeLayout;