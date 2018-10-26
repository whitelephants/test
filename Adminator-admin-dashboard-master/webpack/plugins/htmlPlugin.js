const
  path              = require('path'),
  manifest          = require('../manifest'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const titles = {
  'index': 'Dashboard',
	'1-chart-bar':'1-chart-bar',
	'1-map':'1-map',
	'1-table':'1-table',
	'2-chart-bar':'2-chart-bar',
	'2-map':'2-map',
	'2-table':'2-table',
	'3-table':'3-table',
	'4-table':'4-table',
};

module.exports = Object.keys(titles).map(title => {
  return new HtmlWebpackPlugin({
    template: path.join(manifest.paths.src, `${title}.html`),
    path: manifest.paths.build,
    filename: `${title}.html`,
    inject: true,
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    },
  });
});
