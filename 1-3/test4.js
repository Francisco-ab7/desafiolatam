
// let n = ["2024-01-01","2024-02-01","2024-12-01","2024-11-01","2024-10-01",];
// let a = n.reduce((mayor,tarea)=>{
//     let tarea1 = new Date(tarea);
//     return mayor>tarea1 ? mayor:tarea1
// },0)
// console.log(a)


//-----------------------------
// agregar proyectos
// function addProject(id,name,startDay,tasks){
//     projects.push({id,name,startDay,tasks});
//     return 
// }
// -----------------------------------

// trae la ultima fecha de tarea segun projecto

// const deadlines = projects.map(project => 
//     project.tasks.map(task => task.deadline)
//   );
//   deletearray = deadlines[0]
//   //console.log(deletearray);
//   let lastdate = deletearray.reduce((mayor,tarea)=>{
//     let tarea1 = new Date(tarea);
//     return mayor>tarea1 ? mayor:tarea1
// },0)
// console.log(lastdate)

// ----------------------------------------------

//resument de proyecto y estado 

// // function resumenPorject (){
// //     const taskProject = projects.map((projet) => {
// //         const taskItem = projet.tasks.map((task) => {
// //             return{
// //                 Tarea:task.id,
// //                 Estado:task.status
// //             }})
// //         return {
// //             ProjectID:projet.id,
// //             Tareas:JSON.stringify(taskItem)
// //             }   
// //         })    
// //     return taskProject
// //     }
// // console.log(resumenPorject())

//-----------------------------------------------------
//--------------------ejercicio2 item2-----------

// function datenow() {  //funcion para igualar la fecha actual a la que esta en los proyectos
//     const fecha = new Date(); 
//     const anio = fecha.getFullYear();
//     const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); 
//     const dia = fecha.getDate().toString().padStart(2, '0'); 
//     const fechaFormateada = `${anio}-${mes}-${dia}`;
//     return new Date(fechaFormateada)
// }
// const dayfactor = (1000*60*60*24) //milisegundo*segundo*minutos*hora

// function remainingtime(projectID){
//   const findProject = projects.find(p => p.id === projectID);
//    const timesTasks = findProject.tasks.map((times) => {
//       if(times.status != 'completado'){
//         const operation =  (new Date(times.deadline)- datenow())/dayfactor;
//         return operation; 
//       }
//       else {return (times.deadline = 0)}
//     })
//   //console.log(timesTasks) 
//   const calcDays = timesTasks.reduce((counting, dates)=>{
//     return counting + dates
//   },0)
// console.log(calcDays)
// }
// remainingtime(3)
//--------------------------------------------------------------