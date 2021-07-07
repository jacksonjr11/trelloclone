const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');
const cardController = require('./controllers/cardController');

routes.get('/cards', cardController.index);
routes.post('/cards', cardController.create);
routes.put('/cards', cardController.update);
routes.delete('/cards', cardController.delete);

routes.get('/users', userController.index);
routes.post('/users', userController.create);
routes.put('/users', userController.update);
routes.delete('/users', userController.delete);



module.exports = routes;
