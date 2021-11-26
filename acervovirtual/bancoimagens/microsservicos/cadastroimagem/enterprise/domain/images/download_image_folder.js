const multer = require('multer');
const { CreateFolderImage } = require('../../public/files/create_folder_image');

const DownloadImageFolder = async (req, res) => {
    //Criando ou Retornando Pasta de Download das Imagens
    const pathImage = await CreateFolderImage();
    console.log('pathImage DownloadImageFolder ', pathImage)
    const parser = multer({ dest: pathImage })
    try {
        parser.single(req.body.nome_imagem)(req, res, err => {
            err ? res.status(500).json({ error: err}) : res.status(200).json(`/uploads/${req.file.filename}`)
        });        
    } catch (error) {
        console.log("Ocorreu error ao tentar efetuar Download da Imagem ", error)
    }
}

module.exports = {
    DownloadImageFolder,
}