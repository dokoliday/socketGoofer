const Goofer = require("../Goofer.js")

const createGoofer = (quantite) => {
  const goofers=[]
  for (let i = 0; i < quantite; i++) {
    const x = Math.floor((Math.random() * 100) + 1);
    const y = Math.floor((Math.random() * 100) + 1);
    goofers.push( new Goofer(x, y))
  }
return goofers
}
module.exports= createGoofer;