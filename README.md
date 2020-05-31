Center for Neighborhood Knowledge
COVID-Nomics
Project Documentation

# About this project:

COVID-Nomics is a data and cartography project that analyzes and visualizes how different communities in and around Los Angeles are impacted by COVID-19. Using a set of indicators to predict risk, COVID-Nomics depicts how certain communities across the LA Metropolitan area are disproportionately burdened by the epidemic and face greater risks of income insecurity, job displacement, and hardship.

## How it works:

The web map was built using Carto.Js and Leaflet to integrate data stored in the “uducla” CARTO account with interactive features built outside of the CARTO environment. The developer used an online programming environment, Glitch.com, to develop the interactive web map.

### Data storage

The statistical and spatial analysis conducted by the Center for Neighborhood Knowledge (CNK) draws on three geographies (census tracts, ZCTAs, and LA County Department of Public Health Communities ), and is therefore stored in three separate shapefiles: covid_nomics_tracts_v01, covid_nomics_zctas_v01, and lac_covidcases_may14th.

Each shapefile was zipped and uploaded to the “uducla” CARTO account as a dataset. Within the CARTO account, the developer turned these datasets into maps in order to do some initial styling using CartoCSS.

The rest of the webmap was built on an external site outside of the CARTO environment to add and style interactive features. Since the data remains stored in the “uducla” CARTO account, it is imperative to not remove nor rename any of the three datasets mentioned above from the uducla CARTO account in order for the web map to continue being able to pull and visualize data stored in these datasets (covid_nomics_tracts_v01, covid_nomics_zctas_v01, and lac_covidcases_may14th). However, data within each dataset can be added, edited, or removed, and the map will automatically update (ex: adding a row of data, or editing an existing cell).

### Interactivity

The following interactive features were added through custom code:

> > Dropdown menu to view different layers: the drop-down menu uses a simple “if/else” logic to display the correct layer (ex: if user selects “Proportion of Workers At High Risk of Job Displacement” from the drop-down menu, add that layer, otherwise, remove it)

> > Dynamic legends: similarly to the drop-down menu, the dynamic legends uses an “if/else” logic to hide or display legends based on the layer selected

> > Toggle buttons: Hide or show City Council and County Districts on click

> > Pop-up window: on the default layer (COVID-19 cases), an event listener was added to display the name of the community when the user clicks on a feature).

Troubleshooting: if any development issues arise, feel free to contact the developer, Manon Vergerio, at manonvergerio@gmail.com.
