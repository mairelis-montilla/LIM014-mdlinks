const path = require('path');
const fs = require('fs');

const ValidatePath = (pathAbsolute) => {
  try {
    const validate = fs.readdirSync(pathAbsolute);
    return validate;
  } catch (error) {
    return 'invalid path';
  }
};

const pathResolve = (paths) => {
  const isAbsolute = path.isAbsolute(paths);
  return isAbsolute ? paths : path.resolve(paths);
};

module.exports = {
  pathResolve,
  ValidatePath,
};
