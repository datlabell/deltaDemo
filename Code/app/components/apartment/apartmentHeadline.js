var React = require('react');

var Section = React.createClass({
    renderValue: function (detail) {
      return detail.shouldEmphasize ? <span className="apt-detail-emphasize">{detail.value}</span> : detail.value;
    },  
    renderDetail: function(detail) {
        return (
          <div className="row" key={detail.key}>
              <p>
                <span className="apt-detail-key">{detail.key}</span> : {this.renderValue(detail)}
              </p>
          </div>
        )
    },
    render: function() {
        return(
          <div className="col-xs-3 pull-right apt-section">
            {this.props.section.map(this.renderDetail)}
          </div>
        )  
    }
});

var ApartmentHeadline = React.createClass({ 
  render: function() {
      return(
        <div className="row apt-headline">
              <Section section={this.props.rightSection}/>
              <Section section={this.props.centerRightSection}/>
              <Section section={this.props.centerLeftSection}/>
              <Section section={this.props.leftSection}/>
        </div>
      )
  }
});

module.exports = ApartmentHeadline;