const fs = require('fs');

let listadoPorHacer = [];

let guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('hubo un error', err);
    });
}

let borrarTarea = (desc) => {
    cargarDB();
    console.log(desc);
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion == desc;
    });
    console.log(index);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
    } else {
        return false;
    }

    return listadoPorHacer;
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

let listar = (todo) => {
    cargarDB();
    if (todo) {
        return listadoPorHacer;
    } else {
        let t = listadoPorHacer.filter(t => {
            return t.completado === true;
        });
        return t;
    }
}

let actualizar = (descripcion) => {
    cargarDB();
    // let found = listadoPorHacer.find(function(data) {
    //     return data.descripcion === descripcion;
    // });

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = true;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    listar,
    actualizar,
    borrarTarea
}