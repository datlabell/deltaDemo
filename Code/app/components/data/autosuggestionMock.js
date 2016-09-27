
var mockDictionary = {
    
    "המרכז" : [
        "ראשון לציון",
        "רמת גן",
        "גבעתיים"
    ],
    
    "הצפון" : [
        "חיפה",
        "נהריה",
        "חדרה"
    ],

    "הדרום" : [
        "באר שבע",
        "אשקלון",
        "אשדוד"
    ],

    "השרון" : [
        "רעננה",
        "הרצליה",
        "נתניה"
    ],

    "תל אביב" : [
        "מרכז העיר",
        "רמת אביב",
        "הצפון הישן"
    ],

    "ירושלים" : [
        "רחביה",
        "נחלאות",
        "רוממה"
    ]
}

var AutoSuggest = {
    getSuggestions: function(region, query) {
        return mockDictionary[region];
    }
}


module.exports = AutoSuggest;