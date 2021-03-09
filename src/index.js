const apiMethods = require('./api');

const mdLinks = (pathUser) => {
  const pathAbsolute = apiMethods.pathResolve(pathUser);
  const ValidatePaths = apiMethods.ValidatePath(pathAbsolute);
  return console.log('soy el resultado', ValidatePaths);
};

mdLinks('/home/andres/Laboratoria/Practica');
mdLinks('../Practica12');
module.exports = mdLinks;
