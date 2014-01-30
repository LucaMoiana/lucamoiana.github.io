define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmaps: [
			{
				id: "d85893c4238c435a87b784fe6236d1b5",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},{
				id: "c5a24d096c5a46f98e4d8e3f5b1bdf1f",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
			{
				id: "ad70e61d267a4db8a69f7decd76873d3",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: 01/01/2001 - 01/01/2250;
			}
			// To add additional maps to the template, uncomment the below section for
			// each map you would like to add. Webmap titles from ArcGIS Online will
			// be used unless you fill in title attribute.
			, {
			
				id: "197ce84cb3df4b838aa4cca757383ba3",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
				},
			//	{
			//
			//	id: "739db23c3f674005a405c68e337f5011",
			//	title: "",
			//	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
			//	showSingleTimeInstance: false
			//	}
			],
			//Enter a title, if no title is specified, the first webmap's title is used.
			title: "Dalla carta al web-gis",
			//Enter a subtitle, if no subtitle is specified, the first webmap's subtitle is used.
			subtitle: "un viaggio nella cartografia storica, attraverso esri",
			// If false, each tab will have a number on it. If true, the first tab will not have a number and the second tab will start counting at 1.
			startCountOnSecondTab: false,
			//Sync maps scale and location
			syncMaps: true,
			//Display geocoder search widget
			geocoderWidget: false,
			// Specify a proxy for custom deployment
			proxyurl: "",
			//specify the url to a geometry service
			geometryserviceurl: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
			//If the webmap uses Bing Maps data, you will need to provided your Bing Maps Key
			bingmapskey : "",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: "http://www.arcgis.com/sharing/rest/content/items"
		}
	}
);
