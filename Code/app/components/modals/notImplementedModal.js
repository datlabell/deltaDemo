var React = require('react');
var Modal = require('react-modal');

var ModalsStyle = require('../../css/modals.css');

var NotImplementedModalStyle =  { 
  
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
    top  : 'calc(50vh - 200px)',
    left : '30%',
    overflow  : 'auto',
    WebkitOverflowScrolling : 'touch',
    borderRadius : '4px',
    outline : 'none',
    padding : '1% 3% 0 3%',
    border: "0px",
    backgroundColor: "#f5f5f5",
    width: "40%",
    height: "200px" 
  }
};

var NotImplementedModalTitle = React.createClass({
    render: function() {
        return (
              
            <div className="row not-implemented-modal-title">
                <h3>פעולה עדיין לא נתמכת</h3>             
            </div>
        )  
    }
});


var NotImplementedModalBody = React.createClass({
    render : function() {
        return (
            <div className="row not-implemented-modal-body container-rtl">
                <p>האתר בתהליכי בנייה, ועדיין קיימות פעולות שאינן נתמכות. אנחנו עושים מאמצים רבים לתמוך בפעולות ופיצ׳רים שונים.</p>
            </div>
        )
    }
});

var NotImplementedModalFooter = React.createClass({
    render: function() {
        return (
            <div className="row not-implemented-modal-footer" >
                <div className="col-xs-9 col-xs-offset-1">
                    <img alt="Delta" src="/images/icons/delta-ico.png" />
                </div>
                <div className="col-xs-2 not-implemented-modal-footer-text">צוות דלתא</div>
            </div>
        )
    }
})



var NotImplementedModal = React.createClass({
    
    render: function() {
        return (
            <Modal isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose} style={NotImplementedModalStyle}>
                <div className="row not-implemented-modal container-rtl">
                    <div className="col-xs-12">
                        <NotImplementedModalTitle />
                        <NotImplementedModalBody />
                        <NotImplementedModalFooter />
                    </div>
                </div>
            </Modal>
        )
    }

})

module.exports = NotImplementedModal;