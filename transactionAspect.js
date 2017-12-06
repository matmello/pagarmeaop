import * as aspectjs from 'aspectjs';
import * as advised from './pagarme';


let adviser = {
    registerTransaction: function(amount){
        console.log(`transaction request of ${amount} sent to payment gateway`);
    }
};

aspectjs.after(advised.default, "exampleMethod").add(adviser, "registerTransaction");
