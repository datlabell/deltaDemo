var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSImage = ReactBootstrap.Image;

var SearchInput = React.createClass({
    
    render: function() {
        return (
            <div className="row search-input-container">
                <div className="col-xs-8 col-xs-offset-3 search-input">
                    <input 
                        type="text" 
                        placeholder="חפש איזור, עיר, שכונה או כתובת" 
                        onChange={this.props.onChange}
                        value={this.props.value}/>
                </div>
                <div className="col-xs-1 search-input-icon">
                    <BSImage src="/images/icons/search-small-white.png" />
                </div>
            </div>
        )
    }
});

module.exports = SearchInput;