'use strict';
var Generator = require('yeoman-generator'),
    _ = require('lodash');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument('name', { type: String, required: true });
    }
    
    writing(){
        var kebabName = _.kebabCase(this.options.name);

        this.fs.copyTpl(
            this.templatePath('page.ts'),
            this.destinationPath(kebabName + '/' + kebabName + '.page.ts'),
            {
                name: this.options.name,
                kebabName: kebabName
            });

        this.fs.copyTpl(
            this.templatePath('page.html'),
            this.destinationPath(kebabName + '/' + kebabName + '.page.html'),
            {
                name: _.startCase(this.options.name)
            });
    }
}