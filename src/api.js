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
const extnameMd = (dir) => dir.filter((file) => path.extname(file) === '.md');

const mdArr = [];
const getFiles = (pathsDir) => pathsDir.map((elem) => {
  const pathElem = elem;
  if (isDir(elem)) {
    const readElem = readDir(pathElem);
    if (readElem.length > 0) {
      const pathsDirElem = pathJoin(readElem, pathElem);
      getFiles(pathsDirElem);
    }
  } else if (path.extname(elem) === '.md') {
    mdArr.push(elem);
  }
  return mdArr;
});


module.exports = {
  pathResolve,
  validatePath,
  readDir,
  pathJoin,
  extnameMd,
  isDir,
  getFiles,
};
