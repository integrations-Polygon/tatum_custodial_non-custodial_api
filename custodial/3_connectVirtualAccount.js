const fetch = require("node-fetch");

async function main() {

  const index = 1;
  const id = 'ACCOUNT_ID';
  const api_key = 'API_KEY_HERE';
  const xpub = 'xpub_key'

  //generate address using xpub(master wallet)
  const address_resp = await fetch(
    `https://api-eu1.tatum.io/v3/polygon/address/${xpub}/${index}`,
    {
      method: 'GET',
      headers: {
        'x-api-key': 'API_KEY_HERE'
      }
    }
  );

  const address_data = await address_resp.json();
  const address = address_data.address;

  // connect to virtual account to address

  const query = new URLSearchParams({ index: index }).toString();
  const resp = await fetch(
    `https://api-eu1.tatum.io/v3/offchain/account/${id}/address/${address}?${query}`,
    {
      method: 'POST',
      headers: {
        'x-api-key': api_key
      }
    }
  );

  const data = await resp.json();
  console.log(data);
}

main()