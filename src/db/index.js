const { text } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'matik_db',
	password: 'Myko123',
	port: 5432,
});

module.exports = {
	query: (text, params) => pool.query(text, params),
};
