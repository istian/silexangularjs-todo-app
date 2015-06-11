var tmp = './.tmp';
var assets = './assets';
var www = './public';

module.exports = {
    'tmp': tmp,
    'assets': assets,
    'public': www,
    'scripts': {
        'src': [assets + '/js/importer.js'],
        'tmp': tmp + '/',
        'dest': www + '/js'
    },
    'styles': {
        'src': [assets + '/**/*.[scss|css|less]', assets + '/*.[scss|less|css]'],
        'tmp': tmp + '/',
        'dest': www + '/css'
    },
    'vendors': {
        'base' : './node_modules',
        'src': [
            './node_modules/angular/*.js',
            './node_modules/angular-route/*.js',
            './node_modules/bootstrap/dist/js/bootstrap*.js',
            './node_modules/bootstrap/less/**/*.*'
        ],
        'dest' : assets + '/vendor'
    }
}