const apiMethods = require('./api');

const mdLinks = (pathUser) => {
  const pathAbsolute = apiMethods.pathResolve(pathUser);
  const validatePaths = apiMethods.ValidatePath(pathAbsolute);
  return console.log('soy el resultado', ValidatePaths);
};

mdLinks('/home/andres/Laboratoria/Practica');
mdLinks('../Practica12');
module.exports = mdLinks;
