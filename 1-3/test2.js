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

const projects = [
  {"id":1,"name":"Pintar casa","startDay":"2024-01-01","tasks":[{"id":1,"description":"limpiar","status":"Pendiente","deadline":"2024-12-01"},{"id":2,"description":"limpiar otra vez","status":"Pendiente","deadline":"2024-12-25"}]},
  {"id":2,"name":"Cambio de piso","startDay":"2024-02-15","tasks":[{"id":1,"description":"tomar medidas comedor & Living","status":"Pendiente","deadline":"2024-10-22"}]},
  {"id":3,"name":"Arreglar Baño","startDay":"2024-03-20","tasks":[{"id":1,"description":"remover accesorios","status":"Pendiente","deadline":"2024-11-01"},{"id":2,"description":"retirar ceramicass","status":"Pendiente","deadline":"2024-11-01"}]}
]

function orderTask(idProject){ 
const project = projects.find(p => p.id === idProject);
//console.log(project);

  if (project) {
      const sortedTasks = project.tasks.sort((a, b) => {
          return new Date(a.deadline) - new Date(b.deadline);
        });
        console.log(sortedTasks);
      const result = sortedTasks.map(task => ({
          description: task.description,
         deadline: task.deadline
        }));

    console.log(result);
} else {
    console.log('Proyecto no encontrado');
}
}

orderTask(1);