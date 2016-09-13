var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSImage = ReactBootstrap.Image;

//Get style
var ReviewStyle = require("../../css/reviews.css");

var ReviewUserContainer = React.createClass({

    render: function () {
        return (
            <div className="row review-user">
                <BSImage 
                        src={this.props.userImageSrc}
                        circle
                        responsive
                        title={this.props.name} />
                <p className="text-justify">{this.props.name}</p>
            </div>
        )
    }
});


var ReviewContentContainer = React.createClass({

    render: function () {
        return  (
            <div className="row review-data">
                <div className="review-data-content">
                    {this.props.content}
                </div>
                <div className="review-data-role col-xs-2">
                    <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                    {this.props.role}
                </div>
                <div className="review-data-date col-xs-10">
                    {this.props.date.toLocaleDateString("en-GB")}
                </div>
            </div>
        )
    }
});


var ReviewContainer = React.createClass({

    render: function () {
        return <div className="row review">
          <div className="col-xs-10">
              <ReviewContentContainer content={this.props.data.content} role={this.props.data.role}  date={this.props.data.date}/>
          </div>
            <div className="col-xs-2">
              <ReviewUserContainer name={this.props.user.name}  userImageSrc={this.props.user.image}/>
          </div>
        </div>
    }
});


var ReviewsView = React.createClass( {
  
  
  renderReview: function (key) {
    var review = this.props.data[key];
    return (
      <ReviewContainer key={key} data={review.data} user={review.user} />
    )
  },
  
  render: function() {
    return (
      <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
              {Object.keys(this.props.data).map(this.renderReview)}
          </div>
      </div>
    )
  }
});

module.exports = ReviewsView;