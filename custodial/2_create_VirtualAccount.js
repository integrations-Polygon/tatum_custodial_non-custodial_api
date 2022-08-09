const fetch = require("node-fetch");

async function main() {

  const api_key = 'API_KEY_HERE'
  const external_id = '1'

  const resp = await fetch(
    `https://api-eu1.tatum.io/v3/ledger/account`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': api_key
      },
      body: JSON.stringify({
        currency: 'MATIC',
        customer: {
          accountingCurrency: 'USD',
          customerCountry: 'US',
          externalId: external_id,
          providerCountry: 'US'
        },
        compliant: false,
        accountCode: 'AC_1011_B',
        accountingCurrency: 'USD',
        accountNumber: external_id,
      })
    }
  );

  const data = await resp.json();
  console.log(data);
}

main()