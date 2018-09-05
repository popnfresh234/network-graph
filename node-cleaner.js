let links = [];
let nodes = [];
const radius = 3;
const transactions = [{
  op: 'utx',
  x: {
    lock_time: 0,
    ver: 1,
    size: 223,
    inputs: [{
      sequence: 4294967295,
      prev_out: {
        spent: true, tx_index: 371493091, type: 0, addr: '1MpSEF2eGKtZrLPVmBxWVMLY5Ei3Fit7z', value: 176339, n: 1, script: '76a91403efea7c0cdc09a07481b40fbdb8a8885f0e618a88ac',
      },
      script: '47304402202952cf2b881975558e4083afe23a9c5fbf5ae5aab7fc0d944c98361f6c55659402201e13743ef550d223abfa3d10dcd3fbf473f3180dbb2921e492b45f66284b6bc60121030e3ea08971059f1225342e758e3c93a9bc021a4a5ea827999060c2163900c662',
    }],
    time: 1536121911,
    tx_index: 371774235,
    vin_sz: 1,
    hash: 'd77a83a5735a18b1017f57d072074f15241bcfe629d112376367975cf270835b',
    vout_sz: 2,
    relayed_by: '127.0.0.1',
    out: [{
      spent: false, tx_index: 371774235, type: 0, addr: '34ydunCgtyGQd2XfxCpHaZ8rfoH8b62aco', value: 85770, n: 0, script: 'a914240d12b28620512a6336ce1fc99735ef90e27ca487',
    }, {
      spent: false, tx_index: 371774235, type: 0, addr: '1Dq9g2QRjdmxGF9AmnpP8go8RjA12z7Aad', value: 87631, n: 1, script: '76a9148cbcb71cfc903c0f5e37911a95627b499c8808d588ac',
    }],
  },
}, {
  op: 'utx',
  x: {
    lock_time: 0,
    ver: 1,
    size: 217,
    inputs: [{
      sequence: 4294967295,
      prev_out: {
        spent: true, tx_index: 371774235, type: 0, addr: '34ydunCgtyGQd2XfxCpHaZ8rfoH8b62aco', value: 85770, n: 0, script: 'a914240d12b28620512a6336ce1fc99735ef90e27ca487',
      },
      script: '160014aa9b647aedb59dd4dd7111f406de9dcf6197b8e2',
    }],
    time: 1536121913,
    tx_index: 371774240,
    vin_sz: 1,
    hash: 'd4945a790beceace48b869975f445682d16c08f9c892b43875a750946769f5a7',
    vout_sz: 1,
    relayed_by: '0.0.0.0',
    out: [{
      spent: false, tx_index: 371774240, type: 0, addr: '18TwkXGvRnmRAWAGW9DWNE6uSnMHJGc4r9', value: 79849, n: 0, script: '76a91451e1661841e3d6fe48c06e001c8dadc27f14cd6d88ac',
    }],
  },
},
{
  op: 'utx',
  x: {
    lock_time: 0,
    ver: 1,
    size: 404,
    inputs: [{
      sequence: 4294967295,
      prev_out: {
        spent: true, tx_index: 371771181, type: 0, addr: '37Tm3Qz8Zw2VJrheUUhArDAoq58S6YrS3g', value: 99628284, n: 1, script: 'a9143f4eecba122ad73039d481c8d37f99cb4f887cd887',
      },
      script: '004830450221008c18cdf5819560d63c4bde067d4cdc812d02166dde9099b97134e43bdd6d198c02207c94e085a218c6d82b4fd10467757e4a0552231cda3bdac1b3e5d9fce96f6bcd0148304502210096c2c222deb5a9fbc3e17ecdf0b85f6511bbec04011c87c22f0ae4b5ec2790b602201f317c720c5dca5c48c215b4e60267a1ffdc6f629576a3f51ac41b72dfaa77f2014c6952210246ccf4de0c54cc7f3354cdd993c2c50cf965fd82238b89659fbd73a1b4bf05a121024fc59f72272a897fe43803374969f396058152fe4765a8d15216f94624257b1b21022593bc69ecbf3bbcc3c58082267cb49dadaf4ca8dbf1b2297338a9d628c4297653ae',
    }],
    time: 1536122043,
    tx_index: 371774504,
    vin_sz: 1,
    hash: '75c067ab5a886bcd1d4b9d07af5663428532c20c899f9e8722e07714c99d9feb',
    vout_sz: 3,
    relayed_by: '0.0.0.0',
    out: [{
      spent: false, tx_index: 371774504, type: 0, addr: '1P7jPrFFoabHVQ8gZkMC4ehMUgnFocWfNa', value: 546, n: 0, script: '76a914f298a6d5da6823731c0ae5c8f8e848bbcbccb4db88ac',
    }, {
      spent: false, tx_index: 371774504, type: 0, addr: '37Tm3Qz8Zw2VJrheUUhArDAoq58S6YrS3g', value: 99625738, n: 1, script: 'a9143f4eecba122ad73039d481c8d37f99cb4f887cd887',
    }, {
      spent: false, tx_index: 371774504, type: 0, addr: null, value: 0, n: 2, script: '6a146f6d6e69000000000000001f0000002f43be2e00',
    }],
  },
}, {
  op: 'utx',
  x: {
    lock_time: 0,
    ver: 1,
    size: 402,
    inputs: [{
      sequence: 4294967295,
      prev_out: {
        spent: true, tx_index: 371771151, type: 0, addr: '37Tm3Qz8Zw2VJrheUUhArDAoq58S6YrS3g', value: 13723578, n: 1, script: 'a9143f4eecba122ad73039d481c8d37f99cb4f887cd887',
      },
      script: '0048304502210098a04bb2e46a3e0ca770f8553e0a98e3e4aa1870e9e96c463d25439ceb6f6078022057f4ff55317d6ed0aed5c158d6a99af26a83f44ffd6e3406ec88baf56ca5c53601483045022100b32e7389c98a635b27b5078268a87d015e26203e2c24d5cc78267973a6600be9022071732d8e995d7b509908a7b534cbc0ba57811a559e376ab7db0c0169fc7dd323014c6952210246ccf4de0c54cc7f3354cdd993c2c50cf965fd82238b89659fbd73a1b4bf05a121024fc59f72272a897fe43803374969f396058152fe4765a8d15216f94624257b1b21022593bc69ecbf3bbcc3c58082267cb49dadaf4ca8dbf1b2297338a9d628c4297653ae',
    }],
    time: 1536122043,
    tx_index: 371774505,
    vin_sz: 1,
    hash: 'e6cff8f7d4d5eff0751171e269b3e9b355c54fb78d587db54e9d22c9ec746192',
    vout_sz: 3,
    relayed_by: '0.0.0.0',
    out: [{
      spent: false, tx_index: 371774505, type: 0, addr: '3JBjdiseFrtvWp5ZGTrYsN8KHxLLbfP14x', value: 546, n: 0, script: 'a914b4f07a2a7ef0826bdf6b28262d8dcc9f2d7f54a087',
    }, {
      spent: false, tx_index: 371774505, type: 0, addr: '37Tm3Qz8Zw2VJrheUUhArDAoq58S6YrS3g', value: 13721032, n: 1, script: 'a9143f4eecba122ad73039d481c8d37f99cb4f887cd887',
    }, {
      spent: false, tx_index: 371774505, type: 0, addr: null, value: 0, n: 2, script: '6a146f6d6e69000000000000001f0000005445e6b380',
    }],
  },
}, {
  op: 'utx',
  x: {
    lock_time: 0,
    ver: 2,
    size: 1759,
    inputs: [{
      sequence: 4294967294,
      prev_out: {
        spent: true, tx_index: 371757757, type: 0, addr: '37zUPkVV1fyJL2MDxMTKUJ17iWXsEtGW25', value: 1084530, n: 0, script: 'a914451debdc6dd8e541806c1757c82e029729732e6187',
      },
      script: '1600147db40d88b026821df7965cdef0b88dab235de946',
    }, {
      sequence: 4294967294,
      prev_out: {
        spent: true, tx_index: 371763204, type: 0, addr: '3MFk1FejYqh6Y2iyz8SecS63TsBf5KqLw3', value: 12193562, n: 0, script: 'a914d69ad40a97a6e72e2031e06e6337912a9eca03d687',
      },
      script: '160014882cd8fef6c29a24a2fe9ab67003cc74b3150c18',
    }, {
      sequence: 4294967294,
      prev_out: {
        spent: true, tx_index: 371747263, type: 0, addr: '3F9FXzj6DoxtkMVVHwhzEPEtcSFWZTrdsY', value: 2541934, n: 0, script: 'a914938fcff2676923623e86f69bef108564f38282e987',
      },
      script: '1600147aa7689f55d388466d49bac5d17739ff4fc062ec',
    }, {
      sequence: 4294967294,
      prev_out: {
        spent: true, tx_index: 371742018, type: 0, addr: '3KUNyFmsEWNvAaaxakYfnFk6tfprfDkEYW', value: 309000, n: 0, script: 'a914c30e6cf0e736694d876f6e5e10786562dbc6f6e287',
      },
      script: '160014ee291d5a323210fe9408cbec6d240e7806871523',
    }, {
      sequence: 4294967294,
      prev_out: {
        spent: true, tx_index: 371750942, type: 0, addr: '3EYeUzC4EGzutczfZZ938HPkfNbVP9noBM', value: 32907425, n: 0, script: 'a9148d0468e594bb457ae99f706aae289ab0709dfe7287',
      },
      script: '160014af7478091316a87efc8b961cbe8beff112c2251d',
    }, {
      sequence: 4294967294,
      prev_out: {
        spent: true, tx_index: 371759975, type: 0, addr: '31qoH7myXabih6jbUtYFhMVmkNzMXpSMi8', value: 400000, n: 1, script: 'a91401a9301ad940df762cbbc5921e4732a2e46e916487',
      },
      script: '160014ce419fc83955466b0e0f9ae8a3f93ad837bc716e',
    }, {
      sequence: 4294967294,
      prev_out: {
        spent: true, tx_index: 371772625, type: 0, addr: '3KFvZsLVxSV4WzgX6tALghB372U8np3ouh', value: 12288949, n: 1, script: 'a914c0b364ca2da0e1975eb75a2028e88287b8d7192e87',
      },
      script: '160014ff2e1d8b886f91a9571cd5b79500f14b28232ee2',
    }, {
      sequence: 4294967294,
      prev_out: {
        spent: true, tx_index: 371768676, type: 0, addr: '3LBhWeD1JQ2eUvJvFBhvk5DnMn89SQX3T8', value: 4390000, n: 0, script: 'a914cadef5156a8a81ac82c2be779220a998c195b5ce87',
      },
      script: '160014219ea54d9ce4e13b081627e3a49a86d83c24d9e7',
    }, {
      sequence: 4294967294,
      prev_out: {
        spent: true, tx_index: 371750555, type: 0, addr: '39mT8MzKVps19w9Y3B9p9xrwFC75oPjE6L', value: 35800000, n: 1, script: 'a9145897b58c1859bd650e1df75e85829ccc4bbdafa587',
      },
      script: '160014e65645b49ad4d817f1936b3e54885d651e857861',
    }, {
      sequence: 4294967294,
      prev_out: {
        spent: true, tx_index: 371765762, type: 0, addr: '3MeXEpmAj4NnBhZkVHhuRkBiiLQS9KBCtf', value: 899523, n: 1, script: 'a914dae9bd26aea0d6a2069a614c3d2fabc36ebdfe4d87',
      },
      script: '1600145e5157937c2b7547c52282b4ed6a46a907b40ee3',
    }],
    time: 1536122039,
    tx_index: 371774496,
    vin_sz: 10,
    hash: '46baca9f08f5489319230081b777f25198347eccccdf342039bb86f47ceb6028',
    vout_sz: 1,
    relayed_by: '0.0.0.0',
    out: [{
      spent: false, tx_index: 371774496, type: 0, addr: '3BzzT2Ukq8JPDZdY4hdGmx9NYmgogP58Hr', value: 102806514, n: 0, script: 'a914711783ac7a013fef0c56d93d9acfa6c80d25f1cd87',
    }],
  },
}];


