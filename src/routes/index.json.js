const locations = [
  {"title":"London","location_type":"City","woeid":44418,"latt_long":"51.506321,-0.12714"},
  {"title":"New York","location_type":"City","woeid":2459115,"latt_long":"40.71455,-74.007118"},
  {"title":"Los Angeles","location_type":"City","woeid":2442047,"latt_long":"34.053490,-118.245323"},
  {"title":"Sydney","location_type":"City","woeid":1105779,"latt_long":"-33.869629, 151.206955"},
  {"title":"Philadelphia","location_type":"City","woeid":2471217,"latt_long":"39.952271,-75.162369"},
  {"title":"Houston","location_type":"City","woeid":2424766,"latt_long":"29.760450,-95.369781"},
]

const contents = JSON.stringify(locations);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}