// Crea una estructura de datos para representar proyectos y tareas.
//- Cada proyecto debe tener un ID, nombre, fecha de inicio, y un array de tareas.
//- Cada tarea debe tener un ID, descripción, estado (pendiente, en progreso, completada) y fecha límite.
//- Implementaunafunción que permita añadir nuevas tareas a un proyecto.
//- Desarrolla una función que utilice métodos de array (map, filter, reduce) para generar un resumen del proyecto mostrando el número de tareas en cada estado.
//- Crea una función que ordene las tareas de un proyecto por fecha límite utilizando el método sort de JavaScript.
//  

let projects = [
    {"id":1,"name":"Pintar casa","startDay":"01-01-24","tasks":{"id":2,"description":"ir a comprar","status":"Pendiente","deadline":"30-12-24"}}
]
//function Projects(){
// const Projects = {
    
//     addproject(id,name,startDay,tasks) {
//     projects.push({id,name,startDay,tasks});

//     },

// }

// Projects.addproject(2,"hacer mueble","12-11-24",[2,"ir a comprar 2","Pendiente"])

// console.log(projects);
function addProject(id,name,startDay,tasks){
    projects.push({id,name,startDay,tasks});
    return "agregado"
}
addProject(2,"Hacer Mueble","01-01-24",{"id":12,"description":"ir a comprar 2","status":"Pendiente"});
console.log(projects);
const task= [];
function addTasks(id,idProject,description,status,deadline) {


}

function searchtask() {


    
}
