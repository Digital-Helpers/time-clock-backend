const router = require('express').Router();
const { findAllCompanies, findCompany, createCompany, modifyCompany, deleteCompany } = require("./companyController");

// GET ALL COMPANIES
router.get('/', findAllCompanies);

// FINDS A COMPANY BY COMPANY_ID
router.get('/:company_id', findCompany);

// CREATE A COMPANY
router.post('/', createCompany);

// MODIFIES EXISTING COMPANY FOUND BY ID
router.put('/:company_id', modifyCompany);

// DELETES A COMPANY FOUND BY ID
router.delete('/:company_id', deleteCompany);



module.exports = router;
