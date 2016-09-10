var React = require('react');

//Get document view and style 
var DocumentView = require('../common/documentView')
var DocumentStyle = require('../../css/document.css');

var TabuView = React.createClass( {

  render: function() {
    return (
      <DocumentView updateAt={this.props.data.updateAt}>
        <iframe src={this.props.data.src} className="tabu-document-container"></iframe>
      </DocumentView>
    )
  }
});

module.exports = TabuView;