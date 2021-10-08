const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Park = require("../models/Park");

router.get("/", (req, res, next) => {
  Park.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/api/Park", ({ body }, res) => {
  Park.create(body)
    .then((dbPark) => {
      res.json(dbPark);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.post("/api/Park/bulk", ({ body }, res) => {
  Park.insertMany(body)
    .then((dbPark) => {
      res.json(dbPark);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.post("/", (req, res, next) => {
  const park = new Park({
    _id: new mongoose.Types.ObjectId(),
    type: req.body.type,
    site_name: req.body.site_name,
    site_location: req.body.site_location,
    site_url: req.body.site_url,
    site_address: {
      type: req.body.type,
      line1: req.body.line1,
      line2: req.body.line2,
      line3: req.body.line3,
      city: req.body.city,
      statecode: req.body.statecode,
      postalcode: req.body.postalcode,
    },
    description: req.body.description,
  });

  park
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
  res.status(201).json({
    message: "Handling POST requests to /Parks",
    createdProduct: park,
  });
});

router.get("/:parkId", (req, res, next) => {
  const id = req.params.parkId;
  Park.findById(id)
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: "No valid entry found for park" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete("/:parkId", (req, res, next) => {
  const id = req.params.parkId;
  Park.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.patch("/:parkId", (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Park.update({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
