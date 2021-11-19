const { EncryptingPassword } = require('./encryptingPassword');

const HooksBeforeBulkUpdate = async (usuario, options) => {
  try {
    const ResultEncryptingPass = await EncryptingPassword(usuario.attributes.senha);
    // eslint-disable-next-line no-console
    console.log(options);
    return ResultEncryptingPass;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Error Função HooksBeforeBulkUpdate da Tabela Users Create Catch: ${error}`);
    return error;
  }
};

module.exports = {
  HooksBeforeBulkUpdate,
};
