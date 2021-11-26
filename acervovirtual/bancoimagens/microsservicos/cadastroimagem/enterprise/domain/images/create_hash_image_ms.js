const crypto = require('crypto');

const HashImageMs = (nameImage, titleImagem) => {
      
// Definindo a chave para criação da hash
const secret = nameImage + "_" + titleImagem;

// Chamando o metódo para criar a hash
const hash = crypto.createHash('sha256', secret)                
                   // Atualizando os dados
                   .update(secret)  
                   // codificando a hash em hexadecimal
                   .digest('hex');
  
// Exibindo a hash
console.log("Hash " + hash + " criado para a imagem " + nameImage);

//Returna Hash para uso
return hash;
}

module.exports = {
    HashImageMs,
}