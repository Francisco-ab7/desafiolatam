const projects = [
    {"id":1,"name":"Pintar casa","startDay":"2024-01-01","tasks":[{"id":1,"description":"limpiar","status":"Pendiente","deadline":"2024-12-01"},{"id":2,"description":"limpiar otra vez","status":"Pendiente","deadline":"2024-12-25"}]},
    {"id":2,"name":"Cambio de piso","startDay":"2024-02-15","tasks":[{"id":1,"description":"tomar medidas comedor & Living","status":"Pendiente","deadline":"2024-10-22"}]},
    {"id":3,"name":"Arreglar Baño","startDay":"2024-03-20","tasks":[{"id":1,"description":"remover accesorios","status":"Pendiente","deadline":"2024-11-01"},{"id":2,"description":"retirar ceramicass","status":"Pendiente","deadline":"2024-11-01"}]}
  ]
function getProject(idproj) {
    return new Promise((resolve,reject)=>{
        console.log("cargando...");
        setTimeout(()=>{
            resolve(projects[idproj]);
            reject(Error("Fallo"))
        },4000)
    }
    )
}

async function awaitProject(idproj){
    newidpro = idproj -1;
    const project = await getProject(newidpro);
    console.log(project)
}   

awaitProject(1)