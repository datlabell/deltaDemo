var React = require('react');
var Modal = require('react-modal');

var DeltaModalStyle =  { 
  
  overlay : {
    position : 'fixed',
    top  : 0,
    left : 0,
    right : 0,
    bottom : 0,
    backgroundColor : "rgba(0, 0, 0, 0.8)",
    zIndex: "1031"
  },

  content : {
    position : 'absolute',
    top  : '40px',
    left : '10%',
    overflow  : 'auto',
    WebkitOverflowScrolling : 'touch',
    borderRadius : '4px',
    outline : 'none',
    padding : '0px',
    border: "0px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "80%",
    height: "730px" 
  }
};


var DeltaModal = React.createClass({
    
    render: function() {
        return (
            <Modal isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose} style={DeltaModalStyle}>
                {this.props.children}
            </Modal>
        )
    }

})

module.exports = DeltaModal;