const projects = [
    {"id":1,"name":"Pintar casa","startDay":"2024-01-01","tasks":[{"id":1,"description":"limpiar","status":"Pendiente","deadline":"2024-12-01"},{"id":2,"description":"limpiar otra vez","status":"Pendiente","deadline":"2024-12-25"}]},
    {"id":2,"name":"Cambio de piso","startDay":"2024-02-15","tasks":[{"id":1,"description":"tomar medidas comedor & Living","status":"Pendiente","deadline":"2024-10-22"}]},
    {"id":3,"name":"Arreglar Baño","startDay":"2024-03-20","tasks":[{"id":1,"description":"remover accesorios","status":"Pendiente","deadline":"2024-11-25"},{"id":2,"description":"retirar ceramicass","status":"Pendiente","deadline":"2024-12-10"}]}
  ]
//   Implementa una función calcularTiempoRestante que utilice el método
//  reduce para calcular el número total de días que faltan para completar todas
//  las tareas pendientes de un proyecto.
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
if(calcDays <= 0){
    console.log("Plazo Cumplido")
}
else {
    console.log("Quedan " + calcDays + " dias del termino del projecto " + projectID)
}
}
remainingtime(3)