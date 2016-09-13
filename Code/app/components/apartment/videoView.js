var React = require('react');

var VideoView = React.createClass( {
  render: function() {
    return (
      <div className="apt-video">
          <iframe src={this.props.data.src}  allowFullScreen />
      </div>
    )
  }
});

module.exports = VideoView;