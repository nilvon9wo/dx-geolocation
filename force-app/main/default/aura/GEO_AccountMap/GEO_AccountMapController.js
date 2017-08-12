({
   jsLoaded: function(component, event, helper) {
	  var mapParams = {zoomControl: false};
      var map = L.map('map', mapParams).setView([37.784173, -122.401557], 14);
      
      var mapServerUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
      var mapServerParams = { attribution: 'Tiles © Esri' };
      L.tileLayer(mapServerUrl, mapServerParams).addTo(map);
    		  
      component.set('v.map', map);
  }
})