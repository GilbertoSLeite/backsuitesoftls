const NullNameFile = require("./name_file/null_name_file");
const SizeNameFile = require("./name_file/size_name_file")

const returnEnd = {
    true: false,
    false: true,
}

module.exports = ErrorValidationImage = (request, response) => {
    const isNull = NullNameFile(request.body.nome_arquivo) && response.status(404).send({errorDetail: "O nome do Arquivo não pode ser nulo ou vazio!"})
    const maxSize = SizeNameFile(request.body.nome_arquivo) && response.status(404).send({errorDetail: "O nome do Arquivo não pode ter mais que 85 caracter!"})
    return returnEnd[isNull && maxSize]
}