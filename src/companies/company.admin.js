const AdminBro = require('admin-bro');
const { Company } = require('./company.entity');
const { after: passwordAfterHook, before: passwordBeforeHook } = require('./actions/password.hook');

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    encryptedPassword: {
      // isVisible: false,
      isDisabled: true,
    },
    password: {
      type: 'password',
    },
  },
  actions: {
    show: {
      before: async (request) => {

      },
    },
    new: {
      after: passwordAfterHook,
      before: passwordBeforeHook,
    },
    edit: {
      after: passwordAfterHook,
      before: passwordBeforeHook,
    },
  },
};

module.exports = {
  options,
  resource: Company,
};
