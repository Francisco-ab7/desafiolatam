const projects = [
    {"id":1,"name":"Pintar casa","startDay":"2024-01-01","tasks":[{"id":1,"description":"limpiar","status":"Pendiente","deadline":"2024-12-01"},{"id":2,"description":"limpiar otra vez","status":"Pendiente","deadline":"2024-12-25"}]},
    {"id":2,"name":"Cambio de piso","startDay":"2024-02-15","tasks":[{"id":1,"description":"tomar medidas comedor & Living","status":"Pendiente","deadline":"2024-10-22"}]},
    {"id":3,"name":"Arreglar Baño","startDay":"2024-03-20","tasks":[{"id":1,"description":"remover accesorios","status":"Pendiente","deadline":"2024-11-25"},{"id":2,"description":"retirar ceramicass","status":"Pendiente","deadline":"2024-12-10"}]}
  ]
// function remainingtime(projectID) {
    const project = projects.find(p => p.id === 3);
     if(project){
        let convProject = Object.entries(project);
        let proj = convProject.map((task)=>{
            let eachtask = task.map((tfin)=>{
                return {tfin:task.deadline}
            })
            return eachtask
        })
        return proj
    }
console.log(project)


// }
// remainingtime(3)