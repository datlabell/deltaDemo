var RightSection = [
  {
    key : "סוג נכס",
    value : "דירה"
  },
    {
    key : "ישוב",
    value : "ירושלים"
  },
  {
    key : "רחוב",
    value : "הכרמל"
  }
];

var CenterRightSection = [
  {
    key : "מספר בית",
    value : "27"
  },
  {
    key : "מספר דירה",
    value : "1"
  },
  {
    key : "קומה",
    value : "1"
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
      src: "https://d1qehdk2pndqdq.cloudfront.net/ma_mlspin/72060346/full/57c81255e4b0b8392e0fdd1a.jpg"
    },
    {
      src: "https://d1qehdk2pndqdq.cloudfront.net/ma_mlspin/72060346/full/57c81255e4b0b8392e0fdd1b.jpg"
    },
    {
      src: "https://d1qehdk2pndqdq.cloudfront.net/ma_mlspin/72060346/full/57c81255e4b0b8392e0fdd1c.jpg"
    },
    {
      src: "https://d1qehdk2pndqdq.cloudfront.net/ma_mlspin/72060346/full/57c81255e4b0b8392e0fdd1d.jpg"
    },
    {
      src: "https://d1qehdk2pndqdq.cloudfront.net/ma_mlspin/72060346/full/57c81255e4b0b8392e0fdd1e.jpg"
    }
  ],

  "tabu": {
    src: "/tabu/example.pdf",
    updateAt: new Date(2016, 5, 3, 16, 0, 0)
  },

  "sketch": {
    src: "path to sketch",
    updateAt: new Date(2016, 1, 1, 10, 15, 30)
  },

  "buildingDoc": {
    src: "/tabu/example.pdf",
    updateAt: new Date(2016, 8, 8, 12, 32, 33)
  }
}

module.exports = ApartmentData;