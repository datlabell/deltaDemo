var React = require('react');

//Get apartment views
var DocumentStyle = require('../../css/document.css');
var DocumentView = require('./documentView');

var ReviewsStyle = require('../../css/reviews.css')
var ReviewsView = require('./reviewsView');

var OwnerNotesStyle = require('../../css/ownerNotes.css')
var OwnerNotesView = require('./ownerNotesView');

var MapView = require('./mapView');

var ToursStyle = require('../../css/tours.css')
var ToursView = require('./toursView');

var VirtualizationView = require('./VirtualizationView');

var ApartmentViews = [
    {
        section: "מידע ממשלתי",
        title: "טאבו",
        id: "tabu",
        component: DocumentView,
        glyphiconStyle: "glyphicon glyphicon-file"
    },
    {
        section: "מידע ממשלתי",
        title: "שרטוט",
        id: "sketch",
        component: DocumentView,
        glyphiconStyle: "glyphicon glyphicon-duplicate"
    },
    {
        section: "מידע ממשלתי",
        title: "מידע מרשות המסים"
    },
    {
        section: "מידע משפטי",
        title: "רשימת תביעות על הנכס"
    },
    {
        section: "מידע עירוני",
        title: "תיק בניין",
        id: "buildingDoc",
        component: DocumentView,
        glyphiconStyle: "glyphicon glyphicon-folder-open"
    },
    {
        section: "מידע עירוני",
        title: "היטל השבחה",
    },
    {
        section: "מידע עירוני",
        title: "תכניות על הנכס",
    },
    {
        section: "מידע חברתי",
        title: "חוות דעת גולשים",
        id: "reviews",
        component: ReviewsView,
        glyphiconStyle: "glyphicon glyphicon-comment"
    },
    {
        section: "מידע חברתי",
        title: "מידע מבעל הנכס",
        id: "ownerNotes",
        component: OwnerNotesView,
        glyphiconStyle: "glyphicon glyphicon-info-sign"
    },
    {
        section: "מידע ויזואלי",
        title: "מפה",
        id: "map",
        component: MapView,
        glyphiconStyle: "glyphicon glyphicon-map-marker"
    },
    {
        section: "מידע ויזואלי",
        title: "סיור",
        id: "tours",
        component: ToursView,
        glyphiconStyle: "glyphicon glyphicon-facetime-video"
    }
]

module.exports = ApartmentViews;