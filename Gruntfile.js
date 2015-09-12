module.exports = function(a) {
    a.initConfig({
        pkg: a.file.readJSON("package.json"),
        uglify: {
            compress: {
                options: {
                    banner: '/*\n<%= pkg.name %>\n<%= pkg.author %>\n<%= pkg.homepage %>\n<%= grunt.template.today("yyyy-mm-dd") %>\n */\n',
                    compress: !0
                },
                files: {
                    "js/main.min.js": [ "src/**/*.js" ]
                }
            },
            betigruntjs: {
                options: {
                    banner: '/*\n<%= pkg.name %>\n<%= pkg.author %>\n<%= pkg.homepage %>\n<%= grunt.template.today("yyyy-mm-dd") %>\n */\n',
                    beautify: !0
                },
                files: {
                    "Gruntfile.js": [ "Gruntfile.js" ]
                }
            },
            betiself: {
                options: {
                    banner: '/*\n<%= pkg.name %>\n<%= pkg.author %>\n<%= pkg.homepage %>\n<%= grunt.template.today("yyyy-mm-dd") %>\n */\n',
                    beautify: true,
                    mangle:false
                },
                files: {
                    "src/main2.js": [ "src/main.js" ]
                }
            }
        },
        jshint: {
            options: {
                eqeqeq: !0,
                trailing: !0
            },
            target: {
                src: [ "src/**/*.js" ]
            }
        },
        watch: {
            scripts: {
                files: [ "src/**/*.js", "src/**/*.css", "Gruntfile.js" ],
                tasks: [ "default" ]
            },
            livereload: {
                options: {
                    livereload: "<%= connect.options.livereload %>"
                },
                files: [ "index.html", "src/**/*.js" ]
            }
        },
        connect: {
            options: {
                port: 9e3,
                open: !0,
                livereload: 35729,
                hostname: "*"
            },
            server: {
                options: {
                    //port: 9001,
                    base: "./"
                }
            }
        },
		 cssmin: {
         options: {
             keepSpecialComments: 0
         },
         compress: {
             files: {
                 'css/main.min.css': [
                     "src/main.css"
                 ]
             }
         }
     }
    }), a.loadNpmTasks("grunt-contrib-uglify"), a.loadNpmTasks("grunt-contrib-watch"), 
    a.loadNpmTasks("grunt-contrib-connect"), a.loadNpmTasks("grunt-contrib-jshint"), 
	 a.loadNpmTasks('grunt-contrib-cssmin'),
    a.registerTask("betigruntjs", [ "uglify:betigruntjs" ]),a.registerTask("betiself", [ "uglify:betiself" ]),
    a.registerTask("compress", [ "uglify:compress" ]), 
    a.registerTask("default", [ "jshint", "uglify:compress", 'cssmin',"connect", "watch" ]);
};