/**
 * handlebarsjs
 */

//helpers

Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
        "+": lvalue + rvalue
    }[operator];
});

// vars

var symbols = {
    symbols: [
      {   iconid: "icon-pin",
          viewbox: "0 0 200 300",
          name: "pin",
          paths: {
              path: {
                  num: "path1",
                  data: "M100,21.78A85,85,0,0,0,15.18,106.6c0,18.85,12.08,49.52,36.76,93.9,17.48,31.36,34.7,57.49,35.47,58.6L100,278.22l12.59-19.11c0.69-1.11,18-27.25,35.47-58.6,24.76-44.38,36.76-75.06,36.76-93.9A85,85,0,0,0,100,21.78Z"
              }
          }
      },
      {   iconid: "icon-search",
          viewbox: "0 0 32 32",
          name: "search",
          paths: {
              path: {
                  num: "path1",
                  data: "M26.819 24.917c0.262 0.262 0.262 0.688 0 0.951l-0.951 0.951c-0.263 0.262-0.688 0.262-0.951 0l-6.656-6.656c-0.072-0.072-0.12-0.158-0.153-0.248-1.365 0.998-3.041 1.593-4.862 1.593-4.562 0-8.261-3.699-8.261-8.261s3.699-8.261 8.261-8.261c4.562 0 8.261 3.699 8.261 8.261 0 1.821-0.595 3.497-1.593 4.862 0.091 0.032 0.176 0.080 0.248 0.153l6.656 6.656zM13.246 7.739c-3.041 0-5.508 2.466-5.508 5.508s2.466 5.508 5.508 5.508 5.508-2.466 5.508-5.508c0-3.041-2.466-5.508-5.508-5.508z"
              }
          }
      },
      {   iconid: "icon-stack",
          viewbox: "0 0 32 32",
          name: "stack",
          paths: {
              path: {
                  num: "path1",
                  data: "M29.143 11.071l-13.143-6.571-13.143 6.571 13.143 6.571 13.143-6.571zM16 6.681l8.781 4.39-8.781 4.39-8.781-4.39 8.781-4.39zM26.51 14.684l2.633 1.316-13.143 6.571-13.143-6.571 2.633-1.316 10.51 5.255zM26.51 19.612l2.633 1.316-13.143 6.571-13.143-6.571 2.633-1.316 10.51 5.255z"
              }
          }
      },
      {   iconid: "icon-cross",
          viewbox: "0 0 24 24",
          name: "cross",
          paths: {
              path: {
                  num: "path1",
                  data: "M18.016 5.125q0.369 0 0.614 0.245t0.245 0.614q0 0.363-0.248 0.611l-5.411 5.405 5.411 5.405q0.248 0.248 0.248 0.611 0 0.369-0.245 0.614t-0.614 0.245q-0.363 0-0.611-0.248l-5.405-5.411-5.405 5.411q-0.248 0.248-0.611 0.248-0.369 0-0.614-0.245t-0.245-0.614q0-0.363 0.248-0.611l5.411-5.405-5.411-5.405q-0.248-0.248-0.248-0.611 0-0.369 0.245-0.614t0.614-0.245q0.363 0 0.611 0.248l5.405 5.411 5.405-5.411q0.248-0.248 0.611-0.248z"
              }
          }
      },
      {		iconid: "icon-angle-up",
          viewbox: "0 0 21 32",
          name: "angle-up",
          paths: {
              path: {
                  num: "path1",
                  data: "M19.196 21.143q0 0.232-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-7.018-7.018-7.018 7.018q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411z"
              }
          }
      },
      {		iconid: "icon-angle-down",
          viewbox: "0 0 21 32",
          name: "angle-down",
          paths: {
              path: {
                  num: "path1",
                  data: "M19.196 13.143q0 0.232-0.179 0.411l-8.321 8.321q-0.179 0.179-0.411 0.179t-0.411-0.179l-8.321-8.321q-0.179-0.179-0.179-0.411t0.179-0.411l0.893-0.893q0.179-0.179 0.411-0.179t0.411 0.179l7.018 7.018 7.018-7.018q0.179-0.179 0.411-0.179t0.411 0.179l0.893 0.893q0.179 0.179 0.179 0.411z"
              }
          }
      }
    ]
  };

