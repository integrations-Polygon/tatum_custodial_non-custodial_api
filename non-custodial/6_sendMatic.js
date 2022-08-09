const fetch = require("node-fetch");

async function main() {

    const private_key = 'private_key'
    const receiver= 'ADDRESS'
    const resp = await fetch(
        `https://api-eu1.tatum.io/v3/polygon/transaction`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'API_KEY_HERE'
          },
          body: JSON.stringify({
            data: '0x',
            nonce: 125,
            to: receiver,
            currency: 'MATIC',
            fee: {
              gasLimit: '40000',
              gasPrice: '50'
            },
            amount: '0.01',
            fromPrivateKey: private_key
          })
        }
      );
      
      const data = await resp.json();
      console.log(data);

}

main()