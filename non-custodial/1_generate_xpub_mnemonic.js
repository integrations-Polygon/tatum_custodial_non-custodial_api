const fetch = require("node-fetch");
const propertiesReader = require('properties-reader');

async function main() {

  const query = new URLSearchParams().toString();
  const resp = await fetch(
    `https://api-eu1.tatum.io/v3/polygon/wallet?${query}`,
    {
      method: 'GET',
      headers: {
        'x-api-key': '052a4884-e20c-406b-a302-f67ea4f5b58f'
      }
    }
  );

  const data= await resp.json();
  console.log(data)

}

main();