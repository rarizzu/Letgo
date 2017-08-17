'use strict';

var mongoose = require("mongoose");
var Item = require("../models/Item");


exports.helloworld = function(req, res, next) {
  res.status(200).json({
    message: "Another route that worked"
  })
}


exports.createItem = function (req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const location = req.body.location;
    const item = {title:title, description:description, location:location};

    Item.create(item, function (err, newItem) {
        if (err) {
            console.log(err);
        }

        else {
            res.send(`succesfully uploaded ${newItem} to DB!`);
        }
    })
}










