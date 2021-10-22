const { usuarios_ls } = require("../../infrastructure/database");

const ListUsers = async (request, response) => {
  try {
    const listUsers = await usuarios_ls.findAll({
      order: [["id", "ASC"]],
    });
    response.status(200).send({
      status: true,
      fullData: listUsers,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error Users ", error);
    response.status(404).send({
      status: false,
      errorDetail: error.parent,
      errorFull: error,
      errorCode: response.statusCode,
      errorMessage: response.statusMessage,
    });
  }
};

const ListUsersLogin = async (request, response) => {
  try {
    const listUsersLogin = await usuarios_ls.findAll({
      where: {
        login: {
          login: request.params.login,
        },
      },
    });
    response.status(200).send({
      status: true,
      fullData: listUsersLogin,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error Users Login ", error);
    response.status(404).send({
      status: false,
      errorDetail: error.parent,
      errorFull: error,
      errorCode: response.statusCode,
      errorMessage: response.statusMessage,
    });
  }
};

module.exports = {
  ListUsers,
  ListUsersLogin,
};
