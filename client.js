const net = require('net');
const readline = require('readline');
const fs = require('fs');

const client = net.createConnection({ port: 8124 }, () => {
  // 'connect' listener.
  console.log('connected to server!');
  const rl = readline.createInterface({ input: client, output: client });

  rl.on('line', (line) => {
    if (line.includes("tableau map")) {
      data = line.replace("tableau map", '')
      console.log(JSON.parse(data))
    } if (line.includes("goofers")) {
      data = line.replace("goofers", '')
      console.log(JSON.parse(data))
    }
  });
});
client.write("createMap")
client.write("createGoofers")


client.on('end', () => {
  console.log('disconnected from server');
});
client.on("error", () => console.log("error"));
