const {
  BusinessRules,
} = require("../../../application/business_rules/users/users");

module.exports = {
  findUsers(request, response) {
    BusinessRules.RepoFindUsers(request, response);
  },
  findUsersLogin(request, response) {
    BusinessRules.RepoFindByLogin(request, response);
  },
  updateUsersLogins(request, response) {
    BusinessRules.RepoUpdateByLogin(request, response);
  },
  insertUsersLogins(request, response) {
    BusinessRules.RepoInsertUsers(request, response);
  },
};
