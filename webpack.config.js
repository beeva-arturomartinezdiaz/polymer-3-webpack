const path = require('path');
const fs = require('fs');

function _modularize() {
  fs.readdirSync(path.resolve(__dirname, 'src/')).forEach(dir => {
    let dyr = path.resolve(__dirname, `src/${dir}`);
    if (fs.statSync(dyr).isDirectory()) {
      let domTemplate = '';
      let module = '';
      fs.readdirSync(dyr).forEach(file => {
        if (/\.css$/.test(file)) {
          domTemplate += '<style>' + fs.readFileSync(path.resolve(__dirname, `src/${dir}/${file}`), 'utf-8').toString().trim() + '</style>';
        } else if (/.html$/.test(file)) {
          domTemplate += fs.readFileSync(path.resolve(__dirname, `src/${dir}/${file}`), 'utf-8').toString().trim();
        } else if (/.js$/.test(file)) {
          module = fs.readFileSync(path.resolve(__dirname, `src/${dir}/${file}`), 'utf-8').toString().trim();
        }
      });
      module = module.replace('##dom_replace##', domTemplate);
      fs.writeFileSync(path.resolve(__dirname, `src/${dir}/${dir}-module.js`), module, 'utf-8');
    }
  });

  return './src/index.js';
}


module.exports = {
  entry: _modularize,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  }
};