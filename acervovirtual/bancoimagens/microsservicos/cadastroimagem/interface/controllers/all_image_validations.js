const { IsNullData, SizeData } = require("../../functions/validation_image")

var callbackFunction = false;

module.exports = ErrorValidationImage = (request, response) => {

    const ErrorNullImageName = () => {
        const result = IsNullData(request.body.nome_imagem) && response.status(405).send({
            status: false,
            errorDetail: "O nome da imagem não pode ser nulo ou vazio!"
        });
        callbackFunction = (result.statusCode === 405 ? true : false);
        if (callbackFunction) {
            return result;
        };
    };
    ErrorNullImageName();

    const ErrorSizeImageName = () => {
        const result = SizeData(request.body.nome_imagem, 85) && response.status(405).send({
            status: false,
            errorDetail: "O nome da imagem não pode ter mais que 85 caracter!"
        });
        callbackFunction = (result.statusCode === 405 ? true : false);
        if (callbackFunction) {
            return result;
        };
    };
    ErrorSizeImageName();

    const ErrorNullFileName = () => {
        const result = IsNullData(request.body.nome_arquivo) && response.status(405).send({
            status: false,
            errorDetail: "O nome do arquivo não pode ser nulo ou vazio!"
        });
        callbackFunction = (result.statusCode === 405 ? true : false);
        if (callbackFunction) {
            return result;
        };
    };
    ErrorNullFileName();

    const ErrorSizeFileName = () => {
        const result = SizeData(request.body.nome_arquivo, 85) && response.status(405).send({
            status: false,
            errorDetail: "O nome do arquivo não pode ter mais que 85 caracter!"
        });
        callbackFunction = (result.statusCode === 405 ? true : false);
        if (callbackFunction) {
            return result;
        };
    };
    ErrorSizeFileName();

    const ErrorNullTitleName = () => {
        const result = IsNullData(request.body.titulo_imagem) && response.status(405).send({
            status: false,
            errorDetail: "O título da imagem não pode ser nulo ou vazio!"
        });
        callbackFunction = (result.statusCode === 405 ? true : false);
        if (callbackFunction) {
            return result;
        };
    };
    ErrorNullTitleName();

    const ErrorSizeTitleName = () => {
        const result = SizeData(request.body.titulo_imagem, 85) && response.status(405).send({
            status: false,
            errorDetail: "O título da imagem não pode ter mais que 85 caracter!"
        });
        callbackFunction = (result.statusCode === 405 ? true : false);
        if (callbackFunction) {
            return result;
        };
    };
    ErrorSizeTitleName();

    return callbackFunction;
};
