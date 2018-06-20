// const argv = require('yargs').argv;
const argv = require('./yargs/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let lista = porHacer.listar(argv.todo);
        lista.forEach((element) => {
            console.log('========== Por hacer =========='.cyan);
            console.log(element.descripcion);
            console.log(element.completado);
            console.log('==============================='.cyan);
        });
        break;

    case 'actualizar':
        let data = porHacer.actualizar(argv.descripcion);
        console.log(data);
        break;

    case 'borrar':
        let d = porHacer.borrarTarea(argv.descripcion);
        console.log(d);
        break;

    default:
        console.log('comando no reconocido');
}