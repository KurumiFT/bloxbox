var express = require('express');
var app = express();

var pg = require('pg');
var conString = "postgres://bloxbox_user:KN4T5E86dnY1QuyLJy6iNAJK1sykopOJ@dpg-cfl32kpmbjsn9efp51mg-a/bloxbox";

var client = new pg.Client(conString);
client.connect();

app.get('/item', (request, response) => {
	client.query("SELECT * FROM prototype WHERE item_id="+request.query.id).then(result => {
		let row = result['rows'][0];
		let data = {"display_name": row['display_name'], "weight": row["weight"], "image_href": row["image_href"], "hold_in_arm": row["holdinarm"], "item_type": row["item_type"], "stacking": row["stacking"]};

		response.send(JSON.stringify(data));
	});
});
app.listen(process.env.PORT || 3001);
