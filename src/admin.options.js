const AdminBro = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const { Company } = require('./companies/company.entity');

/** @type {AdminBro.AdminBroOptions} */
const options = {
  resources: [Company],
};

module.exports = options;
