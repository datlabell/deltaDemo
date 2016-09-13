var React = require('react');
var Modal = require('react-modal');
var ModalStyle = require('./documentModalStyle');
var ReactBootstrap = require('react-bootstrap');
var BSButtonToolbar = ReactBootstrap.ButtonToolbar;
var BSButton = ReactBootstrap.Button;
var BSImage = ReactBootstrap.Image;



var DocumentView = React.createClass({
    
    getInitialState: function () {
        return {
            isOrderModalOpen: false,
            isDocumentModalOpen: false
        }
    },

    openDocumentModal: function() {
        this.setState({isDocumentModalOpen: true});
    },

    closeDocumentModal: function() {
        this.setState({isDocumentModalOpen: false});
    },

    createIframe: function(src) {
        return (
            <iframe src={this.props.data.src} className="document-content-container"></iframe>
        )
    },

    createJpg: function(src) {
        return (
           <div className="document-content-container">
                <BSImage src={src} />
           </div>
        )
    },

    renderModal: function() {
        return (
            <div>
                <Modal isOpen={this.state.isDocumentModalOpen} onRequestClose={this.closeDocumentModal} style={ModalStyle}>
                    {
                        this.props.data.documentType === "pdf" ?  
                        this.createIframe(this.props.data.src) : this.createJpg(this.props.data.src)
                    }
                </Modal>
            </div>
        )
    },

    render: function() {
        return (
        <div className="row">
            {this.renderModal()}
            <div className="col-xs-4">
                <BSButtonToolbar>            
                    <BSButton className="document-btn-order">הזמן מסמך חדש</BSButton>
                    <BSButton className="document-btn-info" onClick={this.openDocumentModal}>הצג מסמך</BSButton>
                </BSButtonToolbar>
            </div>
            <div className="col-xs-8">
                <div className="row">
                    <div className="col-xs-4 col-xs-offset-5">
                        <p className="document-date-val">
                        {this.props.data.updateAt.toLocaleDateString("en-GB")}
                        </p>
                    </div>
                    <div className="col-xs-3">
                        <p className="title-primary document-date-title">
                        תאריך עדכון אחרון
                        <span className="document-date-seperator">:</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
  }
})

module.exports = DocumentView;