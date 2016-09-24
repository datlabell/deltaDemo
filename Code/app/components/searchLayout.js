var React = require('react');

var SearchFilter = require('./search/searchFilter');
var SearchView = require('./search/searchView');

//Get search style. 
var SearchStyle = require('../css/search.css');

var SearchLayout = React.createClass( {
  
  render: function() {
    return (
      <div className="row container-rtl">
          <SearchFilter />
          <SearchView />
      </div>
    )
  }
});

module.exports = SearchLayout;