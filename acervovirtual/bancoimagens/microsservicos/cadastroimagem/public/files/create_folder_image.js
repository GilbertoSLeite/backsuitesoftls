const fs = require('fs');

const CreateFolderImage = async () => {

console.log("Criando pasta...");

const hoje = new Date();
const dataHoje = hoje.getDate();
const mesHoje = hoje.getMonth();
const anoHoje = hoje.getFullYear();

const folderName = "images_day_" + (dataHoje.length < 2 ? "0" + dataHoje : dataHoje) + "_" + (mesHoje.length < 2 ? "0" + (+mesHoje + 1) : (+mesHoje + 1)) + "_" + anoHoje
const folderLocate = (__dirname + "/" + folderName);
const folderLocateSaveDB = folderLocate.slice(folderLocate.indexOf("/public"),folderLocate.length)

console.log("Nome Pasta ", folderLocate); 

const exists = fs.existsSync(folderLocate);

console.log(exists ? "Pasta já existe!" : "A Pasta não existe!");

    try {
        (!exists ? fs.mkdirSync(folderLocate, { recursive: true }, err => {
            console.log('fs error ', err)
        }) : console.log("Pasta " + folderLocate + " já existe!"))
    } catch (error) {
        console.log("Error na Função para Criar Pasta ", error);
    }
    
    return folderLocateSaveDB
} 

module.exports = {
    CreateFolderImage
}