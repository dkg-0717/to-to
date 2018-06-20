const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca completado o pendiente la tarea'
}
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion tarea por hacer'
}

const argv = require('yargs')
    .command('crear', 'crea tareas por hacer', {
        descripcion
    })
    .command('actualizar', 'actualizar todas las tareas por hacer', {
        descripcion,
        completado
    })
    .command('listar', 'listar todas las tareas por hacer', {
        descripcion,
        todo: {
            default: false,
            alias: 't',
            desc: 'Muestra todas las tareas completas o no completadas'
        }
    })
    .command('borrar', 'borra alguna tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'b',
            desc: 'borra tareas por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}