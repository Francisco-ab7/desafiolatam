// Crea una estructura de datos para representar proyectos y tareas.
//- Cada proyecto debe tener un ID, nombre, fecha de inicio, y un array de tareas.
//- Cada tarea debe tener un ID, descripción, estado (pendiente, en progreso, completada) y fecha límite.
//- Implementaunafunción que permita añadir nuevas tareas a un proyecto.
//- Desarrolla una función que utilice métodos de array (map, filter, reduce) para generar un resumen del proyecto mostrando el número de tareas en cada estado.
//- Crea una función que ordene las tareas de un proyecto por fecha límite utilizando el método sort de JavaScript.
//

let projects = [
    {"id":1,"name":"Pintar casa","startDay":"01-01-24","tasks":{"id":1,"description":"limpiar","status":"Pendiente","deadline":"30-12-24"}}
]
function addProject(id,name,startDay,tasks){
    projects.push({id,name,startDay,tasks});
    return 
}

function addTaskToProject(projectId,id,description,status,deadline){
    for(i=0;i=projects.length;i++){
    if (projects[i] === projectId) {
        projects.tasks.push({id,description,status,deadline});
        console.log(`Tarea agregada al proyecto:`);     
    }
    else {console.log(`Proyecto no encontrado`); }

}}
addProject(2,"hacer mueble","01-01-24",{"id":2,"description":"medir","status":"Pendiente","deadline":"30-12-24"});

// Llamada a la función para agregar la tarea al proyecto con ID 1
addTaskToProject(1,2,"Pintar la pared","Pendiente","15-01-24");
console.log(projects);