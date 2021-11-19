const ComparePassword = async (password, cb ) => {
  try {
    return bcrypt.compare(password, this.password, async (err, isMatch) => {
      try {
        return (err ? cb(err) : cb(null, isMatch));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`Error Função ComparePassword usuario_ls bcrypt.compare: ${error}`);
        return error;
      }  
    }); 
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Error Função ComparePassword da Tabela Users bcrypt.compare: ${error}`);
    return error;    
  }
};

module.exports ={
  ComparePassword,
};
