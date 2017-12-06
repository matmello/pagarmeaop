import 'future';
import settings from './settings';

export default {
    generatePayment(cardHash, amount, user) {
        let transaction = new Future();

            $.post(settings.endpoint + 'transactions', {
              data: {
                'api_key':        settings.pagarmeApiKey,
                'amount':         amount,
                'card_hash':      cardHash,
                'payment_method': 'credit_card',
                'customer':       user,
                'postback_url':   settings.postbackUrl,
              },
            }, function (err, res) {
              if (err) {
                transaction.return({error: err});
              } else {
                transaction.return(res.data);
              }
            });

            return transaction.wait();
    },
    generatePaymentWithSplit(cardHash, amount, user) {
        let transaction = new Future();

            $.post(settings.endpoint + 'transactions', {
              data: {
                'api_key':        settings.pagarmeApiKey,
                'amount':         amount,
                'card_hash':      cardHash,
                'payment_method': 'credit_card',
                'customer':       user,
                'postback_url':   settings.postbackUrl,
                'split_rules':    [{
                    'recipient_id': settings.mainRecipient,
                    'percentage':   settings.mainRecipientPorcentage,
                  }, {
                    'recipient_id': settings.marketplaceRecipient,
                    'percentage':   settings.marketplaceRecipientPorcentage,
                  },
              ],
              },
            }, function (err, res) {
              if (err) {
                transaction.return({error: err});
              } else {
                transaction.return(res.data);
              }
            });

            return donation.wait();
    },
    cancelPayment(id) {
        let cancelation = new Future();

        $.post(settings.endpoint + 'transactions/' + id + '/refund', {
            data: {
              'api_key': settings.pagarmeApiKey,
            },
          }, function (error, result) {
            if (error) {
              cancelation.return({error: error});
            } else {
                cancelation.return(result.data);
            }
          });
          return cancelation.wait();
    },
    exampleMethod(amount) {
        // Simulates a transaction for testing purposes

        return {
            id: Math.random(),
            status: 'success',
            amount: amount
        }
    },
  }
