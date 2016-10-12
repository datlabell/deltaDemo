var React = require('react');

// Get style
var FrameStyle = require('../../css/frames.css');

var NotImplementedFrameTitle = React.createClass({
    render: function() {
        return (
              
            <div className="row not-implemented-frame-title">
                <h3>פעולה עדיין לא נתמכת</h3>             
            </div>
        )  
    }
});


var NotImplementedFrameBody = React.createClass({
    render : function() {
        return (
            <div className="row not-implemented-frame-body container-rtl">
                <p>האתר בתהליכי בנייה, ועדיין קיימות פעולות שאינן נתמכות. אנחנו עושים מאמצים רבים לתמוך בפעולות ופיצ׳רים שונים.</p>
            </div>
        )
    }
});

var NotImplementedFrameFooter = React.createClass({
    render: function() {
        return (
            <div className="row not-implemented-frame-footer" >
                <div className="col-xs-9 col-xs-offset-1">
                    <img alt="Delta" src="/images/icons/delta-ico.png" />
                </div>
                <div className="col-xs-2 not-implemented-frame-footer-text">צוות דלתא</div>
            </div>
        )
    }
})

var NotImplementedFrame = React.createClass({

    render : function() {
        return (
            <div className="row not-implemented-frame">
                <div className="col-xs-12">
                    <NotImplementedFrameTitle />
                    <NotImplementedFrameBody />
                    <NotImplementedFrameFooter />
                </div>
            </div>
        )
    }
})

module.exports = NotImplementedFrame;