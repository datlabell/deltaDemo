var React = require('react');

//Get document view and style 
var DocumentView = require('../common/documentView')
var DocumentStyle = require('../../css/document.css');

var BuildingDocView = React.createClass( {
  render: function() {
    return (
      <DocumentView updateAt={this.props.data.updateAt} file={this.props.data.src}>
            <iframe src={this.props.data.src} className="buildingDoc-document-container"></iframe>
      </DocumentView>
    )
  }
});

module.exports = BuildingDocView;