const fs = require('fs'); //

let tareas = {
    leerJSON : function(){
        let tareasJSON = fs.readFileSync('tareas.JSON', 'utf-8'); // utf-8 para codificar el archivo por si tiene caracteres especiales
        let tareasObj = JSON.parse(tareasJSON);
        return tareasObj;
    },

    escribirJSON: function(arrayTareas){
        //arrayTareas: pasarlo a cadena de texto
        let tareasAGuardar = JSON.stringify(arrayTareas, null, ' ');
        //guardar en archivo JSON
        fs.writeFileSync('tareas.JSON', tareasAGuardar);
    },

    nuevaTarea : function(){

    },
    tareasPorEstado : function(){

    }

}







module.exports = tareas;