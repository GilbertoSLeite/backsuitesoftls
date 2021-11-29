const path = require('path');
const { ImageExtension } = require('../../../functions/image_extension');

const ImageExtesion = (nameImage) => {
    ((ImageExtension[path.extname(nameImage).replace(".", "")] === undefined ? false : ImageExtension[path.extname(path.join(pathImage, nameImage)).replace(".", "")]));

}
module.exports = {
    ImageExtesion,
};
