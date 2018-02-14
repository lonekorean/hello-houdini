console.log('in site.js');

CSS.registerProperty({
    name: '--wut',
    syntax: '<length>',
    inherits: false,
    initialValue: '10px'
});

CSS.paintWorklet.addModule('../../modules/polka-dots.js');
