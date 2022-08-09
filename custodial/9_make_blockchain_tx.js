const fetch = require("node-fetch");

async function main() {
    const resp = await fetch(
        `https://api-eu1.tatum.io/v3/offchain/polygon/transfer`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'API_KEY_HERE'
          },
          body: JSON.stringify({
            nonce: 0,
            address: 'RECEIVER_ADDRESS',
            amount: '0.005',
            compliant: false,
            privateKey: 'PRIVATE_KEY',
            paymentId: '1234',
            senderAccountId: 'sender_account_id',
            senderNote: 'Sender note',
            gasLimit: '40000',
            gasPrice: '100'
          })
        }
      );
      
      const data = await resp.json();
      console.log(data);

}

main()