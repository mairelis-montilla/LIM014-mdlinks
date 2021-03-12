const apiMethods = require('./api');

const mdLinks = (pathUser) => {
  const invalidPath = 'invalid path';
  const pathAbsolute = apiMethods.pathResolve(pathUser);
  const validatePaths = apiMethods.validatePath(pathAbsolute);
  if (validatePaths) {
    const readDir = apiMethods.readDir(pathAbsolute);
    const pathsDirFile = apiMethods.pathJoin(readDir, pathAbsolute);
    const mdArray = apiMethods.getFiles(pathsDirFile);
    console.log('SOY LO QUE DEVUELVE GET', mdArray);
  } else {
    console.log(invalidPath);
  }
  console.log('soy el final');
  // return Promise;
};

mdLinks('/home/andres/Laboratoria/Practica');
mdLinks('CarpetaInterna');
module.exports = mdLinks;