const txLimit = 2;

const canvas = document.querySelector('canvas');
// canvas.addEventListener('mousemove', (event) => {
//   console.log(event.clientX);
// });

const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const { width, height } = canvas;


function drawLink(d) {
  context.moveTo(d.source.x, d.source.y);
  context.lineTo(d.target.x, d.target.y);
}

function drawNode(d) {
  context.beginPath();
  if (d.x > (width / 2) - (radius * 2) || d.x < (width / -2) + (radius * 2)) {
    const newX = d.x > 1 ? width / 2 - radius * 2 : width / -2;
    d.x = newX;
  }

  if (d.y > (height / 2) - (radius * 2) || d.y < (height / -2) + (radius * 2)) {
    const newY = d.y > 1 ? height / 2 - radius * 2 : height / -2;
    d.y = newY;
  }

  context.moveTo(d.x + radius, d.y);
  context.arc(d.x, d.y, radius, 0, 2 * Math.PI);

  const nodeColorMap = {
    0: () => '#002aff', // Blue, Transaction
    1: () => '#00ff3f', // Green, Input
    2: () => '#ffd400', // Yellow, Output
    3: () => '#aa00ff', // Purple
  };
  const fn = nodeColorMap[d.type];
  if (fn) {
    context.strokeStyle = fn();
    context.fillStyle = fn();
  } else {
    context.strokeStyle = '#ff00ee';
    context.fillStyle = '#ff00ee';
  }
  context.fill();
  context.fillText(d.id, d.x + 10, d.y);
  context.stroke();
}


