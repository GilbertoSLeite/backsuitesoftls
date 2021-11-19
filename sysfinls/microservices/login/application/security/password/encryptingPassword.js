const bcrypt = require('bcrypt');

const EncryptingPassword = async (password) => {
  try {
    const encrypting = new Promise((resolve, reject) => {
      bcrypt.genSalt(8, async (err, salt) => {
        try {
          return (err ? reject(err) : bcrypt.hash(password, salt, async (errs, hash) => {
            try {
              return (!errs && (resolve(hash) === undefined ? hash : resolve(hash)));
            } catch (error) {
              // eslint-disable-next-line no-console
              console.log(`Error Durante Criptografia em hash: ${error}`);
              return error;
            }
          }));
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(`Error Durante Criptografia em gensalt: ${error}`);
          return error;
        }
      });
    });
    return encrypting.then((value) => value);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Error Tabela Users cryptPassword: ${error}`);
    return error;
  }
};

module.exports = {
  EncryptingPassword,
};
