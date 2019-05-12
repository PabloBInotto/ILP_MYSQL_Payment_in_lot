function pay(){
    const plugin = require('ilp-plugin')()
    const SPSP = require('ilp-protocol-spsp')
    const con = require('./conn');
    async function run () {
      console.log('make payment in lot every 5 secounds')
               // use '$spsp.ilp-test.com' if you're on the testnet
               await SPSP.pay(plugin, {
                   
                })
               
      console.log('5 secounds wages paid to your paymentpointer!')
      }
    run().catch(e => console.error(e))
    }
    module.exports = pay;
