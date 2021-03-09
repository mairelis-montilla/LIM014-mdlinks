const path = require('path');

const mdLinks = (pathUser) => {
  const isAbsolute = path.isAbsolute(pathUser);

  return console.log('soy el resultado', isAbsolute);
};

mdLinks('/home/andres/Laboratoria/Practica');
mdLinks('12.14');
module.exports = mdLinks;
