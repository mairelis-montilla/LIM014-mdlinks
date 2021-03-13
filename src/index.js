const apiMethods = require('./api');

const mdLinks = (pathUser, option) => {
  const invalidPath = 'invalid path';
  const pathAbsolute = apiMethods.pathResolve(pathUser);
  const validatePaths = apiMethods.validatePath(pathAbsolute);
  if (validatePaths) {
    const readDir = apiMethods.readDir(pathAbsolute);
    const pathsDirFile = apiMethods.pathJoin(readDir, pathAbsolute);
    const listMd = apiMethods.getFiles(pathsDirFile);
    const listLinks = apiMethods.getLinks(listMd);
    console.log('SOY LO QUE DEVUELVE listLinks', listLinks);
  } else {
    console.log(invalidPath);
  }
  // return Promise;
};

mdLinks('/home/andres/Laboratoria/Practica');
mdLinks('CarpetaInterna');
module.exports = mdLinks;
