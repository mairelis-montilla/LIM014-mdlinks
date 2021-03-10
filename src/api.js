const path = require('path');
const fs = require('fs');

const pathResolve = (paths) => (path.isAbsolute(paths) ? paths : path.resolve(paths));
const validatePath = (pathAbsolute) => fs.existsSync(pathAbsolute);
const readDir = (pathAbsolute) => fs.readdirSync(pathAbsolute);
module.exports = {
  pathResolve,
  validatePath,
  readDir,
};
/*  try {
    const validate = fs.readdirSync(pathAbsolute);
    return validate;
  } catch (error) {
    return 'invalid path';
  } */
