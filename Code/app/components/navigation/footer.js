var React = require('react');

var NotImplementedModal = require('../modals/notImplementedModal'); 
var Regions = require('../data/regions');

var Footer = React.createClass({

    getInitialState: function() {
        return {
            isModalOpen: false
        }
    },

    openModal: function() {
        this.setState({
            isModalOpen: true
        })
    },

    closeModal: function() {
        this.setState({
            isModalOpen: false
        })
    },

    onClickRegion: function(e) {
        this.openModal();
    },

    renderModal: function() {
        return <NotImplementedModal  isOpen={this.state.isModalOpen} onRequestClose={this.closeModal}/>
    },

    renderRegionItem: function(region) {
        return (
            <li key={region} onClick={this.onClickRegion}>{region}</li>
        )    
    },

    render: function() {
        return (
            <div className="delta-footer-container container-rtl">
                {this.renderModal()}
                <footer>
                    <div className="row footer-regions-container">
                        <ul className="footer-regions-list">
                            {Regions.map(this.renderRegionItem)}
                        </ul>
                    </div>
                    <div className="row footer-copyright-container">כל הזכויות שמורות לדלתא, 2016</div>
                </footer>
            </div>
        )
    }
});

module.exports = Footer;