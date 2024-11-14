// Crea una estructura de datos para representar proyectos y tareas.
//- Cada proyecto debe tener un ID, nombre, fecha de inicio, y un array de tareas.
//- Cada tarea debe tener un ID, descripción, estado (pendiente, en progreso, completada) y fecha límite.
//- Implementaunafunción que permita añadir nuevas tareas a un proyecto.
//- Desarrolla una función que utilice métodos de array (map, filter, reduce) para generar un resumen del proyecto mostrando el número de tareas en cada estado.
//- Crea una función que ordene las tareas de un proyecto por fecha límite utilizando el método sort de JavaScript.
//
//----------------------item 1-------------------------------
//--------parte 1---------------
let projects = [
    {"id":1,"name":"Pintar casa","startDay":"01-01-24","tasks":[{"id":1,"description":"limpiar","status":"Pendiente","deadline":"30-12-24"}]},
    {"id":2,"name":"Cambio de piso","startDay":"01-03-24","tasks":[{"id":1,"description":"tomar medidas comedor & Living","status":"Pendiente","deadline":"25-12-24"}]},
    {"id":3,"name":"Arreglar Baño","startDay":"01-07-24","tasks":[{"id":1,"description":"remover accesorios","status":"Pendiente","deadline":"20-12-24"}]}
]
function addProject(id,name,startDay,tasks){
    projects.push({id,name,startDay,tasks});
    return 
}

//------------parte 2 -------------

let newTask = {"id": 2,"description": "pintar paredes","status": "Pendiente","deadline": "15-01-24"};
  
function addTask (projectID, newTask){
let project = projects.find(p => p.id === projectID);
if (project) {
  project.tasks.push(newTask); 
}}
addTask(1,newTask);
//console.log(...projects); 

//-----------parte 3 ---------------------


resumenProject = projects.map((project)=>{
    
    return {
        
        ID: project.id,
        Projecto: project.name, 

    }
})
console.log(...resumenProject)

//-------------------item 4 -------------------