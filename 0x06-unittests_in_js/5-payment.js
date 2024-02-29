const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const payment = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${payment}`);
}
module.exports=sendPaymentRequestToApi;