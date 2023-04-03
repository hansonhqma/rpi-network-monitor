// Entry Point of the API Server

require('dotenv').config();
const express = require('express');


/* Creates an Express application.
The express() function is a top-level
function exported by the express module.
*/
const app = express();
const Pool = require('pg').Pool;

const pool = new Pool({
	user: process.env.POSTGRES_USER,
	host: 'localhost',
	database: 'rim',
	password: process.env.POSTGRES_PW,
	dialect: 'postgres',
	port: 5432
});


/* To handle the HTTP Methods Body Parser
is used, Generally used to extract the
entire body portion of an incoming
request stream and exposes it on req.body
*/
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


pool.connect((err, client, release) => {
	if (err) {
		return console.error(
			'Error acquiring client', err.stack)
	}
	client.query('SELECT NOW()', (err, result) => {
		release()
		if (err) {
			return console.error(
				'Error executing query', err.stack)
		}
		console.log("Connected to Database !")
	})
})


//TODO: Query the building item for the specific passed IP, return all stats associated
app.get('/get_building_avg', (req, res, next) => {
	var ip = req.query.ip;
	var quer = 'with temptable as (select name, gateways.id as id, datetime, \
		rtt from buildings, gateways, test_events where buildings.id = building_id \
		and gateways.id = gateway_id) select name, avg(rtt) from temptable where \
		id = \'' + ip + '\' group by id, name'
	pool.query(quer)
		.then(testData => {
			console.log(testData);
			res.send(testData.rows[0]);
		})

})

//TODO: query get all building names, RTT, last_tested date
app.get('/get_building_last', (req, res, next) => {
	var ip = req.query.ip;
	var quer = 'with temptable as (select name, gateways.id as id, datetime, rtt \
		from buildings, gateways, test_events where buildings.id = building_id \
		and gateways.id = gateway_id) select name, datetime, rtt from temptable where \
		id = \'' + ip +'\' order by datetime desc limit 1'
	pool.query(quer)
		.then(testData => {
			console.log(testData);
			res.send(testData.rows[0]);
		})

})

app.get('/get_all', (req, res, next) => {
	var ip = req.query.ip;
	var quer = 'select name, gateway_id, avg(rtt) from test_events,\
	 gateways, buildings where buildings.id = building_id and \
	 test_events.gateway_id = gateways.id group by gateway_id, name'
	pool.query(quer)
		.then(testData => {
			console.log(testData);
			res.send(testData.rows);
		})

})

//TODO: Insert test event into test_events and update
app.get('/insert_test_event', (req, res, next) => {
	var ip = req.query.ip;
	var rtt = req.query.rtt;
	let quer = 'insert into test_events (datetime, gateway_id, rtt) values (now(), \'' + ip + '\', ' + rtt + ')'
	pool.query(quer)
		.then(testData => {
			console.log(testData);
			res.send(testData.command);
		})
})


// Require the Routes API
// Create a Server and run it on the port 3000
const server = app.listen(31415, function () {
	let host = server.address().address
	let port = server.address().port
	// Starting the Server at the port 3000
})
