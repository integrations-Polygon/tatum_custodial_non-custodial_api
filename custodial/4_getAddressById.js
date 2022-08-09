const fetch = require("node-fetch");

async function main() {
  const id = 'ACCOUNT_ID';

const resp = await fetch(
  `https://api-eu1.tatum.io/v3/offchain/account/${id}/address`,
  {
    method: 'GET',
    headers: {
      'x-api-key': 'API_KEY_HERE'
    }
  }
);

const data = await resp.json();
console.log(data);
}

main()