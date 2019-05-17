const pay = require('./ilp')
const con = require('./conn');
function querypay(){

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
