({
	mapAccount : function(map, account) {
		  var latitudeLongitude = [account.Location__Latitude__s, account.Location__Longitude__s];
		  var markerParams = {account: account};
		  L.marker(latitudeLongitude, markerParams).addTo(map);
    }
})
