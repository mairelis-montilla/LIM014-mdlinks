const apiMethods = require('../src/api.js');

describe('PathResolve', () => {
  it('it is a function', () => {
    expect(typeof apiMethods.pathResolve).toBe('function');
  });
});
describe('validatePath', () => {
  it('it is a function', () => {
    expect(typeof apiMethods.validatePath).toBe('function');
  });
});
describe('readDir', () => {
  it('it is a function', () => {
    expect(typeof apiMethods.readDir).toBe('function');
  });
});
describe('pathJoin', () => {
  it('it is a function', () => {
    expect(typeof apiMethods.pathJoin).toBe('function');
  });
});
describe('isDir', () => {
  it('it is a function', () => {
    expect(typeof apiMethods.isDir).toBe('function');
  });
  it('is a directory', () => {
    const dir = '/home/andres/Laboratoria/Practica';
    expect(apiMethods.isDir(dir)).toBe(true);
  });
});
describe('isFile', () => {
  it('it is a function', () => {
    expect(typeof apiMethods.isFile).toBe('function');
  });
  it('is files ', () => {
    const listMd = [];
    const pathsDir = [
      '/home/andres/Laboratoria/Practica/CarpetaInterna',
      '/home/andres/Laboratoria/Practica/archivo1.md',
      '/home/andres/Laboratoria/Practica/archivo2.md',
    ];
    expect(apiMethods.isFile(pathsDir, listMd)).toBe();
  });
});
describe('getFiles', () => {
  it('it is a function', () => {
    expect(typeof apiMethods.getFiles).toBe('function');
  });
  it('get files ', () => {
    const pathsDir = [
      '/home/andres/Laboratoria/Practica/CarpetaInterna',
      '/home/andres/Laboratoria/Practica/archivo1.md',
      '/home/andres/Laboratoria/Practica/archivo2.md',
    ];
    const result = ['/home/andres/Laboratoria/Practica/CarpetaInterna/archivo3.md', '/home/andres/Laboratoria/Practica/CarpetaInterna/carpeta3/archivo4.md', '/home/andres/Laboratoria/Practica/archivo1.md', '/home/andres/Laboratoria/Practica/archivo2.md'];
    expect(apiMethods.getFiles(pathsDir)).toEqual(result);
  });
});
describe('readFile', () => {
  it('it is a function', () => {
    expect(typeof apiMethods.readFile).toBe('function');
  });
});
describe('matchLinks', () => {
  it('it is a function', () => {
    expect(typeof apiMethods.matchLinks).toBe('function');
  });
  it('match', () => {
    const elem = apiMethods.readFile('/home/andres/Laboratoria/Practica/CarpetaInterna/archivo3.md');
    const result = ['[npm chalk](https://www.npmjs.com/package/chalk)',
      '[link de google](https://www.google.com/search?channel=fs&client=ubuntu&q=regex)',
      '[link con muchos caracteres raros](https://es.ryte.com/wiki/Longitud_de_la_URL#:~:text=Una%20URL%20no%20deber%C3%ADa%20contener,un%20m%C3%A1ximo%20de%2074%20caracteres.)'];
    expect(apiMethods.matchLinks(elem)).toEqual(result);
  });
});

describe('getLinks', () => {
  it('it is a function', () => {
    expect(typeof apiMethods.getLinks).toBe('function');
  });
  it('', () => {
    const arrayMd = ['/home/andres/Laboratoria/Practica/archivo1.md'];
    const result = [
      { file: '/home/andres/Laboratoria/Practica/archivo1.md', href: 'https://www.google.com/dfaergdfa/', text: 'link 404' },
      { file: '/home/andres/Laboratoria/Practica/archivo1.md', href: 'https://www.google.comdfaergdfa/', text: 'link no existe' }];
    expect(apiMethods.getLinks(arrayMd)).toEqual(result);
  });
});
describe('getStatus', () => {
  it('it is a function', () => {
    expect(typeof apiMethods.getStatus).toBe('function');
  });
  it('', () => {
    const url = 'https://www.google.com/';
    const texts = 'link ok';
    const path = '/home/andres/Laboratoria/Practica/archivo1.md';
    expect(apiMethods.getStatus({ url, texts, path })).toEqual({ });
  });
});

describe('getLinksValidate', () => {
  it('it is a function', () => {
    expect(typeof apiMethods.getLinksValidate).toBe('function');
  });
  it('get Links Validate', () => {
    const arrayMd = ['/home/andres/Laboratoria/Practica/archivo1.md'];
    expect(apiMethods.getLinksValidate(arrayMd)).toEqual([{}, {}]);
  });
});
