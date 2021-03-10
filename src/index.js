const apiMethods = require('./api');

const mdLinks = (pathUser) => {
  const invalidPath = 'invalid path';
  const pathAbsolute = apiMethods.pathResolve(pathUser);
  const validatePaths = apiMethods.validatePath(pathAbsolute);
  if (validatePaths) {
    console.log('soy los archivos que tiene el directorio', apiMethods.readDir(pathAbsolute));
  } else {
    console.log(invalidPath);
  }
  return console.log('soy el final');
};

mdLinks('/home/andres/Laboratoria/Practica');
mdLinks('../Practica12');
module.exports = mdLinks;
