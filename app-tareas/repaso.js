let array = ['Ale', 'Gonza', 'Julian', 'Dario', 'Nacho'];

for (let i = 0; i < array.length; i++){
    //console.log(i + '. ' + array[i]);
}

let automovil = {
    marca : "Ford",
    modelo : "Mondeo",
    anio : 2019,
    color : "negro",
    decirMarca : function(){
        console.log(this.marca);
    }//metodo
}


//console.log(automovil.decirMarca()); 

let tareas = [
    {
        titulo : 'Repasar JS',
        estado : 'en progreso',
        mostrarTarea : function(){
            console.log(this.titulo);
        }
    },
    {
        titulo : 'Tarea 2',
        estado : 'no iniciada',
    },
    {
        titulo : 'Tarea 3',
        estado : 'finalizada',
    },
]
//console.log(tareas[0]);

let textoJSON = JSON.stringify(tareas);
console.log(typeof textoJSON);
let objetoJSON = JSON.parse(textoJSON);
console.log(objetoJSON);
console.log(typeof objetoJSON);






