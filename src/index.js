const apiMethods = require('./api');

const mdLinks = (pathUser, option = { validate: false }) => {
  const invalidPath = 'invalid path';
  const pathAbsolute = apiMethods.pathResolve(pathUser);
  const validatePaths = apiMethods.validatePath(pathAbsolute);
  if (validatePaths) {
    const readDir = apiMethods.readDir(pathAbsolute);
    const pathsDirFile = apiMethods.pathJoin(readDir, pathAbsolute);
    const listMd = apiMethods.getFiles(pathsDirFile);
    if (option.validate === true) {
      const listLinksValidate = apiMethods.getLinksValidate(listMd);
      console.log(listLinksValidate);
    } else {
      const listLinks = apiMethods.getLinks(listMd);
      console.log(listLinks);
    }
  } else {
    console.log(invalidPath);
  }
  // return Promise;
};

mdLinks('/home/andres/Laboratoria/Practica');
mdLinks('/home/andres/Laboratoria/Practica');
module.exports = mdLinks;
