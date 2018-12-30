const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; // Heroku port or 3000v

function requireHTTPS(req, res, next) {
	// The 'x-forwarded-proto' check is for Heroku
	if (
		!req.secure &&
		req.get('x-forwarded-proto') !== 'https' &&
		process.env.NODE_ENV !== 'development'
	) {
		return res.redirect('https://' + req.get('host') + req.url);
	}
	next();
}

app.use(requireHTTPS);
app.use(express.static(publicPath));

app.get('*', (request, response) => {
	response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
	console.log('Server is up!');
});
