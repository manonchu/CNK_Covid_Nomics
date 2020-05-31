// This isn't necessary but it keeps the editor from thinking L and carto are typos
/* global L, carto */

var map = L.map('map', {
  center: [34.052235, -118.243683],
  zoom: 10
});


// Adding Voyager Basemap
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);

// Adding Voyager Labels
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_only_labels/{z}/{x}/{y}.png', {
  maxZoom: 18,
  zIndex: 10
}).addTo(map);

// Initialize Carto
var client = new carto.Client({
  apiKey: 'default_public',
  username: 'uducla'
});

/*
 * Begin layer one
 */

// Initialze source data

var vulnerableSource = new carto.source.Dataset('covid_nomics_tracts_v01');


// Create style for the data
var vulnerableStyle = new carto.style.CartoCSS(`
#layer {
  polygon-fill: ramp([rvi_rank2], (#fac591, #cbe6f0, #4c95cb, #f9f9d2, #ec6567), ("High", "Low", "Lowest Vulnerability", "Moderate", "Highest Vulnerability", ), "=");
}
#layer::outline {
  line-width: 1;
  line-color: #FFFFFF;
  line-opacity: 0.5;
}
`);


/// Add style to the data
var vulnerableLayer = new carto.layer.Layer(vulnerableSource, vulnerableStyle, {
featureClickColumns: ['tract_name']          
 });

vulnerableLayer.on('featureClicked', function (event) {
  // Create the HTML that will go in the popup. event.data has all the data for 
  // the clicked feature.
  //
  // I will add the content line-by-line here to make it a little easier to read.
  var burdencontent = '<h2>' + 'Census Tract #'+ event.data['tract_name'] + '</h2>';
  
  // If you're not sure what data is available, log it out:
  console.log(event.data);
  
  var popup = L.popup();
  popup.setContent(burdencontent);
  
  // Place the popup and open it
  popup.setLatLng(event.latLng);
  popup.openOn(map);
});


/*
 * Begin layer two
 */

// Initialze source data

var jobdisSource = new carto.source.Dataset('covid_nomics_tracts_v01');


// Create style for the data
var jobdisStyle = new carto.style.CartoCSS(`
#layer {
  polygon-fill: ramp([pct_atrisk], (#4c95cb,#cbe6f0,#f9f9d2,#fac591,#ec6567), quantiles);
  polygon-opacity: 1;
}
#layer::outline {
  line-width: 1;
  line-color: #FFFFFF;
  line-opacity: 0.5;
}
`);


// Add style to the data
var jobdisLayer = new carto.layer.Layer(jobdisSource, jobdisStyle, {
featureClickColumns: ['tract_name']          
 });

jobdisLayer.on('featureClicked', function (event) {
  // Create the HTML that will go in the popup. event.data has all the data for 
  // the clicked feature.
  //
  // I will add the content line-by-line here to make it a little easier to read.
  var burdencontent = '<h2>' + 'Census Tract #'+ event.data['tract_name'] + '</h2>';
  
  // If you're not sure what data is available, log it out:
  console.log(event.data);
  
  var popup = L.popup();
  popup.setContent(burdencontent);
  
  // Place the popup and open it
  popup.setLatLng(event.latLng);
  popup.openOn(map);
});

/*
 * Begin layer three
 */

// Initialze source data

var insuranceSource = new carto.source.Dataset('covid_nomics_tracts_v01');


// Create style for the data
var insuranceStyle = new carto.style.CartoCSS(`
##layer {
  [noui_rank2=null] {
    polygon-opacity: 0;
  }
  
  polygon-fill: ramp([noui_rank2], (#fac591, #ec6567, #cbe6f0, #4c95cb, #f9f9d2, #d1d1d1), ("High", "Highest", "Low", "Lowest", "Moderate", ), "=");
  polygon-opacity: 0.90;
}
#layer::outline {
  line-width: 1;
  line-color: #ffffff;
  line-opacity: 0.58;
}
`);


// Add style to the data
var insuranceLayer = new carto.layer.Layer(insuranceSource, insuranceStyle, {
featureClickColumns: ['tract_name']          
 });

insuranceLayer.on('featureClicked', function (event) {
  // Create the HTML that will go in the popup. event.data has all the data for 
  // the clicked feature.
  //
  // I will add the content line-by-line here to make it a little easier to read.
  var burdencontent = '<h2>' + 'Census Tract #'+ event.data['tract_name'] + '</h2>';
  
  // If you're not sure what data is available, log it out:
  console.log(event.data);
  
  var popup = L.popup();
  popup.setContent(burdencontent);
  
  // Place the popup and open it
  popup.setLatLng(event.latLng);
  popup.openOn(map);
});


