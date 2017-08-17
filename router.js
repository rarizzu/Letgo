const express = require('express');
const _itemController = require('./app/controllers/_itemController');

module.exports = function(app) {
    const router = express.Router();
    router.get("/helloworld" , _itemController.helloworld);
    app.use("/api", router);
}