/* 
 * 相关文档参考
 * https://github.com/fex-team/fis3/blob/master/doc/docs/api/config-props.md#%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7
 */

fis.set('charset', 'utf-8');
fis.set('md5Length', 10);
fis.set('md5Connector', '.');
fis.set('files', ['**']);
fis.set('ignore', ['node_modules/**', 'output/**', '.git/**', 'fis-conf.js']);
fis.set('fileType.text', '');
fis.set('fileType.image', '');
fis.set('new date', Date.now());

fis.match('**/*.scss', {
	rExt: '.css',
	parser: fis.plugin('node-sass'),
	query: '?t=' + fis.get('new date')
});

fis.match('*.scss', {
	optimizer: fis.plugin('clean-css'),
});

fis.media('dev')
	.match('*', {
	});
