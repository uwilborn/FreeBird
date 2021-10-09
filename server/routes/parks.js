const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
const Axios = require("axios");
const Park = require("../models/Park");

router.get("/api/parks/results", (req, res) => {
  console.log("========API Call======");
  Axios.get(
    "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=em9tUC920fypAgMENGc0OWfY7SfamU6icv4nEdsk"
  ).then((APIData) => {
    console.log("API", APIData);
    res.json(APIData);
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

module.exports = router;
