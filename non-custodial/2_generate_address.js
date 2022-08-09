const fetch = require("node-fetch");

async function main() {

const xpub = 'xpub_key';
const index = '2';
const resp = await fetch(
  `https://api-eu1.tatum.io/v3/polygon/address/${xpub}/${index}`,
  {
    method: 'GET',
    headers: {
      'x-api-key': 'API_KEY_HERE'
    }
  }
);

const data= await resp.json();
console.log(data)
}

main();