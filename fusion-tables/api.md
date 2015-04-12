Google Fusion Tables API examples

Get Table Data
---

`GET https://www.googleapis.com/fusiontables/v2/query?sql={QUERY}&key={YOUR_API_KEY}`

`QUERY` is SQL-ish SELECT statement, e.g. `select * from {TABLE-ID}`

`TABLE-ID` is the encrypted table id from table url.

    {
     "kind": "fusiontables#sqlresponse",
     "columns": [
      "Donor",
      "Date",
      "Icon",
      "Photo URL",
      "Location",
      "Level",
      "Type"
     ],
     "rows": [
      [
       "BobK",
       "",
       "parks",
       "http://i1.kym-cdn.com/entries/icons/original/000/010/209/I_DON'T_CARE_GUY.png",
       "6.5,10.6666",
       "10",
       "tree"
      ],
      [
       "Polda",
       "",
       "",
       "",
       {
        "geometry": {
         "type": "Polygon",
         "coordinates": [
          [
           [
            10,
            6
           ],
           [
            11,
            6
           ],
           [
            11,
            7
           ],
           [
            10,
            7
           ]
          ]
         ]
        }
       },
       "1",
       "area"
      ],
      [
       "ASDASD",
       "",
       "parks",
       "https://s3.amazonaws.com/thisismyjam/i/586871186ca5abf0f3471e85d87dd699.jpg?1342887481",
       "6.551,10.72",
       "10",
       "tree"
      ],
      [
       "BobK",
       "",
       "parks",
       "http://vignette3.wikia.nocookie.net/akkadian/images/f/f3/African_tree.jpg/revision/latest?cb=20131231162014",
       "6.6,10.6666",
       "10",
       "tree"
      ]
     ]
    }
