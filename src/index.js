const fs = require('fs');
const apiMethods = require('./api');

const mdLinks = (pathUser) => {
  const invalidPath = 'invalid path';
  const pathAbsolute = apiMethods.pathResolve(pathUser);
  const validatePaths = apiMethods.validatePath(pathAbsolute);
  if (validatePaths) {
    const readDir = apiMethods.readDir(pathAbsolute);
    const prueba = apiMethods.pathJoin(readDir, pathAbsolute);
    const prueba2 = prueba.map((elem) => {
      const stats = fs.statSync(elem);
      return console.log('soy prueba2', elem, stats.isDirectory());
    });
  } else {
    console.log(invalidPath);
  }
  return console.log('soy el final');
};

mdLinks('/home/andres/Laboratoria/Practica');
mdLinks('CarpetaInterna');
module.exports = mdLinks;
