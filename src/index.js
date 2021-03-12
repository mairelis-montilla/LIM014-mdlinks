const apiMethods = require('./api');

const mdLinks = (pathUser) => {
  const invalidPath = 'invalid path';
  const pathAbsolute = apiMethods.pathResolve(pathUser);
  const validatePaths = apiMethods.validatePath(pathAbsolute);
  if (validatePaths) {
    const readDir = apiMethods.readDir(pathAbsolute);
    console.log(readDir);
    const pathsDirFile = apiMethods.pathJoin(readDir, pathAbsolute);
    
    const isDirectory = pathsDirFile.filter((file) => apiMethods.isDir(file) === true);
    console.log('soy is directory', isDirectory);
  } else {
    console.log(invalidPath);
  }
  console.log('soy el final');
  // return Promise;
};

mdLinks('/home/andres/Laboratoria/Practica');
mdLinks('CarpetaInterna');
module.exports = mdLinks;
