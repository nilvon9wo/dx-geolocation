({
   jsLoaded: function(component) {
	  var mapParams = {zoomControl: false};
      var map = L.map('map', mapParams).setView([37.784173, -122.401557], 14);

      var mapServerUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
      var mapServerParams = { attribution: 'Tiles © Esri' };
      L.tileLayer(mapServerUrl, mapServerParams).addTo(map);

      component.set('v.map', map);
  },

  accountsLoaded: function(component, event, helper) {
	  var map = component.get('v.map');
	  var accountList = event.getParam('accountList');
	  for (var i = 0; i < accountList.length; i++) {
		  helper.mapAccount(map, accountList[i]);
	  }
  }
})