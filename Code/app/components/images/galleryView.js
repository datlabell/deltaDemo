var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var LightBox = require('react-images');
var BSImage = ReactBootstrap.Image;

var GalleryView = React.createClass({

    getInitialState: function () {
        return {
            lightBoxIsOpen: false,
            currentImage: 0
        }
    },


    renderBigImage: function(key) {
        var boundClick = this.clickImage.bind(this, key);
        return (
                <div className="row gallery-img-bg">
                    <BSImage src={this.props.images[key].src} onClick={boundClick} className="gallery-disbled-padding-left"/>
                </div>
           );  
    },

    renderSmallImage: function(key, isMostRight) {
        var boundClick = this.clickImage.bind(this, key);
        return (
                <div className="row gallery-img-sm">
                    <BSImage src={this.props.images[key].src} 
                    onClick={boundClick} className={isMostRight ? "gallery-disbled-padding-right" : ""}/>
                </div>
           );  
    },

    closeLightbox: function() {
        this.setState({lightBoxIsOpen: false});
    },

    gotoPrevLightboxImage: function() {
        
        var currentImage = this.state.currentImage;
        if (currentImage > 0) {
            this.setState({
                currentImage: currentImage - 1
            });
        }
    },

    gotoNextLightboxImage: function() {
        
        var currentImage = this.state.currentImage;
        if (currentImage < 4) {
            this.setState({
                currentImage: currentImage + 1
            });
        }
    },

    clickImage: function (index) {
        console.log("index is " + index)
        this.setState({
            currentImage: index,
            lightBoxIsOpen: true}
        );
    },

    render: function() {
        return (

            <div className="row gallery-container">
                <LightBox 
                        images={this.props.images}
                        currentImage={this.state.currentImage}
                        isOpen={this.state.lightBoxIsOpen}   
                        onClickPrev={this.gotoPrevLightboxImage}
                        onClickNext={this.gotoNextLightboxImage}
                        onClose={this.closeLightbox} 
                        showImageCount={false}
                        backdropClosesModal={true}/>

                <div className="col-xs-6">
                    {this.renderBigImage(0)}
                </div>
                <div className="col-xs-3">
                     {this.renderSmallImage(1)}
                     {this.renderSmallImage(2)}
                </div>
                <div className="col-xs-3">
                     {this.renderSmallImage(3, true)}
                     {this.renderSmallImage(4, true)}
                </div>
          </div>
        )
    }
});

module.exports = GalleryView;