/*
 * Begin layer four
 */

// Initialze source data
/*
  */
var burdenSource = new carto.source.Dataset('covid_nomics_tracts_v01');


// Create style for the data
var burdenStyle = new carto.style.CartoCSS(`
#layer {
  polygon-fill: ramp([sipb_rank2], (#cbe6f0, #f9f9d2, #ec6567, #fac591, #4c95cb), ("Low", "Moderate", "Highest Burden", "High", "Lowest Burden", ), "=");
}
#layer::outline {
  line-width: 1;
  line-color: #FFFFFF;
  line-opacity: 0.5;
}
`);



// Add style to the data
var burdenLayer = new carto.layer.Layer(burdenSource, burdenStyle, {
  featureClickColumns: ['tract_name']
});

burdenLayer.on('featureClicked', function (event) {
  // Create the HTML that will go in the popup. event.data has all the data for 
  // the clicked feature.
  //
  // I will add the content line-by-line here to make it a little easier to read.
  var burdencontent = '<h2>' + 'Census Tract #'+ event.data['tract_name'] + '</h2>';
  
  // If you're not sure what data is available, log it out:
  console.log(event.data);
  
  var popup = L.popup();
  popup.setContent(burdencontent);
  
  // Place the popup and open it
  popup.setLatLng(event.latLng);
  popup.openOn(map);
});




/*
 * Begin layer five 
 */

// Initialze source data
/*
  */
var caresSource = new carto.source.Dataset('covid_nomics_zctas_v01');


// Create style for the data
var caresStyle = new carto.style.CartoCSS(`
#layer {
  polygon-fill: ramp([nocares_ra], (#45829b, #d1eeea, #2a5674, #96d0d1, #68abb8), ("High", "Lowest", "Highest", "Low", "Middle"), "=");
}
#layer::outline {
  line-width: 1;
  line-color: #FFFFFF;
  line-opacity: 0.5;
}
`);

// Add style to the data
var caresLayer = new carto.layer.Layer(caresSource, caresStyle, {
  featureClickColumns: ['zcta']
});

    caresLayer.on('featureClicked', function (event) {
  // Create the HTML that will go in the popup. event.data has all the data for 
  // the clicked feature.
  //
  // I will add the content line-by-line here to make it a little easier to read.
  var carescontent = '<h2>' + 'ZCTA # ' + event.data['zcta'] + '</h2>';
  
  // If you're not sure what data is available, log it out:
  console.log(event.data);
  
  var carespopup = L.popup();
  carespopup.setContent(carescontent);
  
  // Place the popup and open it
  carespopup.setLatLng(event.latLng);
  carespopup.openOn(map);
});


/*
 * Begin layer six
 */

// Initialze source data
/*
  */
var covidSource = new carto.source.Dataset('lac_covidcases_may14th');


// Create style for the data
var covidStyle = new carto.style.CartoCSS(`
#layer {
  polygon-fill: ramp([adj_case_r], (#ede5cf, #daaf91, #c1766f, #95455a, #541f3f), quantiles);
}
#layer::outline {
  line-width: 1;
  line-color: #FFFFFF;
  line-opacity: 0.5;
}
`);

// Add style to the data


var covidLayer = new carto.layer.Layer(covidSource, covidStyle, {
  featureClickColumns: ['label']
});

covidLayer.on('featureClicked', function (event) {
  // Create the HTML that will go in the popup. event.data has all the data for 
  // the clicked feature.
  //
  // I will add the content line-by-line here to make it a little easier to read.
  var covidcontent = '<h2>' + event.data['label'] + '</h2>';
  
  // If you're not sure what data is available, log it out:
  console.log(event.data);
  
  var covidpopup = L.popup();
  covidpopup.setContent(covidcontent);
  
  // Place the popup and open it
  covidpopup.setLatLng(event.latLng);
  covidpopup.openOn(map);
});


// ADD OVERLAY LAYERS

/*
 * Begin overlay layer one
 */

// Initialze source data

var citycouncilSource = new carto.source.Dataset('la_city_council_districts');


