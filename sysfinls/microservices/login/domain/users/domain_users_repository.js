const { InsertUsersLogin } = require("./domain_insert_users");
const { ListUsers, ListUsersLogin } = require("./domain_list_users");
const { UpdateUsersByLogin } = require("./domain_update_users");

const RepoFindUsers = (resquet, response) => ListUsers(resquet, response);
const RepoFindByLogin = (resquet, response) =>
  ListUsersLogin(resquet, response);
const RepoUpdateByLogin = (resquet, response) =>
  UpdateUsersByLogin(resquet, response);
const RepoInsertUsers = (resquet, response) =>
  InsertUsersLogin(resquet, response);

module.exports = {
  RepoFindUsers,
  RepoFindByLogin,
  RepoUpdateByLogin,
  RepoInsertUsers,
};
