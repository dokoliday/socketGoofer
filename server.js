const net = require('net');
const port = 8124;
const readline = require('readline');
const array = new Array(4).fill("case");
const commands = require("./handlers");


const server = net.createServer((socket) => {
// console.log("commands",commands.createMap());
// console.log("commands",   commands.createGoofer(3));
  socket.on('data', (data) => {
    const command = data.toString();
    if (command === 'createMap') {
       const map=commands.createMap();
       socket.write("tableau map " + JSON.stringify(map)+"\r\n");
       socket.write("\r\n\r\n");
    };
    if(command === 'createGoofers'){
     goofers= commands.createGoofer(3);
      socket.write("goofers "+ JSON.stringify(goofers)+"\r\n");
      socket.write("\r\n\r\n");
    }
  });

  socket.on('end', () => {
    console.log('client disconnected');
  });
});


server.listen(port, () => {
  console.log(`server listen on ${port}`);
});
server.on('error', (err) => {
  throw err;
});



const writeMap = () => {
  socket.write("tableau map " + JSON.stringify(array)+"\r\n")
  socket.write("\r\n\r\n")
}