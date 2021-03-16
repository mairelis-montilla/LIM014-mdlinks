const apiMethods = require('./api');

const mdLinks = (pathUser, option = { validate: false }) => new Promise((resolve, reject) => {
  const invalidPath = 'invalid path';
  const pathAbsolute = apiMethods.pathResolve(pathUser);
  const validatePaths = apiMethods.validatePath(pathAbsolute);
  if (validatePaths) {
    const readDir = apiMethods.readDir(pathAbsolute);
    const pathsDirFile = apiMethods.pathJoin(readDir, pathAbsolute);
    const listMd = apiMethods.getFiles(pathsDirFile);
    if (option.validate) {
      const listLinksValidate = apiMethods.getLinksValidate(listMd);
      resolve(Promise.all(listLinksValidate).then((values) => console.log(values)));
    } else {
      const listLinks = apiMethods.getLinks(listMd);
      resolve(console.log(listLinks));
    }
  } else {
    reject(new Error(invalidPath));
  }
});
mdLinks('/home/andres/Laboratoria/Practica', { validate: true });
module.exports = mdLinks;
