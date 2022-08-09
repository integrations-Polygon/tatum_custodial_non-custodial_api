const fetch = require("node-fetch");

async function main() {

    const resp = await fetch(
        `https://api-eu1.tatum.io/v3/subscription`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'API_KEY_HERE'
          },
          body: JSON.stringify({
            type: 'ACCOUNT_INCOMING_BLOCKCHAIN_TRANSACTION',
            attr: {
              id: 'ACCOUNT_ID',
              url: 'https://webhook.tatum.io/account'
            }
          })
        }
      );
      
      const data = await resp.json();
      console.log(data);
}

main()