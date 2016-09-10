var React = require('react');

//Get document view and style 
var DocumentView = require('../common/documentView')
var DocumentStyle = require('../../css/document.css');

var SketchView = React.createClass( {
  render: function() {
    return (
      <DocumentView updateAt={this.props.data.updateAt} file={this.props.data.src} />
    )
  }
});

module.exports = SketchView;