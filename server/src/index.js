const express = require('express');
const { PORT } = require('./constants');
const app = express();

//import routes
const authRoutes = require('./routes/auth');

//initialize routes
app.use('/api', authRoutes);

const appStart = () => {
	try {
		app.listen(PORT, () => {
			console.log(`The app is running at PORT:${PORT}`);
		});
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
};

appStart();
