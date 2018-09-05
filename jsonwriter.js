const WebSocket = require('ws');
const fs = require('fs');


const txs = [];

const ws = new WebSocket('wss://ws.blockchain.info/inv', {
  perMessageDeflate: false,
});

ws.on('open', () => {
  console.log('OPEN');
  ws.send(JSON.stringify({ op: 'unconfirmed_sub' }));
});

ws.on('message', (data) => {
  if (txs.length < 30) {
    txs.push(JSON.parse(data));
  } else {
    fs.writeFile('txs.json', JSON.stringify(txs), (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});

