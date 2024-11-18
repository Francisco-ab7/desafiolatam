//----------------------item 1-------------------------------
//-------- ejercicio 1---------------
//Crea una estructura de datos para representar proyectos y tareas
//YY-MM-DD
const projects = [
    {"id":1,"name":"Pintar casa","startDay":"2024-01-01","tasks":[{"id":1,"description":"limpiar","status":"Pendiente","deadline":"2024-12-01"},{"id":2,"description":"limpiar otra vez","status":"Pendiente","deadline":"2024-12-25"}]},
    {"id":2,"name":"Cambio de piso","startDay":"2024-02-15","tasks":[{"id":1,"description":"tomar medidas comedor & Living","status":"Pendiente","deadline":"2024-10-22"}]},
    {"id":3,"name":"Arreglar Baño","startDay":"2024-03-20","tasks":[{"id":1,"description":"remover accesorios","status":"Pendiente","deadline":"2024-11-25"},{"id":2,"description":"retirar ceramicass","status":"Pendiente","deadline":"2024-12-10"}]}
  ]
//------------ ejercicio 2 -------------
//Implementaunafunción que permita añadir nuevas tareas a un proyecto.

const newTask = {"id": 2,"description": "pintar paredes","status": "Pendiente","deadline":"2024-10-25"};
  
function addTask (projectID, newTask){
let project = projects.find(p => p.id === projectID);
if (project) {
  project.tasks.push(newTask);
  console.log("Tarea Agregada") 
}}

//ddTask(1,newTask);


//----------- ejercicio 3 ---------------------
//Desarrolla una función que utilice métodos de array (map, filter, reduce) para generar un resumen del proyecto mostrando el número de tareas en cada estado.

function resumenPorject (){
    const taskProject = projects.map((projet) => {
        const taskItem = projet.tasks.map((task) => {
            return{
                Tarea:task.id,
                Estado:task.status
            }})
        return {
            ProjectID:projet.id,
            Tareas:JSON.stringify(taskItem)
            }   
        })    
    return taskProject
    }
//console.log(resumenPorject())

//-------------------ejercicio 4 -------------------
// Crea una función que ordene las tareas de un proyecto por fecha límite utilizando el método sort de JavaScript

function orderTaskDeadline(idProject){ 
    const project = projects.find(p => p.id === idProject);  
      if (project) {
          const sortedTasks = project.tasks.sort((a, b) => {
              return new Date(a.deadline) - new Date(b.deadline);
            });
          const result = sortedTasks.map(task => ({
                description: task.description,
                deadline: task.deadline
            }));
    
        console.log(result);
    } else {
        console.log('Proyecto no encontrado');
    }
    }
//orderTaskDeadline(3)
//--------------Item 2-----------------------------------------

//-------------------ejercicio 1 -------------------
// Crea una función de orden superior filtrarTareasProyecto que tome una
// función de filtrado como argumento y la aplique a la lista de tareas de un
// proyecto.
function orderTaskID(idProject){ 
    const project = projects.find(p => p.id === idProject);
      if (project) {
          const sortedTasks = project.tasks.sort((a, b) => {
              return new Date(a.id) - new Date(b.id);
            });
          const result = sortedTasks.map(task => ({
                TaskID:task.id,
                description: task.description,
                deadline: task.deadline
            }));
    
        console.log(result);
    } else {
        console.log('Proyecto no encontrado');
    }}
orderTaskID(3);

//-------------------ejercicio 2 -------------------
function datenow() {  //funcion para igualar la fecha actual a la que esta en los proyectos
    const fecha = new Date(); 
    const anio = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); 
    const dia = fecha.getDate().toString().padStart(2, '0'); 
    const fechaFormateada = `${anio}-${mes}-${dia}`;
    return new Date(fechaFormateada)
}
const dayfactor = (1000*60*60*24) //milisegundo*segundo*minutos*hora

function remainingtime(projectID){
  const findProject = projects.find(p => p.id === projectID);
   const timesTasks = findProject.tasks.map((times) => {
      if(times.status != 'completado'){
        const operation =  (new Date(times.deadline)- datenow())/dayfactor;
        return operation; 
      }
      else {return (times.deadline = 0)}
    })
  //console.log(timesTasks) 
  const calcDays = timesTasks.reduce((counting, dates)=>{
    return counting + dates
  },0)
console.log(calcDays)
}
//remainingtime(3)

//-------------- ejercicio 3 
function alert(){
  const alertTask = projects.map((project)=> {
    const capture = project.tasks.map((times)=> {
      const daysCount = (new Date(times.deadline) - datenow())/dayfactor
      if(times.status != 'completado' && daysCount <= 3 && daysCount >= 0 ){
        const taskalert = [];
        taskalert.push(project.id,times.description,times.deadline,daysCount);
        console.log("- ProjID: "+ taskalert[0],"- Descripcion: " + taskalert[1],"- Fecha Termino: " + taskalert[2], "- Dias Faltantes: " + taskalert[3])
    }
    })
    //return 
  })
}
//console.log(alert())