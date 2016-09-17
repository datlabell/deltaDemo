var RightSection = [
  {
    key : "סוג נכס",
    value : "דירה"
  },
    {
    key : "ישוב",
    value : "תל אביב"
  },
  {
    key : "רחוב",
    value : "דיזנגוף"
  }
];

var CenterRightSection = [
  {
    key : "מספר בית",
    value : "236"
  },
  {
    key : "מספר דירה",
    value : "7"
  },
  {
    key : "קומה",
    value : "3"
  },
  {
    key : "חדרים",
    value : "5"
  }
];

var CenterLeftSection = [
   {
    key : "גוש",
    value : "גוש א"
  },
  {
    key : "חלקה",
    value : "חלקה ב"
  },
  {
    key : "גודל מ״ר",
    value : "100"
  }
];

var LeftSection = [
  {
    key : "תיאור",
    value : "דירה חדשה מקבלן. שני שירותים, סלון גדול וממש מגניב"
  },
  {
    shouldEmphasize : true,
    key : "מחיר",
    value : "1,500,000"
  }
];

var ApartmentData = {
  rightSection : RightSection,
  centerRightSection : CenterRightSection,
  centerLeftSection: CenterLeftSection,
  leftSection : LeftSection,
  images: [
    {
      src: "https://d1qehdk2pndqdq.cloudfront.net/fl_miamire/A10144306/full/57d7f49ee4b066768aa21212.jpg"
    },
    {
      src: "https://d1qehdk2pndqdq.cloudfront.net/fl_miamire/A10144306/full/57d7f49ee4b066768aa21214.jpg"
    },
    {
      src: "https://d1qehdk2pndqdq.cloudfront.net/fl_miamire/A10144306/full/57d7f49ee4b066768aa21215.jpg"
    },
    {
      src: "https://d1qehdk2pndqdq.cloudfront.net/fl_miamire/A10144306/full/57d7f49ee4b066768aa21216.jpg"
    },
    {
      src: "https://d1qehdk2pndqdq.cloudfront.net/fl_miamire/A10144306/full/57d7f49ee4b066768aa21213.jpg"
    }
  ],

  "tabu": {
    src: "/tabu/example.pdf",
    updateAt: new Date(2016, 5, 3, 16, 0, 0),
    documentType: "pdf"
  },

  "sketch": {
    src: "/sketch/example.jpg",
    updateAt: new Date(2016, 1, 1, 10, 15, 30),
    documentType: "jpg"
  },

  "buildingDoc": {
    src: "/tabu/example.pdf",
    updateAt: new Date(2016, 8, 8, 12, 32, 33),
    documentType: "pdf"
  },

  "reviews" : [

    {
      user: {

         name: "אוריאל",
         image: "https://a2.muscache.com/im/pictures/22d765a1-1d26-48b8-9ad0-693b017f7ddf.jpg?aki_policy=profile_x_medium"

      },

      data: {
          content: "שכונה יפה, דירה מאוד נוחה הילדים אהבו",
          role: "דייר קודם",
          date: new Date(2016, 8, 8)
      },
    },
    {
      user: {

         name: "עומרי",
         image: "https://a2.muscache.com/im/pictures/4d8de509-e990-445a-ae58-b51feba8c5f8.jpg?aki_policy=profile_x_medium"

      },

      data: {
          content: "דירה מעולה, אחלה בעלים",
          role: "דייר קודם",
          date: new Date(2016, 3, 2)
      }
    },

    {
       user:  {
         name: "אסף",
         image: "https://a2.muscache.com/im/pictures/29afd4a8-fbc4-4651-a297-e1f8184d9421.jpg?aki_policy=profile_x_medium"
       },

       data: {
          content: "דירה על הכיפאק. גרתי שם שנתיים והיה פיצוץ",
          role: "דייר קודם",
          date: new Date(2016, 11, 25)
       }
    }
  ],

  "ownerNotes": {
      
      features: [
          {
              title: "מיזוג",
              glyphiconStyle: "",
              enabled: true
          },
          {
              title: "מעלית",
              glyphiconStyle: "",
              enabled: true
          },
          {
              title: "מרפסת",
              glyphiconStyle: "",
              enabled: true
          },
          {
              title: "סורגים",
              glyphiconStyle: "",
              enabled: false
          },
          {
              title: "מרפסת שמש",
              glyphiconStyle: "",
              enabled: true
          },
                    {
              title: "חניה",
              glyphiconStyle: "",
              enabled: true
          },
          {
              title: "ממ״ד",
              glyphiconStyle: "",
              enabled: false
          },
          {
              title: "מחסן",
              glyphiconStyle: "",
              enabled: false
          },
          {
              title: "משופצת",
              glyphiconStyle: "",
              enabled: true
          }
      ],

      descriptions: [
          {
              title: "ריהוט",
              text: "מקרר, מכונת כביסה, מייבש מדיח, תנור וגז."
          },
          {
              title: "תיאור",
              text: "דירה שופצה לפני כשלוש שנים במצב מעולה. שכונה ממש טובה."
          }
      ]
  },

  "map" : {
    location: {
        lat: 32.089800, 
        lng: 34.775580
    }
  },

  "tours": {
    sources: [
      {
        title: "וידאו",
        src: "https://www.youtube.com/embed/FNAnRp7X33I"
      },
      {
        title: "סיור תלת מימדי",
        src: "https://my.matterport.com/show/?m=aSx1MpRRqif"
      }
    ]
  }

}

module.exports = ApartmentData;