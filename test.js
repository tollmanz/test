module.exports = {
	uglify: {
		options: {
			banner: '/*! <%= pkg.version %> */\n',
			report: 'min'
		},
		my_target: {
			files: {
				'blah.min.js': ['blah.js']
			}
		}
	}
};