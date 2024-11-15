
let n = ["2024-01-01","2024-02-01","2024-12-01","2024-11-01","2024-10-01",];
let a = n.reduce((mayor,tarea)=>{
    let tarea1 = new Date(tarea);
    return mayor>tarea1 ? mayor:tarea1
},0)
console.log(a)


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

-----------------------------------------------------