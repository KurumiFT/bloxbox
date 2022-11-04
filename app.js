var express = require('express');
var app = express();

var pg = require('pg');
var conString = "postgres://admin:aG4qbi7ealJJIYqLOZsNnBX6RMOgsf8b@dpg-cdihrtqen0hi0coa5vb0-a/items";

var client = new pg.Client(conString);
client.connect();

app.get('/item', (request, response) => {
	client.query("SELECT * FROM prototype WHERE item_id="+request.query.id).then(result => {
		let row = result['rows'][0];
		let data = {"display_name": row['display_name'], "weight": row["weight"], "image_href": row["image_href"]};

		response.send(JSON.stringify(data));
	});

	let data = {};
});

client.query("SELECT * FROM prototype WHERE item_id=1").then(result => {console.log(result['rows'][0]['display_name'])});
app.listen(process.env.PORT || 3001);
