const path = require('path');
const fs = require('fs');

const pathResolve = (paths) => (path.isAbsolute(paths) ? paths : path.resolve(paths));
const validatePath = (pathAbsolute) => fs.existsSync(pathAbsolute);

module.exports = {
  pathResolve,
  validatePath,
};
/*  try {
    const validate = fs.readdirSync(pathAbsolute);
    return validate;
  } catch (error) {
    return 'invalid path';
  } */
