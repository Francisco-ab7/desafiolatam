let projects = [
    {"id":1,"name":"Pintar casa","startDay":"01-01-24","tasks":{"id":1,"description":"limpiar","status":"Pendiente","deadline":"30-12-24"}}
]
function addtask(idpro,[task]){
projects.forEach((proj)=>{
    if(proj.id===idpro){
        console.log("Si esta");
        projects[0].tasks.push(task);
    }
    else {console.log("no esta")}
})
}
//taskadd = [{"id":1,"description":"limpiar","status":"Pendiente","deadline":"30-12-24"}];
taskadd = [1,"limpiar","Pendiente","30-12-24"];
console.log(projects);
console.log(typeof(taskadd));
console.log(typeof(projects));
console.log(Array.isArray(taskadd))
addtask(1,taskadd)
