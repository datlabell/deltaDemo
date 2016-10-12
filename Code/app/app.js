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
var AppCss = require('./css/app.css');

//Get main layout
var MainLayout = require('./components/mainLayout');

//Get layouts
var HomeLayout = require('./components/homeLayout');
var SearchLayout = require('./components/searchLayout');
var ApartmentLayout = require('./components/apartmentLayout');

//Get search inner views
var SearchCombinedView = require('./components/search/searchCombinedView');
var SearchPropertiesView = require('./components/search/searchPropertiesView');
var SearchMapView = require('./components/search/searchMapView');
var SearchMap3DView = require('./components/search/searchMap3DView');

//Routing
ReactDOM.render((
  <Router history={BrowserHistory}>
    <Route path="/" component={MainLayout}>
        <IndexRoute component={HomeLayout}  staticNav/>
        <Route path="home" component={HomeLayout} staticNav></Route>
        <Route path="search/:region/:suggestion" component={SearchLayout} staticNav>
          <IndexRoute component={SearchCombinedView} />
          <Route path="combined" component={SearchCombinedView}></Route>
          <Route path="map" component={SearchMapView}></Route>
          <Route path="map3D" component={SearchMap3DView}></Route>
          <Route path="properties" component={SearchPropertiesView}></Route>
        </Route>
        <Route path="apartment/:id" component={ApartmentLayout} goBack></Route>
    </Route>
  </Router>
), document.getElementById('main'))