const router = require("express").Router();

const UsersControllers = require("../../controllers/users/controllers_users");

module.exports = (app) => {
  router.get("/", UsersControllers.findUsers);
  router.get("/:login", UsersControllers.findUsersLogin);
  router.post("/", UsersControllers.insertUsersLogins);
  router.put("/:login", UsersControllers.updateUsersLogins);

  // Criando API
  app.use("/login", router);
};
