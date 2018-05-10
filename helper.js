// Converts json object to data table for google charts
function convertJsonToArray(jsonObj){
	// var jsonObj = JSON.parse(jsonString);
	var keys = Object.keys(jsonObj[0]);

	// convert json from object format to array format
	var arr = [keys];
	for(var j = 0; j < jsonObj.length; j++){
		var row = [];
		for(var i = 0; i < keys.length; i++)
			row.push(jsonObj[j][keys[i]]);
		arr.push(row);
	}

	return arr;
}
