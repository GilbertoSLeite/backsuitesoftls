const { EncryptingPassword } = require('./encryptingPassword');

const HooksBeforeCreate = async (usuario, options) => {
  try {
    const userEncryptingPass = await EncryptingPassword(usuario.senha);
    // eslint-disable-next-line no-console
    console.log(options);
    return userEncryptingPass;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Error Função HooksBeforeCreate Users Create Catch: ${error}`);
    return error;
  }
};

module.exports = {
  HooksBeforeCreate,
};
