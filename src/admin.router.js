const { default: AdminBro } = require('admin-bro');
const adminBroExpress = require('admin-bro-expressjs');

const { buildRouter } = adminBroExpress;
const express = require('express');

/**
 * @param {AdminBro} admin
 * @return {express.Router} router
 */
const buildAdminRouter = (admin) => {
  const router = buildRouter(admin);
  return router;
};

module.exports = buildAdminRouter;
