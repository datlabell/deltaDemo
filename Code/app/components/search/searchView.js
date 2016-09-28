var React = require('react')


var SearchMap = require('./searchMap');
var SearchProperties= require('./searchProperties');
var SearchModeNav = require('../navigation/nav');

var modes = [
    {
        title: "נכסים בלבד"
    },
    {
        title: "מפה בלבד"
    },
    {
        title: "חלון משולב"
    }
]

var properties = [
    {
        id: 1,
        type: "apartment",
        image: "https://d1qehdk2pndqdq.cloudfront.net/fl_miamire/A10144306/full/57d7f49ee4b066768aa21212.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 0,
            long: 0
        },

        price: "1,500,000"
    }, 
    {
        id:2,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/229f976667eb01bf2f034eacb822ccaeb9c3dbd5/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 0,
            long: 0
        },

        price: "1,500,000"
    }, 
    {
        id:3,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/31a27a9590d02548b1ac4a844636df0fc961d6c8/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 0,
            long: 0
        },

        price: "1,500,000"
    }, 
    {
        id:4,
        type: "apartment",
        image: "http:////d2787ndpv5cwhz.cloudfront.net/aa4a7a07da052854aaff0f84feb31737a3083c8e/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 0,
            long: 0
        },

        price: "1,500,000"
    },
    {
        id:5,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/1226022b710cbc7a6c37efb3ec5ae8401d41b636/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 0,
            long: 0
        },

        price: "1,500,000"
    }, 
    {
        id:6,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/44b00c5de9889a89ed125af9bc20d67f176c8c32/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 0,
            long: 0
        },

        price: "1,500,000"
    }, 
    {
        id:7,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/7081c20cff83ce5fc50f841caa586abaaa17e00b/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 0,
            long: 0
        },

        price: "1,500,000"
    }, 
    {
        id:8,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/2636f720fea40f9ed5c02c2cadaed773dee74fc6/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 0,
            long: 0
        },

        price: "1,500,000"
    }, 
    {
        id:9,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/8106cad0225bbf360227eebc5bd86457da86f1b0/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 0,
            long: 0
        },

        price: "1,500,000"
    },
    {
        id:10,
        type: "apartment",
        image: "http://d2787ndpv5cwhz.cloudfront.net/cf69911c91979b0221e0a4d5315c685c369cd44a/640x480.jpg",
        location: {
            address: "דיזינגוף 236",
            lat: 0,
            long: 0
        },

        price: "1,500,000"
    }
]

var SearchView = React.createClass({

    getInitialState: function() {
        return {
            modes: modes,
            activeModeKey: modes.length - 1
        }
    },

    onSelectSearchMode: function(key) {
        console.log("Search mode selected: " + this.state.modes[key].title)
    },

    render: function() {
        return (
            <div className="row search-view">
                <div className="col-xs-5 search-properties-container">
                    <SearchModeNav onSelect={this.onSelectSearchMode} items={this.state.modes}/>
                    <SearchProperties properties={properties}/>
                </div>
                <div className="col-xs-7 search-map-container">
                    <SearchMap />
                </div>
            </div>
        )
    }
});

module.exports = SearchView;