function ticked() {
  context.clearRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);
  context.beginPath();
  context.beginPath();
  links.forEach(drawLink);
  context.strokeStyle = '#000000';
  context.stroke();


  nodes.forEach(drawNode);
  context.restore();
}

const simulation = d3.forceSimulation(nodes)
  .force('charge', d3.forceManyBody())
  .force('link', d3.forceLink(links).id((d => d.id)).distance(50).strength(1))
  .force('collision', d3.forceCollide().radius(d => d.radius))
//   .force('x', d3.forceX())
//   .force('y', d3.forceY())
  .on('tick', ticked);

function dragSubject() {
  return simulation.find(d3.event.x - (width / 2), d3.event.y - (height / 2));
}

function dragStarted() {
  if (!d3.event.active) {
    simulation.alphaTarget(0.3).restart();
  }
  d3.event.subject.fx = d3.event.subject.x;
  d3.event.subject.fy = d3.event.subject.y;
}

function dragged() {
  d3.event.subject.fx = d3.event.x;
  d3.event.subject.fy = d3.event.y;
}

function dragEnd() {
  if (!d3.event.active) {
    simulation.alphaTarget(0);
  }
  d3.event.subject.fx = null;
  d3.event.subject.fy = null;
}

d3.select(canvas)
  .call(d3.drag()
    .container(canvas)
    .subject(dragSubject)
    .on('start', dragStarted)
    .on('drag', dragged)
    .on('end', dragEnd));


