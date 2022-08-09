const fetch = require("node-fetch");

async function main() {

  const api_key = 'API_KEY_HERE'

  //1- generate xpub and mnemonic
  const query = new URLSearchParams().toString();
  const resp1 = await fetch(
    `https://api-eu1.tatum.io/v3/polygon/wallet?${query}`,
    {
      method: 'GET',
      headers: {
        'x-api-key': api_key
      }
    }
  );

  const data = await resp1.json();
  const xpub = data.xpub;
  const mnemonic = data.mnemonic;

  //2- generate address using xpub

  const index = '0';
  const resp2 = await fetch(
    `https://api-eu1.tatum.io/v3/polygon/address/${xpub}/${index}`,
    {
      method: 'GET',
      headers: {
        'x-api-key': api_key
      }
    }
  );

  const address = await resp2.json();

  //3- to generate private key using mnemonic

  const resp3 = await fetch(
    `https://api-eu1.tatum.io/v3/polygon/wallet/priv`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': api_key
      },
      body: JSON.stringify({
        index: 0,
        mnemonic: mnemonic
      })
    }
  );

  const privatekey = await resp3.json();

  //to console all data
  console.log(data)
  console.log(address)
  console.log(privatekey)

}

main()