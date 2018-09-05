const links = [];
const nodes = [];
const radius = 3;
const transactions = [];
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
  // if (d.x > (width / 2) - (radius * 2) || d.x < (width / -2) + (radius * 2)) {
  //   const newX = d.x > 1 ? width / 2 - radius * 2 : width / -2;
  //   d.x = newX;
  // }

  // if (d.y > (height / 2) - (radius * 2) || d.y < (height / -2) + (radius * 2)) {
  //   const newY = d.y > 1 ? height / 2 - radius * 2 : height / -2;
  //   d.y = newY;
  // }

  context.moveTo(d.x + radius, d.y);
  context.arc(d.x, d.y, radius, 0, 2 * Math.PI);

  const nodeColorMap = {
    0: () => '#002aff',
    1: () => '#00ff3f',
    2: () => '#ffd400',
    3: () => '#aa00ff',
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
  .force('link', d3.forceLink(links).id(d => d.id).distance(50).strength(1))
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


const socket = new WebSocket('wss://ws.blockchain.info/inv');

socket.addEventListener('open', (event) => {
  console.log('OPEN');
  socket.send(JSON.stringify({ op: 'unconfirmed_sub' }));
});


socket.onmessage = (event) => {
  const transaction = JSON.parse(event.data);
  console.log(transaction);
  transactions.push(transaction);
  const transactionNode = {
    type: 0,
    id: transaction.x.hash,
  };

  nodes.push(transactionNode);


  // ******************************** //
  // Inputs                           //
  // *********************************//
  const inputs = transaction.x.inputs;
  inputs.forEach((input, index) => {
    if (input.prev_out.addr) {
      nodes.push({
        type: 1,
        id: input.prev_out.addr,
        hash: transaction.x.hash,
      });
      links.push({
        source: input.prev_out.addr,
        target: transaction.x.hash,
        hash: transaction.x.hash,
        index,
      });
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
        id: output.addr,
        hash: transaction.x.hash,
      });
      links.push({
        source: transaction.x.hash,
        target: output.addr,
        hash: transaction.x.hash,
        index,
      });
    }
  });

  // Check if too many nodes
  if (transactions.length > txLimit) {
    const removedTransaction = transactions.shift();
    nodes.forEach((node, index) => {
      if (node.id === removedTransaction.x.hash) {
        nodes.splice(index, 1);
        alert('remove');
      }
    });
    links.forEach((link, index) => {
      if (link.hash === removedTransaction.x.hash) {
        links.splice(index, 1);
      }
    });
  }
  simulation.nodes(nodes);
  simulation.force('link').links(links);
  simulation.alpha(1).restart();
};

