const fs = require('fs');
const colors = require('colors');
///este archivo se requiere en el app.js pues lo exportamos y se puede exporta con 
//module.exports = {
//    crearArchivo
//} o con 



let listarTabla = (base, limite) => {
    console.log('======================'.green)
    console.log(`==tabla de ${base}====`.blue)
    console.log('======================'.yellow)

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor no es un numero ${base}`)
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`el archivo tabla-${base}-al-${ limite }.txt`)
        })
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}