const con = require('./conn')
const ilp = require('ilp')
const spsp = require('ilp-protocol-spsp')

function querypay(){

    async function pay (recipient, amount) {

        try {
            const plugin = ilp.createPlugin()
            await plugin.connect()
            await spsp.pay(plugin, {
              receiver: recipient,
              sourceAmount: amount
            })
          } catch(err) {
            console.log(err);
          }
       }

  con.query("SELECT * FROM `pay_and_deductions`", function (err, result, fields) {
    if (err) throw err;
    if (result.length > 0) {
        for (var i = 0; i < result.length; i++) {
            
               pay(result[i].receiver, result[i].sourceAmount) // pay receiver
               pay(result[i].receiver_tax, result[i].sourceAmout_tax) // pay tax
               pay(result[i].receiver_pension, result[i].souceAmount_pension) // pay pencion
            
                
        }
    } else {console.log("Nobody to pay")}
    });    
}
    module.exports = querypay;
