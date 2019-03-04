module.exports = function (grunt) {
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
        uglify: {
            dist: {
              files: {
                'dest/output.min.js': ['src/app/*.js']
              }
            }
          }
    })

    grunt.loadNpmTasks("grunt-contrib-cssmin");

    grunt.registerTask("default", []);
}
/*
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            options: {

            },
            dist: {

            }
        }
    })

    grunt.loadNpmTasks('grunt-autoprefixer')
}
*/