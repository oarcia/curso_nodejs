//const fs = require('fs');
//definicion de yargs


//const argv = require('yargs')
//    .command('listar', 'imprime en cosola la tabla de multiplicar', {
//        base: {
//            demand: true,
//            alias: 'b'
//        },
//        limite: {
//            alias: 'l',
//            default: 10
//        }
//    })
//    .command('crear', 'genera en consola el archivo con el resultado', {
//        base: {
//            demand: true,
//            alias: 'b'
//        },
//        limite: {
//            alias: 'l',
//            default: 10
//        }
//    })
//    .help()
//    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplica')
const argv = require('./config/yargs').argv
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            //console.log('listar');
        break;

    case 'crear':
        //console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.yellow }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido')
}

//console.log(argv)
//let base = '5';


//let argv2 = process.argv;

//console.log(argv);
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log('Limite', argv.limite)
//let data = '';

//for (let i = 1; i <= 10; i++) {
//    data += `${ base } * ${ i } = ${ base * i }\n`;
//}
//
//fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//    if (err) throw err;
//    console.log(`el archivo tabla-${base}.txt se a creado`)
//})