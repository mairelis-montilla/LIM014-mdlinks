const path = require('path');
const fs = require('fs');
const axios = require('axios');

const regexLinkFull = /\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
const regexLink = /\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
const regexText = /\[([\w\s\d]+)\]/g;

const pathResolve = (paths) => (path.isAbsolute(paths) ? paths : path.resolve(paths));
const validatePath = (pathAbsolute) => fs.existsSync(pathAbsolute);
const readDir = (pathAbsolute) => fs.readdirSync(pathAbsolute);
const pathJoin = (dir, pathA) => dir.map((file) => path.join(pathA, file));
const isDir = (pathElem) => {
  const stats = fs.statSync(pathElem);
  return stats.isDirectory();
};

const isFile = (pathsDir, listMd) => {
  pathsDir.forEach((elem) => {
    const pathElem = elem;
    if (isDir(elem)) {
      const readElem = readDir(pathElem);
      if (readElem.length > 0) {
        const pathsDirElem = pathJoin(readElem, pathElem);
        isFile(pathsDirElem, listMd);
      }
    } else if (path.extname(elem) === '.md') {
      listMd.push(elem);
    }
  });
};
const getFiles = (pathsDir) => {
  const listMd = [];
  isFile(pathsDir, listMd);
  return listMd;
};
const readFile = (elem) => fs.readFileSync(elem,
  { encoding: 'utf-8', flag: 'r' });
const matchLinks = (file) => {
  const matching = file.match(regexLinkFull);
  return matching;
};

const getLinks = (arrayMd) => {
  const listlinks = [];
  arrayMd.forEach((elem) => {
    const elemPath = elem;
    const readElem = readFile(elem);
    const links = matchLinks(readElem);
    if (links) {
      links.forEach((link) => {
        const url = link.match(regexLink).join().slice(1, -1);
        const texts = link.match(regexText).join().slice(1, -1);

        const objectsLinks = {
          href: url,
          text: texts,
          file: elemPath,
        };
        listlinks.push(objectsLinks);
      });
    }
  });
  return listlinks;
};
const getStatus = ({ url, texts, elemPath }) => axios.get(url)
  .then((response) => {
    const { status } = response;
    const { statusText } = response;
    return {
      url, texts, elemPath, status, statusText,
    };
  })
  .catch((error) => {
    let status;
    let statusText;
    if (error.response) {
      status = error.response.status;
      statusText = error.response.statusText;
    } else {
      status = error.response;
      statusText = 'fail';
    }
    return {
      url, texts, elemPath, status, statusText,
    };
  });

const getLinksValidate = (arrayMd) => {
  const listLinks = [];
  arrayMd.forEach((elem) => {
    const elemPath = elem;
    const readElem = readFile(elem);
    const links = matchLinks(readElem);
    if (links !== null) {
      links.forEach((link) => {
        const url = link.match(regexLink).join().slice(1, -1);
        const texts = link.match(regexText).join().slice(1, -1);
        const objectsLinks = getStatus({ url, texts, elemPath });
        listLinks.push(objectsLinks);
      });
    }
  });

  return (listLinks);
};

module.exports = {
  pathResolve,
  validatePath,
  readDir,
  pathJoin,
  getFiles,
  readFile,
  getLinks,
  getLinksValidate,
  getStatus,
};
