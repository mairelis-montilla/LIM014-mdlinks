const path = require('path');
const fs = require('fs');

const pathResolve = (paths) => (path.isAbsolute(paths) ? paths : path.resolve(paths));
const validatePath = (pathAbsolute) => fs.existsSync(pathAbsolute);
const readDir = (pathAbsolute) => fs.readdirSync(pathAbsolute);
const pathJoin = (dir, pathA) => dir.map((file) => path.join(pathA, file));
const isDir = (pathElem) => {
  const stats = fs.statSync(pathElem);
  return stats.isDirectory();
};

const listMd = [];
const getFiles = (pathsDir) => {
  pathsDir.forEach((elem) => {
    const pathElem = elem;
    if (isDir(elem)) {
      const readElem = readDir(pathElem);
      if (readElem.length > 0) {
        const pathsDirElem = pathJoin(readElem, pathElem);
        getFiles(pathsDirElem);
      }
    } else if (path.extname(elem) === '.md') {
      listMd.push(elem);
    }
  });
  return listMd;
};

const readFile = (elem) => fs.readFileSync(elem,
  { encoding: 'utf-8', flag: 'r' });
const matchLinks = (file) => {
  const regexLink = /\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#-&_%~,.:]+)\)/mg;
  const matching = file.match(regexLink);
  return matching;
};

const getLinks = (arrayMd) => {
  const listlinks = [];
  arrayMd.forEach((elem) => {
    const elemPath = elem;
    const readElem = readFile(elem);
    const links = matchLinks(readElem);
    if (links !== null) {
      links.forEach((link) => {
        const objectsLinks = {
          url: link,
          text: link,
          file: elemPath,
        };
        listlinks.push(objectsLinks);
      });
    }
  });
  return listlinks;
};
module.exports = {
  pathResolve,
  validatePath,
  readDir,
  pathJoin,
  getFiles,
  readFile,
  matchLinks,
  getLinks,
};
