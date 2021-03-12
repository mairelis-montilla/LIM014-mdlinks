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

/* (path.extname(file) === '.md' ? file : path.join(dir, file))); */

module.exports = {
  pathResolve,
  validatePath,
  readDir,
  pathJoin,
  extnameMd,
  isDir,
};