// Create style for the data
var citycouncilStyle = new carto.style.CartoCSS(`
#layer {
  polygon-fill: #826dba;
  polygon-opacity: 0;
}
#layer::outline {
  line-width: 2;
  line-color: #000000;
  line-opacity: 1;
}
#layer::labels {
  text-name: [district];
  text-face-name: 'Open Sans Bold';
  text-size: 18;
  text-fill:  #ffffff;
  text-label-position-tolerance: 0;
  text-halo-radius: 1;
  text-halo-fill: #000000;
  text-dy: -10;
  text-allow-overlap: true;
  text-placement: point;
  text-placement-type: dummy;
}
`);

// Add style to the data
var citycouncilLayer = new carto.layer.Layer(citycouncilSource, citycouncilStyle);

/*
 * Begin overlay layer two
 */

// Initialze source data
/*
  */
var superviSource = new carto.source.Dataset('la_county_supervisorial_district');


// Create style for the data
var superviStyle = new carto.style.CartoCSS(`
#layer {
  polygon-fill: #cc00ff;
  polygon-opacity: 0;
}
#layer::outline {
  line-width: 2;
  line-color:  #000000;
  line-opacity: 1;
}
#layer::labels {
  text-name: [district];
  text-face-name: 'Open Sans Bold';
  text-size: 25;
  text-fill:   #ffffff;
  text-label-position-tolerance: 0;
  text-halo-radius: 1;
  text-halo-fill: #000000;
  text-dy: -10;
  text-allow-overlap: true;
  text-placement: point;
  text-placement-type: dummy;
}
`);

// Add style to the data
var superviLayer = new carto.layer.Layer(superviSource, superviStyle);


// ADD LAYERS TO MAP: for now, only add default that will be displayed when web page is first loaded


client.addLayers([covidLayer]);
client.getLeafletLayer().addTo(map);




//ADD DROP-DOWN MENU TO PICK A LAYER AND DISPLAY CORRESPONDING LEGEND

// Step 1: Find the dropdown by class. If you are using a different class, change this.
var dropdown = document.querySelector('.dropdown');

// Create variables holding the various legends
var vulnerableLegend = document.querySelector('.vulnerable-legend');
var jobdisLegend = document.querySelector('.jobdis-legend');
var burdenLegend = document.querySelector('.burden-legend');
var insuranceLegend = document.querySelector('.insurance-legend');
var caresLegend = document.querySelector('.cares-legend');
var covidLegend = document.querySelector('.covid-legend');


