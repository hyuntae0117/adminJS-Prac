const { default: AdminBro } = require('admin-bro');
const adminBroExpress = require('admin-bro-expressjs');

const { buildAuthenticatedRouter } = adminBroExpress;
const express = require('express');
const argon2 = require('argon2');
const { Company } = require('./companies/company.entity');

/**
 * @param {AdminBro} admin
 * @return {express.Router} router
 */
const buildAdminRouter = (admin) => {
  const router = buildAuthenticatedRouter(admin, {
    cookieName: 'admin-bro',
    cookiePassword: 'superlongandcomplicatedname',
    authenticate: async (email, password) => {
      // const company = await Company.findOne({ email });

      // if (company && await argon2.verify(company.encryptedPassword, password)) {
      //   return company.toJSON();
      // }

      // return null;
    },
  });
  return router;
};

module.exports = buildAdminRouter;
