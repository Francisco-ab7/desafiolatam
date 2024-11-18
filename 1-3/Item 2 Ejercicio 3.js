const projects = [
    {"id":1,"name":"Pintar casa","startDay":"2024-01-01","tasks":[{"id":1,"description":"limpiar","status":"pendiente","deadline":"2024-11-17"},{"id":2,"description":"limpiar otra vez","status":"pendiente","deadline":"2025-06-25"}]},
    {"id":2,"name":"Cambio de piso","startDay":"2024-02-15","tasks":[{"id":1,"description":"tomar medidas comedor & Living","status":"pendiente","deadline":"2024-11-18"}]},
    {"id":3,"name":"Arreglar Baño","startDay":"2024-03-20","tasks":[{"id":1,"description":"remover accesorios","status":"pendiente","deadline":"2024-11-18"},{"id":2,"description":"retirar ceramicass","status":"pendiente","deadline":"2024-11-25"},{"id":3,"description":"sacar basura","status":"pendiente","deadline":"2024-11-17"}]}
  ]

function datenow() {  //funcion para igualar la fecha actual a la que esta en los proyectos
    const fecha = new Date(); 
    const anio = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); 
    const dia = fecha.getDate().toString().padStart(2, '0'); 
    const fechaFormateada = `${anio}-${mes}-${dia}`;
    return new Date(fechaFormateada)
}
const dayfactor = (1000*60*60*24) //milisegundo*segundo*minutos*hora}

function alert(){
  const alertTask = projects.map((project)=> {
    const capture = project.tasks.map((times)=> {
      const daysCount = (new Date(times.deadline) - datenow())/dayfactor
      if(times.status != 'completado' && daysCount <= 3 && daysCount >= 0 ){
        const taskalert = [];
        taskalert.push(project.id,times.description,times.deadline,daysCount);
        console.log("ProjID: "+ taskalert[0],"- Descripcion: " + taskalert[1],"- Fecha Termino: " + taskalert[2], "-Dias Faltantes: " + taskalert[3])
    }
    }) 
  })
}
console.log(alert())
