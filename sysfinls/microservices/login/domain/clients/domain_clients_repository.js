const { ListUsers, ListUsersLogin } = require("./domain_list_users");

const find = (resquet, response) => ListUsers(resquet, response);
const findLogin = (resquet, response) => ListUsersLogin(resquet, response);

module.exports = {
  find,
  findLogin,
};
