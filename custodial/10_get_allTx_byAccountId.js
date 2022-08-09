const fetch = require("node-fetch");

async function main() {

  const query = new URLSearchParams({
    pageSize: '10',
    offset: '0',
    count: 'false'
  }).toString();
  
  const resp = await fetch(
    `https://api-eu1.tatum.io/v3/ledger/transaction/account?${query}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'API_KEY_HERE'
      },
      body: JSON.stringify({
        id: 'ACCOUNT_ID', 
        currency: 'MATIC',
      })
    }
  );
  
  const data = await resp.json();
  console.log(data);
}

main()