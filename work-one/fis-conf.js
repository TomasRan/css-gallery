fis.match('*.scss', {
	rExt: '.css',
	parser: fis.plugin('node-sass', {})
});

fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

fis.match('*.{png, css}', {
	release: '/static/$0'
});

fis.media('dev')
  .match('*', {
    useHash: false,
    optimizer: null
  });
