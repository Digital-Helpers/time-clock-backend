const company = require('./Company');

const findAllCompanies = (req, res) => {
    Company.find()
    .then(companies => {
    res.status(200).json(companies);
    })
    .catch(err => {
    res.status(500).json({ message: err });
    });
}

module.exports = {
    findAllCompanies,
    createCompany,
}