var levels = {
    levels: [ {
          apparentlvl: 1,
          actuallvl: "3rd",
          viewbox: "0 0 1714.3 1065.3",
          svg: 'flr_03.svg',
          pins: [{
                  name: "John Ferraro Council Chambers",
                  symbol: "cross",
                  category: 2,
                  metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
                  description: "The LA Kiosk is a demo unit to test large interactive kisok technology."
          }, {
                  name: "Mayor's Help Desk",
                  symbol: "cross",
                  category: 3,
                  metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
                  description: "The LA Kiosk is a demo unit to test large interactive kisok technology."
          }, {
                  name: "Office of the Mayor",
                  symbol: "cross",
                  category: 1,
                  metaitems: "<strong>Mayor:</strong> Eric Garcetti",
                  // description: "The LA Kiosk is a demo unit to test large interactive kisok technology."
          }, {
                  name: "Office of the City Clerk",
                  symbol: "cross",
                  category: 1,
                  metaitems: "<strong>Opening Hours:</strong> 8:00AM &mdash; 4:30PM"
                  // description: "The LA Kiosk is a demo unit to test large interactive kisok technology."
          }, {
                  name: "Board of Public Works Members Offices",
                  room: "361",
                  symbol: "cross",
                  category: 1,
                  // metaitems: "<strong>Opening Hours:</strong> 8:00AM &mdash; 4:30PM"
                  // description: "The LA Kiosk is a demo unit to test large interactive kisok technology."
          }, {
                  name: "Board of Public Edward R. Roybal Session Room",
                  room: "350",
                  symbol: "cross",
                  category: 2,
                  // metaitems: "<strong>Opening Hours:</strong> 8:00AM &mdash; 4:30PM"
                  // description: "The LA Kiosk is a demo unit to test large interactive kisok technology."
          }, {
                  name: "Docent's Desk",
                  // room: "350",
                  symbol: "cross",
                  category: 3,
                  // metaitems: "<strong>Opening Hours:</strong> 8:00AM &mdash; 4:30PM"
                  // description: "The LA Kiosk is a demo unit to test large interactive kisok technology."
          }]
      }, {
        apparentlvl: 2,
        actuallvl: "4th",
        viewbox: "0 0 1706.19 1053.85",
        svg: 'flr_04.svg',
        pins: [{
              name: "1st Council District Office",
              room: "460",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Gilbert Cedillo",
              // description: ""
        }, {
              name: "2nd Council District Office",
              room: "435",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Paul Krekorian",
              // description: "Council Office of Todd Jones"
        }, {
              name: "3rd Council District Office",
              room: "415",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Bob Blumenfield",
              // description: "Council Office of Todd Jones"
        }, {
              name: "4th Council District Office",
              room: "425",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> David E. Ryu",
              // description: "Council Office of Todd Jones"
        }, {
              name: "5th Council District Office",
              room: "440",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Paul Koretz",
              // description: "Council Office of Todd Jones"
        }, {
              name: "6th Council District Office",
              room: "470",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Nury Martinez",
              // description: "Council Office of Todd Jones"
        }, {
              name: "7th Council District Office",
              room: "455",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Monica Rodriguez",
              // description: "Council Office of Todd Jones"
        }, {
              name: "8th Council District Office",
              room: "450",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Marqueece Harris-Dawson",
              // description: "Council Office of Todd Jones"
        }, {
              name: "9th Council District Office",
              room: "420",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Curren D. Price, Jr.",
              // description: "Council Office of Todd Jones"
        }, {
              name: "10th Council District Office",
              room: "430",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Herb J. Wesson, Jr.",
              // description: "Council Office of Todd Jones"
        }, {
              name: "11th Council District Office",
              room: "475",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Mike Bonin",
              // description: "Council Office of Todd Jones"
        }, {
              name: "12th Council District Office",
              room: "405",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Mitchell Englander",
              // description: "Council Office of Todd Jones"
        }, {
              name: "13th Council District Office",
              room: "480",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Mitch O'Farrell",
              // description: "Council Office of Todd Jones"
        }, {
              name: "14th Council District Office",
              room: "465",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Jose Huizar",
              // description: "Council Office of Todd Jones"
        }, {
              name: "15th Council District Office",
              room: "410",
              symbol: "cross",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Joe Buscaino",
              // description: "Council Office of Todd Jones"
        }]
      }, {
        apparentlvl: 3,
        actuallvl: "10th",
        viewbox: "0 0 1697.68 737.23",
        svg: 'flr_10.svg',
        pins: [{
              name: "Meeting Room 1005",
              room: "1005",
              symbol: "cross",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1010",
              room: "1010",
              symbol: "cross",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1020",
              room: "1020",
              symbol: "cross",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1025",
              room: "1025",
              symbol: "cross",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1030",
              room: "1030",
              symbol: "cross",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1035",
              room: "1035",
              symbol: "cross",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1040",
              room: "1040",
              symbol: "cross",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1045",
              room: "1045",
              symbol: "cross",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1050",
              room: "1050",
              symbol: "cross",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1060",
              room: "1060",
              symbol: "cross",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1070",
              room: "1070",
              symbol: "cross",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }]
      }, {
        apparentlvl: 4,
        actuallvl: "27th",
        viewbox: "0 0 1697.68 737.23",
        svg: 'flr_27.svg',
        pins: [{
              name: "Mayor Tom Bradly Room",
              room: "2601",
              symbol: "cross",
              category: 2,
              metaitems: '<video width="100%" controls><source src="video/guide_top.mp4" type="video/mp4"></source></video>',
              // description: ''
        }]
      }
    ]
  };


//symbols
var symbolsTemplate = $("#symbols").html();
var symbolsCompile = Handlebars.compile(symbolsTemplate);

$('body').prepend(symbolsCompile(symbols));

//levels
var levelsTemplate = $("#levels").html();
var levelsCompile = Handlebars.compile(levelsTemplate);

$('.mall').append(levelsCompile(levels));

// content
var contentTemplate = $("#content").html();
var contentCompile = Handlebars.compile(contentTemplate);

$('.content').prepend(contentCompile(levels));

// list items
var listTemplate = $("#list-items").html();
var listCompile = Handlebars.compile(listTemplate);

$('.list').prepend(listCompile(levels));
