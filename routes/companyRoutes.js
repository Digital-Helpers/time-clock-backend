const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Company = require("../models/Company");

// GET ALL COMPANIES

router.get("/", (req, res) => {
  Company.find()
    .then(companies => {
      res.status(200).json(companies);
    })
    .catch(err => console.log(err));
});

// POST ADD A NEW COMPANY TO DB

router.post("/", (req, res) => {
  const { adminName, email, phone, employees } = req.body;
  newCompany = new Company({
    adminName: adminName,
    email: email,
    phone: phone,
    companyId: new mongoose.Types.ObjectId(),
    employees: employees
  });
  newCompany
    .save()
    .then(company => {
      res.status(201).json(company);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
