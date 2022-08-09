const fetch = require("node-fetch");

async function main() {

    const resp = await fetch(
        `https://api-eu1.tatum.io/v3/polygon/wallet/priv`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'API_KEY_HERE'
          },
          body: JSON.stringify({
            index: 1,
            mnemonic: '<mnemonic_here>'
          })
        }
      );
      
      const data = await resp.json();
      console.log(data);
}

main()