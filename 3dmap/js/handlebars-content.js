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
      {
          iconid: "icon-pin",
          viewbox: "0 0 200 300",
          name: "pin",
          elements: "<path class='path1' d='M100,21.78A85,85,0,0,0,15.18,106.6c0,18.85,12.08,49.52,36.76,93.9,17.48,31.36,34.7,57.49,35.47,58.6L100,278.22l12.59-19.11c0.69-1.11,18-27.25,35.47-58.6,24.76-44.38,36.76-75.06,36.76-93.9A85,85,0,0,0,100,21.78Z' />"
      }, {
          iconid: "icon-search",
          viewbox: "0 0 32 32",
          name: "search",
          elements: "<path class='path1' d='M26.819 24.917c0.262 0.262 0.262 0.688 0 0.951l-0.951 0.951c-0.263 0.262-0.688 0.262-0.951 0l-6.656-6.656c-0.072-0.072-0.12-0.158-0.153-0.248-1.365 0.998-3.041 1.593-4.862 1.593-4.562 0-8.261-3.699-8.261-8.261s3.699-8.261 8.261-8.261c4.562 0 8.261 3.699 8.261 8.261 0 1.821-0.595 3.497-1.593 4.862 0.091 0.032 0.176 0.080 0.248 0.153l6.656 6.656zM13.246 7.739c-3.041 0-5.508 2.466-5.508 5.508s2.466 5.508 5.508 5.508 5.508-2.466 5.508-5.508c0-3.041-2.466-5.508-5.508-5.508z' />"
      }, {
          iconid: "icon-stack",
          viewbox: "0 0 32 32",
          name: "stack",
          elements: "<path class='path1' d='M29.143 11.071l-13.143-6.571-13.143 6.571 13.143 6.571 13.143-6.571zM16 6.681l8.781 4.39-8.781 4.39-8.781-4.39 8.781-4.39zM26.51 14.684l2.633 1.316-13.143 6.571-13.143-6.571 2.633-1.316 10.51 5.255zM26.51 19.612l2.633 1.316-13.143 6.571-13.143-6.571 2.633-1.316 10.51 5.255z' />"
      }, {
          iconid: "icon-cross",
          viewbox: "0 0 24 24",
          name: "cross",
          elements: "<path class='path1' d='M18.016 5.125q0.369 0 0.614 0.245t0.245 0.614q0 0.363-0.248 0.611l-5.411 5.405 5.411 5.405q0.248 0.248 0.248 0.611 0 0.369-0.245 0.614t-0.614 0.245q-0.363 0-0.611-0.248l-5.405-5.411-5.405 5.411q-0.248 0.248-0.611 0.248-0.369 0-0.614-0.245t-0.245-0.614q0-0.363 0.248-0.611l5.411-5.405-5.411-5.405q-0.248-0.248-0.248-0.611 0-0.369 0.245-0.614t0.614-0.245q0.363 0 0.611 0.248l5.405 5.411 5.405-5.411q0.248-0.248 0.611-0.248z' />"
      }, {
          iconid: "icon-angle-up",
          viewbox: "0 0 21 32",
          name: "angle-up",
          elements: "<path class='path1' d='M19.196 21.143q0 0.232-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-7.018-7.018-7.018 7.018q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411z' />"
      }, {
          iconid: "icon-angle-down",
          viewbox: "0 0 21 32",
          name: "angle-down",
          elements: "<path class='path1' d='M19.196 13.143q0 0.232-0.179 0.411l-8.321 8.321q-0.179 0.179-0.411 0.179t-0.411-0.179l-8.321-8.321q-0.179-0.179-0.179-0.411t0.179-0.411l0.893-0.893q0.179-0.179 0.411-0.179t0.411 0.179l7.018 7.018 7.018-7.018q0.179-0.179 0.411-0.179t0.411 0.179l0.893 0.893q0.179 0.179 0.179 0.411z' />"
      }, {
          iconid: "icon-cd1",
          viewbox: "-2.5 -22.5 15 30",
          name: "cd1",
          elements: "<text>1</text>"
      }, {
          iconid: "icon-cd2",
          viewbox: "-2.5 -22.5 15 30",
          name: "cd2",
          elements: "<text>2</text>"
      }, {
          iconid: "icon-cd3",
          viewbox: "-2.5 -22.5 15 30",
          name: "cd3",
          elements: "<text>3</text>"
      }, {
          iconid: "icon-cd3",
          viewbox: "-2.5 -22.5 15 30",
          name: "cd3",
          elements: "<text>3</text>"
      }, {
          iconid: "icon-cd4",
          viewbox: "-2.5 -22.5 15 30",
          name: "cd4",
          elements: "<text>4</text>"
      }, {
          iconid: "icon-cd5",
          viewbox: "-2.5 -22.5 15 30",
          name: "cd5",
          elements: "<text>5</text>"
      }, {
          iconid: "icon-cd6",
          viewbox: "-2.5 -22.5 15 30",
          name: "cd6",
          elements: "<text>6</text>"
      }, {
          iconid: "icon-cd7",
          viewbox: "-2.5 -22.5 15 30",
          name: "cd7",
          elements: "<text>7</text>"
      }, {
          iconid: "icon-cd8",
          viewbox: "-2.5 -22.5 15 30",
          name: "cd8",
          elements: "<text>8</text>"
      }, {
          iconid: "icon-cd9",
          viewbox: "-2.5 -22.5 15 30",
          name: "cd9",
          elements: "<text>9</text>"
      }, {
          iconid: "icon-cd10",
          viewbox: "1.5 -22.5 15 30",
          name: "cd10",
          elements: "<text>10</text>"
      }, {
          iconid: "icon-cd11",
          viewbox: "1.5 -22.5 15 30",
          name: "cd11",
          elements: "<text>11</text>"
      }, {
          iconid: "icon-cd12",
          viewbox: "1.5 -22.5 15 30",
          name: "cd12",
          elements: "<text>12</text>"
      }, {
          iconid: "icon-cd13",
          viewbox: "1.5 -22.5 15 30",
          name: "cd13",
          elements: "<text>13</text>"
      }, {
          iconid: "icon-cd14",
          viewbox: "1.5 -22.5 15 30",
          name: "cd14",
          elements: "<text>14</text>"
      }, {
          iconid: "icon-cd15",
          viewbox: "1.5 -22.5 15 30",
          name: "cd15",
          elements: "<text>15</text>"
      }, {
          iconid: "icon-mayor",
          viewbox: "-1.5 -22.5 15 30",
          name: "mayor",
          elements: "<text>M</text>"
      }, {
          iconid: "icon-clerk",
          viewbox: "-1.5 -22.5 15 30",
          name: "clerk",
          elements: "<text>C</text>"
      }, {
          iconid: "icon-publicworks",
          viewbox: "-2.5 -22.5 30 30",
          name: "publicworks",
          elements: "<text>PW</text>"
      }, {
          iconid: "icon-meeting",
          viewbox: "75 -90 150 450",
          name: "meeting",
          elements: "<path d='M801.63,717.62c-23.66,0-47.33.37-71-.1-23.3-.47-38.28-16.43-38.25-39.81,0-21.48,2.31-42.56,11.82-62.24,7.22-14.93,18.57-24.41,35.37-26.83a16.82,16.82,0,0,1,12.74,2.78c9.86,6.83,19.88,13.34,31.81,16.29,19.61,4.85,37.95,1.81,55.27-8.22a50,50,0,0,0,8.3-5.54c8.12-7.22,17-6.21,26.23-3,13.05,4.52,20.9,14.3,26.68,26.2,6.43,13.24,9.16,27.47,10.19,41.94.69,9.73,1.12,19.75-.44,29.3-2.77,17-17.46,28.67-36.27,29.09-24.15.54-48.32.13-72.48.13Z' transform='translate(-652.25 -438.39)'/><path d='M801.86,597.91c-32.62,0-60-27.19-59.66-59.91.34-33.58,26.51-59.74,59.71-59.76s59.66,25.81,59.8,59.56C861.86,571.72,834.94,597.55,801.86,597.91Z' transform='translate(-652.25 -438.39)'/><path d='M860.34,577.33c9.79-15,13.35-30.91,11.42-48.48,4.9.86,9.08,1.83,13.3,2.3,13.71,1.54,26.38-2,38.43-8.31,1.62-.85,3.25-1.69,4.9-2.48,6.23-3,11.82-1.93,14.74,4.37a80.88,80.88,0,0,1,6.72,21.18c1.45,9.32,1.64,18.88,1.71,28.34.07,9.83-5.06,16.66-14.09,20.39-11.32,4.69-23.26,3.13-35,3.05-1.1,0-2.32-1.19-3.27-2.06C885.23,582.9,879.2,580,860.34,577.33Z' transform='translate(-652.25 -438.39)'/><path d='M731.87,528.88c-1.55,17.64,2.14,33.53,11,47.27-8.54,3.08-17,5.65-25.05,9.23a34.77,34.77,0,0,0-11,8.44c-3,3.35-6.23,4.33-10.5,4.16-9.43-.37-19,.74-28.12-2.77-10.74-4.12-16-11.3-16-22.74,0-13.66.79-27.26,5-40.41a32.84,32.84,0,0,1,3.1-6.78c3.34-5.61,8.8-8.95,16.87-4.28,13.23,7.65,27.4,12.07,42.95,10.07C723.86,530.59,727.53,529.7,731.87,528.88Z' transform='translate(-652.25 -438.39)'/><path d='M712,438.39a39.63,39.63,0,1,1,0,79.26c-22.3-.13-39.45-17.31-39.57-39.63A39.35,39.35,0,0,1,712,438.39Z' transform='translate(-652.25 -438.39)'/><path d='M852.65,478c0-22.35,17.16-39.61,39.4-39.63a39.63,39.63,0,1,1,0,79.26C868.37,517.81,851.31,497.31,852.65,478Z' transform='translate(-652.25 -438.39)'/>"
      }, {
          iconid: "icon-info",
          viewbox: "-11 -90 150 450",
          name: "info",
          elements: "<path d='M667.47,399.39q0,26.51,0,53c0,10.42,0,10.41,10.13,10.47a37.72,37.72,0,0,1,5.35.22c7,1.05,11.27,5.52,11.47,12.66q.36,13.41,0,26.84c-.22,8.08-5.57,13.3-13.77,13.33q-52.68.16-105.37,0c-8.39,0-13.75-5.57-13.9-13.94s-.12-16.56,0-24.83c.12-9,5.17-14,14.2-14.26,12.45-.43,12.45-.43,12.45-12.75,0-20.36-.19-40.72.12-61.07.09-6-2-8.2-7.77-7.53a33.67,33.67,0,0,1-6.7,0,13,13,0,0,1-12.24-12.73c-.23-8.94-.21-17.9,0-26.84.15-7.61,5.43-13.3,13.09-13.37q39.93-.32,79.86,0c8.51.08,13.06,5.23,13.09,13.76C667.53,361.35,667.48,380.37,667.47,399.39Z' transform='translate(-561.27 -221.61)'/><path d='M628.09,221.64c8.72,0,17.43-.1,26.15,0s13.16,4.67,13.21,13.27c.07,12.51-.56,25.06.2,37.53a14,14,0,0,1-14,15.32c-17,.27-34,.38-50.95,0-9.56-.23-14.14-5.12-14.43-14.9q-.57-18.75,0-37.53c.27-9.49,5-13.63,14.39-13.69C611.11,221.59,619.6,221.63,628.09,221.64Z' transform='translate(-561.27 -221.61)'/>"
      }, {
          iconid: "icon-here",
          viewbox: "0 75 500 325",
          name: "here",
          elements: "<path d='M599.24,406.36V348.3l-50.53-79.88h32.65L613.82,323l31.8-54.57h32.09L627,348.49v57.87Z' transform='translate(-500.89 -266.07)'/><path d='M673,338.24q0-21.08,6.3-35.38a64.91,64.91,0,0,1,12.84-18.91A53.7,53.7,0,0,1,710,271.53q12.89-5.46,29.73-5.46,30.49,0,48.79,18.91t18.3,52.6q0,33.4-18.16,52.27t-48.55,18.87q-30.77,0-48.93-18.77T673,338.24Zm28.7-.94q0,23.43,10.82,35.52T740,384.91q16.65,0,27.33-12t10.68-36q0-23.71-10.4-35.38T740,289.87q-17.22,0-27.76,11.81T701.72,337.3Z' transform='translate(-500.89 -266.07)'/><path d='M824.79,268.42h27.85v74.71q0,17.78,1,23.05a22.33,22.33,0,0,0,8.52,13.6q6.73,5.13,18.4,5.13,11.85,0,17.88-4.85a19.15,19.15,0,0,0,7.24-11.9q1.22-7.06,1.22-23.43V268.42h27.85v72.45q0,24.84-2.26,35.1a38.84,38.84,0,0,1-8.33,17.31A42.06,42.06,0,0,1,908,404.52q-10.16,4.19-26.53,4.19-19.76,0-30-4.56a42.84,42.84,0,0,1-16.14-11.86A38,38,0,0,1,827.51,377q-2.73-11.86-2.73-35Z' transform='translate(-500.89 -266.07)'/><path d='M687.43,586.36h-30.3l-12-31.33H589.95l-11.38,31.33H549l53.73-137.94H632.2Zm-51.28-54.57-19-51.19-18.63,51.19Z' transform='translate(-500.89 -266.07)'/><path d='M699.46,586.36V448.42h58.62q22.11,0,32.13,3.72a31.71,31.71,0,0,1,16,13.22,39.75,39.75,0,0,1,6,21.74q0,15.53-9.13,25.64t-27.29,12.75a65,65,0,0,1,14.91,11.57q5.88,6.31,15.85,22.39l16.84,26.91H790.17l-20.14-30q-10.73-16.09-14.68-20.28a21.38,21.38,0,0,0-8.37-5.74q-4.42-1.55-14-1.55h-5.65v57.58Zm27.85-79.6h20.61q20,0,25-1.69a15,15,0,0,0,7.81-5.83,18,18,0,0,0,2.82-10.35q0-7-3.72-11.24t-10.49-5.41q-3.39-.47-20.32-.47H727.31Z' transform='translate(-500.89 -266.07)'/><path d='M835.58,586.36V448.42H937.86v23.33H863.43v30.58h69.25v23.24H863.43v37.54h77.06v23.24Z' transform='translate(-500.89 -266.07)'/><path d='M500.89,766.36V628.42h27.85v54.29h54.57V628.42h27.85V766.36H583.32V706H528.74v60.31Z' transform='translate(-500.89 -266.07)'/><path d='M636.66,766.36V628.42H738.94v23.33H664.51v30.58h69.25v23.24H664.51v37.54h77.06v23.24Z' transform='translate(-500.89 -266.07)'/><path d='M761.7,766.36V628.42h58.62q22.11,0,32.13,3.72a31.71,31.71,0,0,1,16,13.22,39.75,39.75,0,0,1,6,21.74q0,15.52-9.13,25.64T838.1,705.48A65,65,0,0,1,853,717.06q5.88,6.3,15.85,22.39l16.84,26.91H852.41l-20.14-30q-10.73-16.09-14.68-20.28a21.39,21.39,0,0,0-8.37-5.74q-4.42-1.55-14-1.55h-5.65v57.58Zm27.85-79.6h20.61q20,0,25-1.69a15,15,0,0,0,7.81-5.83,18,18,0,0,0,2.82-10.35q0-7-3.72-11.24t-10.49-5.41q-3.39-.47-20.32-.47H789.55Z' transform='translate(-500.89 -266.07)'/><path d='M897.82,766.36V628.42H1000.1v23.33H925.67v30.58h69.25v23.24H925.67v37.54h77.06v23.24Z' transform='translate(-500.89 -266.07)'/>"
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
                  symbol: "meeting",
                  category: 2,
                  metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
                  description: "The LA Kiosk is a demo unit to test large interactive kisok technology."
          }, {
                  name: "Mayor's Help Desk",
                  symbol: "info",
                  category: 3,
                  metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
                  description: "The LA Kiosk is a demo unit to test large interactive kisok technology."
          }, {
                  name: "Office of the Mayor",
                  symbol: "mayor",
                  category: 1,
                  metaitems: "<strong>Mayor:</strong> Eric Garcetti",
                  // description: "The LA Kiosk is a demo unit to test large interactive kisok technology."
          }, {
                  name: "Office of the City Clerk",
                  symbol: "clerk",
                  category: 1,
                  metaitems: "<strong>Opening Hours:</strong> 8:00AM &mdash; 4:30PM"
                  // description: "The LA Kiosk is a demo unit to test large interactive kisok technology."
          }, {
                  name: "Board of Public Works Members Offices",
                  room: "361",
                  symbol: "publicworks",
                  category: 1,
                  // metaitems: "<strong>Opening Hours:</strong> 8:00AM &mdash; 4:30PM"
                  // description: "The LA Kiosk is a demo unit to test large interactive kisok technology."
          }, {
                  name: "Board of Public Edward R. Roybal Session Room",
                  room: "350",
                  symbol: "meeting",
                  category: 2,
                  // metaitems: "<strong>Opening Hours:</strong> 8:00AM &mdash; 4:30PM"
                  // description: "The LA Kiosk is a demo unit to test large interactive kisok technology."
          }, {
                  name: "Docent's Desk",
                  // room: "350",
                  symbol: "info",
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
              symbol: "cd1",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Gilbert Cedillo",
              // description: ""
        }, {
              name: "2nd Council District Office",
              room: "435",
              symbol: "cd2",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Paul Krekorian",
              // description: "Council Office of Todd Jones"
        }, {
              name: "3rd Council District Office",
              room: "415",
              symbol: "cd3",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Bob Blumenfield",
              // description: "Council Office of Todd Jones"
        }, {
              name: "4th Council District Office",
              room: "425",
              symbol: "cd4",
              category: 1,
              metaitems: "<strong>Council Member:</strong> David E. Ryu",
              // description: "Council Office of Todd Jones"
        }, {
              name: "5th Council District Office",
              room: "440",
              symbol: "cd5",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Paul Koretz",
              // description: "Council Office of Todd Jones"
        }, {
              name: "6th Council District Office",
              room: "470",
              symbol: "cd6",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Nury Martinez",
              // description: "Council Office of Todd Jones"
        }, {
              name: "7th Council District Office",
              room: "455",
              symbol: "cd7",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Monica Rodriguez",
              // description: "Council Office of Todd Jones"
        }, {
              name: "8th Council District Office",
              room: "450",
              symbol: "cd8",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Marqueece Harris-Dawson",
              // description: "Council Office of Todd Jones"
        }, {
              name: "9th Council District Office",
              room: "420",
              symbol: "cd9",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Curren D. Price, Jr.",
              // description: "Council Office of Todd Jones"
        }, {
              name: "10th Council District Office",
              room: "430",
              symbol: "cd10",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Herb J. Wesson, Jr.",
              // description: "Council Office of Todd Jones"
        }, {
              name: "11th Council District Office",
              room: "475",
              symbol: "cd11",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Mike Bonin",
              // description: "Council Office of Todd Jones"
        }, {
              name: "12th Council District Office",
              room: "405",
              symbol: "cd12",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Mitchell Englander",
              // description: "Council Office of Todd Jones"
        }, {
              name: "13th Council District Office",
              room: "480",
              symbol: "cd13",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Mitch O'Farrell",
              // description: "Council Office of Todd Jones"
        }, {
              name: "14th Council District Office",
              room: "465",
              symbol: "cd14",
              category: 1,
              metaitems: "<strong>Council Member:</strong> Jose Huizar",
              // description: "Council Office of Todd Jones"
        }, {
              name: "15th Council District Office",
              room: "410",
              symbol: "cd15",
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
              symbol: "meeting",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1010",
              room: "1010",
              symbol: "meeting",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1020",
              room: "1020",
              symbol: "meeting",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1025",
              room: "1025",
              symbol: "meeting",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1030",
              room: "1030",
              symbol: "meeting",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1035",
              room: "1035",
              symbol: "meeting",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1040",
              room: "1040",
              symbol: "meeting",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1045",
              room: "1045",
              symbol: "meeting",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1050",
              room: "1050",
              symbol: "meeting",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1060",
              room: "1060",
              symbol: "meeting",
              category: 2,
              // metaitems: "<strong>Opening Hours:</strong> 12:00AM &mdash; 11:59PM",
              // description: "Meeting Room 1010"
        }, {
              name: "Meeting Room 1070",
              room: "1070",
              symbol: "meeting",
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
              symbol: "meeting",
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
