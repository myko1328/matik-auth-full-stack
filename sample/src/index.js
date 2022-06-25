const express = require('express');
const app = express();
const { PORT, CLIENT_URL } = require('./constants');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cors = require('cors');

//import passport middleware
require('./middlewares/passport-middleware');

//initialize middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(passport.initialize());

//import routes
const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employee');

//initialize routes
app.use('/api/auth', authRoutes);
app.use('/api/employee', employeeRoutes);

//app start
const appStart = () => {
	try {
		app.listen(PORT, () => {
			console.log(`The app is running at http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
};

appStart();
