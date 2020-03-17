//crear una variable con un array de 3 tareas.
// las tareas son objetos literales con las propiedades titulo y estado.

const tareasObj = require('./tareas'); //ruta al archivo

let action = process.argv[2];
let tareaNueva = {
            titulo : process.argv[3],
            estado : 'pendiente'        
            }

//console.log(action);

switch (action){
    case 'listar' :
        //function listar (){
            console.log("Lista de tareas:");
            let tareas = tareasObj.leerJSON();
            
            tareas.forEach(function(elemento, i){
                console.log(i + '. ' + elemento.titulo + ' - ' + elemento.estado);
            });
                
                    console.log();
            
            break;
            case undefined :
                console.log("no es posible ejecutar este termino");
                break;
                case 'crear' :
                let tareaNueva = {
                    titulo : process.argv[3],
                    estado : 'pendiente'        
                    };
                    
                    //let arrayDeTareas = [];
                    console.log(tareaNueva);

                    let todasLasTareas = tareasObj.leerJSON();
                    todasLasTareas.push(tareaNueva);
                    
                    tareasObj.escribirJSON(todasLasTareas);
                    //arrayDeTareas.push(tareaNueva);

                    //Guardar la tarea
                    //tareasObj.tareanueva

                    break;

                    case 'filtrar':
                        let estado = process.argv[3];
                        //console.log(estado);
                        let todasTareas = tareasObj.leerJSON();
                        let tareasPorEstado = todasTareas.filter(function(tarea){
                        return tarea.estado == estado
                        });

                        console.log(tareasPorEstado);

                        break;

                 default :
                    console.log("no es posible ejecutar este termino");
                    break;


}
