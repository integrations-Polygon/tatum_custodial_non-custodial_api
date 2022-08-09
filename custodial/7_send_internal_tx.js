const fetch = require("node-fetch");

async function main() {
    const resp = await fetch(
        `https://api-eu1.tatum.io/v3/ledger/transaction`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'API_KEY_HERE'
          },
          body: JSON.stringify({
            senderAccountId: 'sender_account_id',
            recipientAccountId: 'receiver_account_id',
            amount: '5',
            anonymous: false,
            compliant: false,
            transactionCode: '1_01_EXTERNAL_CODE',
            paymentId: '9625',
            recipientNote: 'Private note',
            baseRate: 1,
            senderNote: 'Sender note'
          })
        }
      );
      
      const data = await resp.json();
      console.log(data);

}

main()