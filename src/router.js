const { Router } = require('express');

const routes = new Router();

routes.get('/test', (req, res) => {
  return res.json({ message: 'Okay' });
});

module.exports = routes;
