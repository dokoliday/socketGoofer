 
const fs = require("fs"),

getFilterHandlers = () => {
  "use strict";
  const validFilterHandlers = fs.readdirSync(__dirname)
  .reduce((acc, file) => {
    if (file !== "index.js") {

      const requiredFile = require(`${__dirname}/${file}`); // eslint-disable-line global-require
       console.log(requiredFile)
      return Object.assign(acc,{[file.replace(".js", "")]:requiredFile});
    }
    return acc;
  }, {});
 
  console.group(validFilterHandlers)
  return validFilterHandlers;
};

module.exports = getFilterHandlers();