const { usuarios_ls } = require("../../infrastructure/database");

const InsertUsersLogin = async (request, response) => {
  try {
    const CreateUsersLogin = await usuarios_ls.create({
      id: request.body.id,
      nome_usuario: request.body.nome_usuario,
      cpf: request.body.cpf,
      nascimento: request.body.nascimento,
      email: request.body.email,
      login: request.body.login,
      senha: request.body.senha,
      administrador_ls: request.body.administrador_ls,
      hash_usuarios_ls: request.body.hash_usuarios_ls,
      situacao_usuario: request.body.situacao_usuario,
    });
    response.status(200).send({
      status: true,
      fullData: CreateUsersLogin,
      idUsers: CreateUsersLogin.id,
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
  InsertUsersLogin,
};
