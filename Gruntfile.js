module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            options: {
                browsers: ['> 1% in BR,', 'last 2 versions']
            },
            dist: {

            }
        },
        cssmin: {
            target: {
                files: {
                    'src/app/dashboard/dashboard.component.output.min.css': ['src/app/dashboard/dashboard.component.css'],
                    'src/app/heroes/heroes.component.output.min.css': ['src/app/heroes/heroes.component.css'],
                    'src/app/hero-detail/hero-detail.component.output.min.css': ['src/app/hero-detail/hero-detail.component.css'],
                    'src/app/messages/messages.component.output.min.css': ['src/app/messages/messages.component.css'],
                }
            }
        },
        watch: {
            files: ['Gruntfile.js'],
            tasks: ['jshint']
        },
        jshint: {
            all: ['Gruntfile.js', './src/**/*.js']
        },
    });

    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask("default", []);
};