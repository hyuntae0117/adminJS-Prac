const AdminBro = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminCompany = require('./companies/company.admin');

/** @type {AdminBro.AdminBroOptions} */
const options = {
  resources: [AdminCompany],
};

module.exports = options;
