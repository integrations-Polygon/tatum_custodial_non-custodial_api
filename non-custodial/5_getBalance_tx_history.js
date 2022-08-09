const fetch = require("node-fetch");

async function main() {

    const api_key= '052a4884-e20c-406b-a302-f67ea4f5b58f'
    const address = '0xC980bBe81d7AE0CcbF72B6AbD59534dd8d176c77';

    // fetch balance
    const balance_resp = await fetch(
      `https://api-eu1.tatum.io/v3/polygon/account/balance/${address}`,
      {
          method: 'GET',
          headers: {
              'x-api-key': api_key
          }
      }
  );

  const balance_data= await balance_resp.json();

    //get current block number
    const block_resp = await fetch(
        `https://api-eu1.tatum.io/v3/polygon/block/current`,
        {
          method: 'GET',
          headers: {
            'x-api-key': api_key
          }
        }
      );
    const latest_block = await block_resp.json()
    
    //fetch all transaction
    const query = new URLSearchParams({
        pageSize: '1',
        offset: '0',
        from: '1',
        to: latest_block,
        sort: 'ASC'
    }).toString();

    const resp = await fetch(
        `https://api-eu1.tatum.io/v3/polygon/account/transaction/${address}?${query}`,
        {
            method: 'GET',
            headers: {
                'x-api-key': api_key
            }
        }
    );

    const data = await resp.json();
    console.log(data)
    console.log('latest block: ',latest_block)
    console.log('balance: ', balance_data.balance)

}

main()