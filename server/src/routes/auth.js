const { Router } = require('express');
const router = Router();

router.get('/register', (req, res) => {
	return res.send('register route Working!');
});

module.exports = router;
