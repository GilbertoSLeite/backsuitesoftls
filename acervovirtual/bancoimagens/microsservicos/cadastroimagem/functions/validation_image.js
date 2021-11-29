const IsNullData = (data) => ((data === null) ? true : false);
const SizeData = (data, size) => ((data.length > size) ? true : false);

module.exports = {
    IsNullData,
    SizeData,
};