// Step 2: Add an event listener to the dropdown. Run some code whenever the dropdown changes.
dropdown.addEventListener('change', function (e) {
 // The value of the dropdown is in e.target.value when it changes
   var indicator = e.target.value;
    
  // Step 3: When the indicator selected in the dropdown is 'vulnerable'
  if (indicator === 'vulnerable') {
    // show the vulnerability index layer, remove the other layers
    client.removeLayer(covidLayer);
    client.removeLayer(burdenLayer);
    client.removeLayer(jobdisLayer);
    client.removeLayer(insuranceLayer);
    client.removeLayer(caresLayer);
    client.addLayer(vulnerableLayer);
    // and show the vulnerability index legend, hide the other legends
    covidLegend.style.display = 'none';
    burdenLegend.style.display = 'none';
    jobdisLegend.style.display = 'none';
    insuranceLegend.style.display = 'none';
    caresLegend.style.display = 'none';
    vulnerableLegend.style.display = 'block';
    
  }  
  // Step 4: When the indicator selected in the dropdown is 'burden'
  else if (indicator === 'burden') {
    // show the burden index layer, remove the other layers
    client.removeLayer(covidLayer);
    client.removeLayer(vulnerableLayer);
    client.removeLayer(jobdisLayer);
    client.removeLayer(insuranceLayer);
    client.removeLayer(caresLayer);
    client.addLayer(burdenLayer);
    // and show the burden index legend, hide the other legends
    covidLegend.style.display = 'none';
    vulnerableLegend.style.display = 'none';
    jobdisLegend.style.display = 'none';
    insuranceLegend.style.display = 'none';
    caresLegend.style.display = 'none';
    burdenLegend.style.display = 'block';

  }
  
  // Step 5: When the indicator selected in the dropdown is 'jobdis'
  else if (indicator === 'jobdis') {
    // show the job displacement layer, remove the other layers
    client.removeLayer(covidLayer);
    client.removeLayer(vulnerableLayer);
    client.removeLayer(burdenLayer);
    client.removeLayer(insuranceLayer);
    client.removeLayer(caresLayer);
    client.addLayer(jobdisLayer);
    // and show the job displacement legend, hide the other legends
    covidLegend.style.display = 'none';
    vulnerableLegend.style.display = 'none';
    burdenLegend.style.display = 'none';
    insuranceLegend.style.display = 'none';
    caresLegend.style.display = 'none';
   jobdisLegend.style.display = 'block';
  }
  
  // Step 7: When the indicator selected in the dropdown is 'insurance'
  else if (indicator === 'insurance') {
    // show the insurance layer, remove the other layers
    client.removeLayer(covidLayer);
    client.removeLayer(vulnerableLayer);
    client.removeLayer(burdenLayer);
    client.removeLayer(jobdisLayer);
    client.removeLayer(caresLayer);
    client.addLayer(insuranceLayer);
    // and show the insurance legend, hide the other legends
    covidLegend.style.display = 'none';
    vulnerableLegend.style.display = 'none';
    burdenLegend.style.display = 'none';
    jobdisLegend.style.display = 'none';
    caresLegend.style.display = 'none';
   insuranceLegend.style.display = 'block';
  } 
  
  // Step 8: When the indicator selected in the dropdown is 'cares'
  else if (indicator === 'cares') {
    // show the CARES Act layer, remove the other layers
    client.removeLayer(covidLayer);
    client.removeLayer(vulnerableLayer);
    client.removeLayer(burdenLayer);
    client.removeLayer(jobdisLayer);
    client.removeLayer(insuranceLayer);
    client.addLayer(caresLayer);
    // and show the CARES ACT legend, hide the other legends
    covidLegend.style.display = 'none';
    vulnerableLegend.style.display = 'none';
    burdenLegend.style.display = 'none';
    jobdisLegend.style.display = 'none';
    insuranceLegend.style.display = 'none';
   caresLegend.style.display = 'block';
  }
  
    
   // Step 9: When the indicator selected in the dropdown is 'covid'
  if (indicator === 'covid') {
    // show the COVID-19 cases Layer, remove the other layers
    client.removeLayer(caresLayer);
    client.removeLayer(vulnerableLayer);
    client.removeLayer(burdenLayer);
    client.removeLayer(jobdisLayer);
    client.removeLayer(insuranceLayer);
    client.addLayer(covidLayer);
    // and show the COVID legend, hide the other legends
    caresLegend.style.display = 'none';
    vulnerableLegend.style.display = 'none';
    burdenLegend.style.display = 'none';
    jobdisLegend.style.display = 'none';
    insuranceLegend.style.display = 'none';
   covidLegend.style.display = 'block';
  }
  
    // Sometimes it helps to log messages. You can see this if you open developer tools and look at the console.
  console.log('Dropdown changed to "' + indicator + '"');

});




// TOGGLE OVERLAY LAYERS


// Keep track of whether the city council layer is currently visible
var citycouncilVisible = false;

// When the city council button is clicked, show or hide the layer
var citycouncilButton = document.querySelector('.toggle-citycouncil');
citycouncilButton.addEventListener('click', function () {
  if (citycouncilVisible) {
    // city council districts are visible, so remove that layer
    client.removeLayer(citycouncilLayer);
    
    // Then update the variable tracking whether the layer is shown
    citycouncilVisible = false;
  }
  else {
    // Do the reverse if council districts are not visible
    client.addLayer(citycouncilLayer);
    citycouncilVisible = true;

  }
  
   //remove other layer if it's currently turned on
  
  if (countydistrictsVisible) {
  client.removeLayer(superviLayer);
    
  // Then update the variable tracking whether the layer is shown
    countydistrictsVisible = false;
  }
  
});


// Keep track of whether the country districts layer is currently visible
var countydistrictsVisible = false;

// When the country districts button is clicked, show or hide the layer
var countydistrictsButton = document.querySelector('.toggle-countydistricts');
countydistrictsButton.addEventListener('click', function () {
  if (countydistrictsVisible) {
    // country districts are visible, so remove that layer
    client.removeLayer(superviLayer);
    
    // Then update the variable tracking whether the layer is shown
    countydistrictsVisible = false;
  }
  else {
    // Do the reverse if boroughs are not visible
    client.addLayer(superviLayer);
    countydistrictsVisible = true;

  }
  
  //remove other layer if it's currently turned on
  
  if (citycouncilVisible) {
  client.removeLayer(citycouncilLayer);
    
  // Then update the variable tracking whether the layer is shown
    citycouncilVisible = false;
  }
  
  
});