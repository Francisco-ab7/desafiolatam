const projects = [
    {"id":1,"name":"Pintar casa","startDay":"2024-01-01","tasks":[{"id":1,"description":"limpiar","status":"pendiente","deadline":"2024-11-17"},{"id":2,"description":"limpiar otra vez","status":"pendiente","deadline":"2025-06-25"}]},
    {"id":2,"name":"Cambio de piso","startDay":"2024-02-15","tasks":[{"id":1,"description":"tomar medidas comedor & Living","status":"pendiente","deadline":"2024-11-19"}]},
    {"id":3,"name":"Arreglar Baño","startDay":"2024-03-20","tasks":[{"id":1,"description":"remover accesorios","status":"completado","deadline":"2024-11-17"},{"id":2,"description":"retirar ceramicass","status":"pendiente","deadline":"2024-12-10"},{"id":3,"description":"sacar basura","status":"pendiente","deadline":"2024-12-16"}]}
  ]
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
console.log(resumenPorject())