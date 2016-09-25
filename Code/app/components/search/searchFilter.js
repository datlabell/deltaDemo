var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSImage = ReactBootstrap.Image;

var SearchTabFilters = require('./searchTabFilters');


var SearchInput = React.createClass({
    
    render: function() {
        return (
            <div className="row search-input-container">
                <div className="col-xs-8 col-xs-offset-3 search-input">
                    <input type="text" placeholder="חפש איזור, עיר, שכונה או כתובת" />
                </div>
                <div className="col-xs-1 search-input-icon">
                    <BSImage src="/images/icons/search-small-white.png" />
                </div>
            </div>
        )
    }
});

var SearchFilter = React.createClass({
    render: function() {
        return (
            <div className="row search-filter">
                <div className="col-xs-7">
                    <SearchTabFilters />
                </div>
                <div className="col-xs-5">
                    <SearchInput value={this.props.value}/>
                </div>
            </div>
        )
    }
});

module.exports = SearchFilter;