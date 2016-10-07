var React = require('react');

//Get home style
var HomeStyle = require('../css/home.css');


var HomeHeadline = require('./home/homeHeadline');
var HomeSalesPanel = require('./home/homeSalesPanel');
var HomeRegionsPanel = require('./home/homeRegionsPanel');
var HomeInformationPanel = require('./home/homeInformationPanel');

var NotImplementedModal = require('./modals/notImplementedModal');


var HomeLayout = React.createClass( {
  
    getInitialState: function () {
        return {
            isNotImplementedModalOpen: false
        }
    },

    openNotImplementedModal: function() {
        this.setState({isNotImplementedModalOpen: true});
    },

    closeNotImplementedModal: function() {
        this.setState({isNotImplementedModalOpen: false});
    },

    renderNotImplementedModal: function() {
        return <NotImplementedModal  isOpen={this.state.isNotImplementedModalOpen} onRequestClose={this.closeNotImplementedModal}/>
    },

    render: function() {
      return (
          <div className="row">
            {this.renderNotImplementedModal()}
            <div className="col-xs-12">
                <HomeHeadline src="http://d122o8puwjz892.cloudfront.net/home/3dcity1-min.jpg" />
                <HomeSalesPanel notImplementedAction={this.openNotImplementedModal}/>
                <HomeRegionsPanel notImplementedAction={this.openNotImplementedModal}/>
                <HomeInformationPanel notImplementedAction={this.openNotImplementedModal} />
            </div>
          </div>
      )
  }
});

module.exports = HomeLayout;