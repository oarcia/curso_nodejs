//configuracion de yargs
const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en cosola la tabla de multiplicar', options)
    .command('crear', 'genera en consola el archivo con el resultado', options)
    .help()
    .argv;

module.exports = {
    argv
}