var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

//Get required component
var SearchFilter = require('./search/searchFilter');

//Get search style. 
var SearchStyle = require('../css/search.css');


// Data
var MockLocation = {
    lat: 32.089800, 
    lng: 34.775580
};


var Properties = [
    {
        id: 1,
        type: "apartment",
        image: "https://d1qehdk2pndqdq.cloudfront.net/fl_miamire/A10144306/full/57d7f49ee4b066768aa21212.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 32.089835,
            lng: 34.775697
        },

        label: "צפון ישן",
        price: "1,500,000",
        size: 100,
        rooms: 5
    }, 
    {
        id:2,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/229f976667eb01bf2f034eacb822ccaeb9c3dbd5/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 32.091685,
            lng: 34.778336
        },

        label: "צפון ישן",
        price: "1,500,000",
        size: 100,
        rooms: 5
    }, 
    {
        id:3,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/31a27a9590d02548b1ac4a844636df0fc961d6c8/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 32.093383,
            lng: 34.779245
        },

        label: "צפון ישן",
        price: "1,500,000",
        size: 100,
        rooms: 5
    }, 
    {
        id:4,
        type: "apartment",
        image: "http:////d2787ndpv5cwhz.cloudfront.net/aa4a7a07da052854aaff0f84feb31737a3083c8e/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 32.093705,
            lng: 34.774402
        },

        label: "צפון ישן",
        price: "1,500,000",
        size: 100,
        rooms: 5
    },
    {
        id:5,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/1226022b710cbc7a6c37efb3ec5ae8401d41b636/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 32.077944,
            lng: 34.771303
        },

        label: "מרכז העיר",
        price: "1,500,000",
        size: 100,
        rooms: 5
    }, 
    {
        id:6,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/44b00c5de9889a89ed125af9bc20d67f176c8c32/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 32.081184,
            lng: 34.772399
        },

        label: "מרכז העיר",
        price: "1,500,000",
        size: 100,
        rooms: 5
    }, 
    {
        id:7,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/7081c20cff83ce5fc50f841caa586abaaa17e00b/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 32.079189,
            lng: 34.769347
        },

        label: "מרכז העיר",
        price: "1,500,000",
        size: 100,
        rooms: 5
    }, 
    {
        id:8,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/2636f720fea40f9ed5c02c2cadaed773dee74fc6/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 32.088141,
            lng: 34.788971
        },

        label: "כיכר המדינה",
        price: "1,500,000",
        size: 100,
        rooms: 5
    }, 
    {
        id:9,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/8106cad0225bbf360227eebc5bd86457da86f1b0/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 32.085696,
            lng: 34.788425
        },

        label: "כיכר המדינה",
        price: "1,500,000",
        size: 100,
        rooms: 5
    },
    {
        id:10,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/cf69911c91979b0221e0a4d5315c685c369cd44a/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 32.085332,
            lng: 34.790893
        },

        label: "כיכר המדינה",
        price: "1,500,000",
        size: 100,
        rooms: 5
    }
];

var SearchLayout = React.createClass( {
  
 getInitialState: function() {
     return {
         region: this.props.params.region,
         suggestion: this.props.params.suggestion,
         location: MockLocation,
         properties: Properties,
         modes: this.buildModes(this.props.params.region, this.props.params.suggestion)
     };
 },

 buildModes: function(region, suggestion) {
     
     return [
        
        {
            title: "חלון משולב",
            action: this.buildFullActionPath(region, suggestion, "combined")
        },

        {
            title: "נכסים בלבד",
            action: this.buildFullActionPath(region, suggestion, "properties")
        }, 

        {
            title: "מפה בלבד",
            action: this.buildFullActionPath(region, suggestion, "map")
        },
        {
            title: "מפה תלת מימד",
            action: this.buildFullActionPath(region, suggestion, "map3D")
        }
     ]
 },

buildFullActionPath: function(region, suggestion, action) {

     return "/search"  + "/" + region + "/" + suggestion + "/" + action;
 },


 getActionFromModeTitle: function(modeTitle) {
     
     for (var i = 0; i < this.state.modes.length; i++) {
         if (this.state.modes[i].title === modeTitle) {
             return this.state.modes[i].action;
         }
     }
 },

 onSelectSearchMode: function(modeTitle) {
     var action = this.getActionFromModeTitle(modeTitle);
     browserHistory.push(action);
 },


render: function() {
    return (
      <div className="row container-rtl search-layout">
          <SearchFilter region={this.state.region} suggestion={this.state.suggestion} />
          {React.cloneElement(this.props.children, {
              region: this.state.region,
              suggestion : this.state.suggestion,
              location: this.state.location,
              properties: this.state.properties,
              modes: this.state.modes,
              onSelectSearchMode: this.onSelectSearchMode
          })}
      </div>
    )
  }
});

module.exports = SearchLayout;