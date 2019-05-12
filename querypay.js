const pay = require('./ilp')
const con = require('./conn');
function querypay(){

  con.query("SELECT * FROM `pay_list` where `status` = 1", function (err, result, fields) {
    if (err) throw err;
    if (result.length > 0) {
        for (var i = 0; i < result.length; i++) {
            // use '$spsp.ilp-test.com' if you're on the testnet
               pay( result[i].receiver,
                result[i].sourceAmount)
            console.log('Receiver: ', result[i].receiver);
            console.log('sourceAmount: ', result[i].sourceAmount);                
        }
    } else {console.log("Nobody to pay")}
    });    
}
      
    module.exports = querypay;
