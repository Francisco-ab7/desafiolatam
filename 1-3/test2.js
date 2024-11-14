//projects = [{"id":1,"name":"Pintar casa","startDay":"01-01-24","tasks":{"id":1,"description":"limpiar","status":"Pendiente","deadline":"30-12-24"}},]
//console.log(projects)


//---------------------------------------

// let projects = [{"id": 1,"name": "Pintar casa","startDay": "01-01-24","tasks": [{"id": 1,"description": "limpiar","status": "Pendiente","deadline": "30-12-24"}]}];
  
//   let newTask = {"id": 2,"description": "pintar paredes","status": "Pendiente","deadline": "15-01-24"};
  
//   let project = projects.find(p => p.id === 1); // Encuentra el proyecto con id 1
//   if (project) {
//     project.tasks.push(newTask); // Agrega el nuevo task al arreglo de tasks
//   }
//   console.log(...projects); 
  
  //-----------------------------------------------------------------------


// //   let projects = [{"id": 1,"name": "Pintar casa","startDay": "01-01-24","tasks": [{"id": 1,"description": "limpiar","status": "Pendiente","deadline": "30-12-24"}]}];
  
// //   let newTask = {"id": 2,"description": "pintar paredes","status": "Pendiente","deadline": "15-01-24"};
  

// //   function addTask (projectID, newTask){
// //   let project = projects.find(p => p.id === projectID);
// //   if (project) {
// //     project.tasks.push(newTask); 
// //   }
// // }

// //   addTask(1,newTask);
// //   console.log(...projects); 

a = '31-01-24'

let partes = fechaStr.split("-");

// Formateamos la fecha a 'YYYY-MM-DD' para que el constructor Date la entienda correctamente
let fecha = new Date("20" + partes[2], partes[0] - 1, partes[1]);

console.log(fecha);  // Output: Wed Jan 31 2024 00:00:00 GMT+0000 (UTC)

//mes/dias/año