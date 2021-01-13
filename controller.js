const dummyData = require('./dummyData');
const url = require('url');

function getDetails(req, res) {
    res.end(JSON.stringify(dummyData));
}

function returnByFilter(req, res) {
    let respObject = {
        message: ''
    }
    const queryInfo = JSON.parse(JSON.stringify(url.parse(req.url, true).query));

    switch (queryInfo.filter) {
        case 'price':
            respObject = {
                message: `${queryInfo.filter} Details`,
                data: dummyData.priceDetails
            };
            res.write(JSON.stringify(respObject));
            break;

        case 'size':
            respObject = {
                message: `${queryInfo.filter} Details`,
                data: dummyData.sizeAvailable
            };
            res.write(JSON.stringify(respObject));
            break;

        case 'review':
            respObject = {
                message: `${queryInfo.filter} Details`,
                data: dummyData.reviews
            };
            res.write(JSON.stringify(respObject));
            break;

        case 'color':
            respObject = {
                message: `${queryInfo.filter} Details`,
                data: dummyData.colorsAvailable
            };
            res.write(JSON.stringify(respObject));
            break;

        case 'description':
            respObject = {
                message: `${queryInfo.filter} Details`,
                data: dummyData.description
            };
            res.write(JSON.stringify(respObject));
            break;

        default:
            res.write('Bad Parameter');
            break;
    }
}

module.exports = {
    getDetails,
    returnByFilter
}