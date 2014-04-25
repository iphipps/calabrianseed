module.exports = function(grunt) {

	var globalConfig = {
		theme: 'calabrian',
	};

	grunt.initConfig({
		// our global vars
		globalConfig: globalConfig,
		// package files we need
		pkg: grunt.file.readJSON('package.json'),
		// compass settings
		compass: {
			local: {
				options: {
					config: 'config.rb'
				}
			}
		},
		watch: {
			compass: {
				files: [
					'source/assets/styles/**/*.{scss,sass}'
				],
				tasks: ['compass']
			}
		},
		// copy over theme-related files & plugins
		copy: {
			target: {
				files: [
					{src: 'source/favicon.ico', dest: 'runtime/favicon.ico'},
					{src: 'source/favicon.png', dest: 'runtime/favicon.png'},
					{src: 'source/tileicon.png', dest: 'runtime/tileicon.png'},
					{src: 'source/index.php', dest: 'runtime/index.php'},
					{expand: true, cwd: 'source/', src: ['**','!**/*Thumbs.db','!**/*.sass-cache','!**/*DS_Store'], dest: 'runtime/'}
				]
			}
		},
		useminPrepare: {
			html: 'source/index.php'
		},
		concat: {
			js: {
				// order all your libraries and custom scripts here
				src: [
					'source/assets/js/libraries/library.js',
					'source/assets/js/scripts/common.js',
					'source/assets/js/scripts/init.js'
				],
				dest: 'runtime/assets/js/app.js'
			}
		},
		uglify: {
			target: {
				// script files w/o libraries
				files: {
					'runtime/assets/js/app.min.js': ['runtime/assets/js/app.js'],
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'runtime/assets/styles/screen.min.css': ['source/assets/styles/screen.css']
				}
			}
		},
		usemin: {
			html: ['runtime/footer.php', 'runtime/header.php'],
			options: {
				dirs: ['runtime/wp-content/themes/<%= globalConfig.theme %>']
			}
		},
		clean: [
			"runtime/assets/js/app.js",
			"runtime/assets/styles/sass/",
			"runtime/assets/styles/screen.css",
			"runtime/assets/js/scripts"
		],
		imagemin: {
			main: {
				files: [{
					expand: true,
					cwd: 'source/assets/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'runtime/assets/'
				}]
			}
		}
	});

	// Load the needed plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-ftp-deploy');
	grunt.loadNpmTasks('grunt-gitinfo');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// Default task(s).
	grunt.registerTask('build', ['gitinfo','compass:local','copy','useminPrepare','concat','uglify','cssmin','usemin','imagemin:main','clean']);
	
	

};