canvas.addEventListener('click', () => {
  const removedTransaction = transactions.shift();

  const newNodes = [];
  const newLinks = [];

  nodes.forEach((node) => {
    if (node.hash !== removedTransaction.x.hash) {
      newNodes.push(node);
    }
  });

  links.forEach((link) => {
    if (link.hash !== removedTransaction.x.hash) {
      newLinks.push(link);
    }
  });
  nodes = newNodes;
  links = newLinks;
  simulation.nodes(nodes);
  simulation.force('link').links(links);
  simulation.alpha(1).restart();
});

transactions.forEach((transaction) => {
  transactions.push(transaction);
  const transactionNode = {
    type: 0,
    id: transaction.x.hash,
    hash: transaction.x.hash,
  };

  nodes.push(transactionNode);

  // ******************************** //
  // Inputs                           //
  // *********************************//
  const inputs = transaction.x.inputs;
  inputs.forEach((input, index) => {
    if (input.prev_out.addr) {
      let commonNodeFound = false;
      nodes.forEach((node) => {
        if (node.type === 2 && node.id.substring(0, node.id.indexOf('output')) === input.prev_out.addr) {
          commonNodeFound = true;
          // Change node to multinode
          node.type = 3;
          links.push({
            type: 3,
            source: node.id,
            target: transaction.x.hash,
            hash: transaction.x.hash,
            origHash: node.hash,
          });
        }
      });
      if (!commonNodeFound) {
        const inputId = `${input.prev_out.addr}input${index}`;
        nodes.push({
          type: 1,
          id: inputId,
          hash: transaction.x.hash,
        });
        links.push({
          source: inputId,
          target: transaction.x.hash,
          hash: transaction.x.hash,
          index,
        });
      }
    }
  });

  // ******************************** //
  // Outputs                          //
  // *********************************//
  const outputs = transaction.x.out;

  outputs.forEach((output, index) => {
    if (output.addr) {
      nodes.push({
        type: 2,
        id: `${output.addr}output${index}`,
        hash: transaction.x.hash,
      });
      links.push({
        source: transaction.x.hash,
        target: `${output.addr}output${index}`,
        hash: transaction.x.hash,
        index,
      });
    }
  });
  simulation.nodes(nodes);
  simulation.force('link').links(links);
  simulation.alpha(1).restart();
});
