var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSButtonToolbar = ReactBootstrap.ButtonToolbar;
var BSButton = ReactBootstrap.Button;
var BSImage = ReactBootstrap.Image;

var DeltaModal = require('../modals/deltaModal');
var NotImplementedModal = require('../modals/notImplementedModal');


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

    openOrderModal: function() {
        this.setState({isOrderModalOpen: true});
    },

    closeOrderModal: function() {
        this.setState({isOrderModalOpen: false});
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

    renderModals: function() {
        return (
            <div>
                <DeltaModal isOpen={this.state.isDocumentModalOpen} onRequestClose={this.closeDocumentModal}>
                    {
                        this.props.data.documentType === "pdf" ?  
                        this.createIframe(this.props.data.src) : this.createJpg(this.props.data.src)
                    }
                </DeltaModal>
                <NotImplementedModal  isOpen={this.state.isOrderModalOpen} onRequestClose={this.closeOrderModal}/>
            </div>
        )
    },

    render: function() {
        return (
        <div className="row">
            {this.renderModals()}
            <div className="col-xs-4">
                <BSButtonToolbar>            
                    <BSButton className="document-btn-order" onClick={this.openOrderModal}>הזמן מסמך חדש</BSButton>
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