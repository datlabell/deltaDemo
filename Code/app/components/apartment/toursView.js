var React = require('react');

var NotImplementedFrame = require('../frames/notImplementedFrame');

var NavStyle = require('../../css/nav.css');
var DeltaNav = require('../navigation/nav');


var TourFrame = React.createClass( {
  
  renderNotImplementedFrame: function() {
      return (
          <div className="row tours-frame">
                <NotImplementedFrame />
          </div>
      )
  },

  renderFrame: function() {
      return (
        <div className="row tours-frame">
          <iframe src={this.props.src}  allowFullScreen />
        </div>
      )
  },
  
  render: function() {
    return (
      this.props.src === undefined ? this.renderNotImplementedFrame() : this.renderFrame()
    )
  }

});


var ToursView = React.createClass({

    getInitialState: function() {
        var lastFrame = this.props.data.sources.length - 1;
        return {
            currentFrame: <TourFrame src={this.props.data.sources[lastFrame].src} />
        }
    },

    setCurrentFrame: function(key) {
        this.setState({
            currentFrame: <TourFrame src={this.props.data.sources[key].src} />
        })
    },

    render: function() {
        return (
            <div className="row" >
                <div className="col-xs-12">
                    <DeltaNav  items={this.props.data.sources} onSelect={this.setCurrentFrame}/>
                    {this.state.currentFrame}
                </div>
            </div>            
        )
    }
});

module.exports = ToursView;