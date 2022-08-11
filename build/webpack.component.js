const path = require('path');
const glob = require('glob');
const { VueLoaderPlugin } = require('vue-loader');

const components = {};

async function makeList(dirPath, components) { 
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (file of files) { 
    const component = file.split(/[/.]/)[2];
    components[component] = `./${file}`;
  }
}

makeList('packages/lib', components)

module.exports = {
  mode: 'production',
  entry: components,
  output: {
    filename: '[name].umd.js',
    path: path.resolve(process.cwd(), 'lib'),
    library: 'mui',
    libraryTarget: 'umd'
  },
  // 不将vue代码打包进我们的组件库代码中，如果将vue代码打包进组件库中则会报错 
  externals: {
    vue: 'vue'
  }, 
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/, 
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  }
}