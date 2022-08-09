const fetch = require("node-fetch");

async function main() {

    const reference = 'reference_id';
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/ledger/transaction/reference/${reference}`,
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