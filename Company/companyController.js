const Company = require('./Company');

const findAllCompanies = (req, res) => {
  Company.find()
  .then(companies => {
  res.status(200).json(companies);
  })
  .catch(err => {
  res.status(500).json({ message: err });
  });
}

const findCompany = (req, res) => {
  Company.find({ _id: req.params.company_id })
  .then(company => {
  res.status(200).json(company);
  })
  .catch(err => {
  res.status(500).json({ message: err });
  });
}

const createCompany = (req, res) => {
  Company.create(req.body)
  .then(company => {
    res.status(200).json(company);
  })
  .catch(err => {
    res.status(500).json({message: err});
  })
}

const modifyCompany = (req, res) => {
  Company.updateOne({ _id: req.params.company_id }, req.body)
  .then(company => {
    res.status(200).json({ message: 'Company updated!' });
  })
  .catch(err => {
    res.status(500).json({ message: err });
  })
}

const deleteCompany = (req, res) => {
  Company.deleteOne({ _id: req.params.company_id })
  .then(company => {
    res.status(200).json({ message: 'Company deleted!' });
  })
  .catch(err => {
    res.status(500).json({ message: err });
  })
}

module.exports = {
    findAllCompanies,
    findCompany,
    createCompany,
    modifyCompany,
    deleteCompany
}