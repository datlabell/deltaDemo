//Required react modules
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var BrowserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var IndexRedirect = ReactRouter.IndexRedirect;

//Add app styling to all routing
var BootstrapCss = require('./css/bootstrap.min.css');
var AppCss = require('./css/app.css');

//Get main layout
var MainLayout = require('./components/mainLayout');

//Get layouts
var HomeLayout = require('./components/homeLayout');
var MapLayout = require('./components/mapLayout');
var SearchLayout = require('./components/searchLayout');
var ApartmentLayout = require('./components/apartmentLayout');


//Routing
ReactDOM.render((
  <Router history={BrowserHistory}>
    <Route path="/" component={MainLayout}>
        <IndexRoute component={HomeLayout} />
        <Route path="home" component={HomeLayout}></Route>
        <Route path="map" component={MapLayout}></Route>
        <Route path="search" component={SearchLayout}></Route>
        <Route path="apartment/:id" component={ApartmentLayout}></Route>
        <Route path="apartment/:id" component={ApartmentLayout}></Route>
    </Route>
  </Router>
), document.getElementById('main'))