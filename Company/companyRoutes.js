const router = express.Router();
const { findAllCompanies } = require("./companyController");

// GET ALL COMPANIES
router.get("/", findAllCompanies);

module.exports = router;
