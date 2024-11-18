// Crea una función actualizarEstadoTarea que simule la actualización del
//  estado de una tarea en el servidor y maneje tanto el caso de éxito como el de
//  error.
const projects = [
    {"id":1,"name":"Pintar casa","startDay":"2024-01-01","tasks":[{"id":1,"description":"limpiar","status":"Pendiente","deadline":"2024-12-01"},{"id":2,"description":"limpiar otra vez","status":"Pendiente","deadline":"2024-12-25"}]},
    {"id":2,"name":"Cambio de piso","startDay":"2024-02-15","tasks":[{"id":1,"description":"tomar medidas comedor & Living","status":"Pendiente","deadline":"2024-10-22"}]},
    {"id":3,"name":"Arreglar Baño","startDay":"2024-03-20","tasks":[{"id":1,"description":"remover accesorios","status":"Pendiente","deadline":"2024-11-01"},{"id":2,"description":"retirar ceramicass","status":"Pendiente","deadline":"2024-11-01"}]}
  ]
function updateProject(idproj,idtask,newstatus) {
    return new Promise((resolve,reject)=>{
        console.log("cargando...");
        projects[idproj].tasks[idtask].status = newstatus
        setTimeout(()=>{
            resolve(projects[idproj]);
            reject(Error("Fallo"))
        },4000)
    }
    )
}
async function awaitProject(idproj,idtask,newstatus){
    const newidpro = idproj - 1;
    const newidtask = idtask - 1;
    const project = await updateProject(newidpro, newidtask, newstatus);
    console.log(project)
}
 
awaitProject(1,2,"terminado");
//console.log(projects[0])