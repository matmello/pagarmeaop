import 'jquery';
import 'aspectjs';

import settings from './settings';
import pagarme from './pagarme';
import aspect from './transactionAspect';

if (!settings.pagarmeApiKey || settings.pagarmeApiKey =='FILL_HERE') {
    throw new Error('Please, fill settings configuration with your api key.');
}

if (!settings.pagarmeApiKey || settings.pagarmeApiKey =='FILL_HERE') {
    throw new Error('Please, fill settings configuration with your encryption key.');
}

pagarme.exampleMethod(200);
pagarme.exampleMethod(100);
