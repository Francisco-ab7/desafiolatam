// Crea una función de orden superior filtrarTareasProyecto que tome una
//  función de filtrado como argumento y la aplique a la lista de tareas de un
//  proyecto.
const projects = [
    {"id":1,"name":"Pintar casa","startDay":"2024-01-01","tasks":[{"id":1,"description":"limpiar","status":"pendiente","deadline":"2024-11-17"},{"id":2,"description":"limpiar otra vez","status":"pendiente","deadline":"2025-06-25"}]},
    {"id":2,"name":"Cambio de piso","startDay":"2024-02-15","tasks":[{"id":1,"description":"tomar medidas comedor & Living","status":"pendiente","deadline":"2024-11-19"}]},
    {"id":3,"name":"Arreglar Baño","startDay":"2024-03-20","tasks":[{"id":1,"description":"remover accesorios","status":"completado","deadline":"2024-12-17"},{"id":2,"description":"retirar ceramicass","status":"pendiente","deadline":"2024-12-10"},{"id":3,"description":"sacar basura","status":"pendiente","deadline":"2024-12-16"}]}
  ]
  function ordenarPor(idProyecto, nombreFuncion) { 
    const proyecto = projects.find(proyecto => proyecto.id === idProyecto);
     if (!proyecto) { 
        console.error(`Proyecto no encontrado`);
     return;
    } 
    if (proyecto){
        if(nombreFuncion === porid) {
            proyecto.tasks = porid(idProyecto)
        }
        if(nombreFuncion === porfecha) {
            proyecto.tasks = porfecha(idProyecto)
        }
        else {
            console.log("nombre funcion incorrecto")
        }
    }
    return proyecto;
    } 
 

function porfecha(idProject){ 
    const project = projects.find(p => p.id === idProject);  
      if (project) {
          const sortedTasks = project.tasks.sort((a, b) => {
              return new Date(a.deadline) - new Date(b.deadline);
            });
        //console.log(sortedTasks);
          const result = sortedTasks.map(task => ({
                ID:task.id,
                description: task.description,
                deadline: task.deadline
            }));
    
        console.log(result);
    } else {
        console.log('Proyecto no encontrado');
    }
    }
function porid(idProject){ 
    const project = projects.find(p => p.id === idProject);  
        if (project) {
            const sortedTasks = project.tasks.sort((a, b) => {
            return a.id - b.id;
                });
            //console.log(sortedTasks);
              const result = sortedTasks.map(task => ({
                    ID:task.id,
                    description: task.description,
                    deadline: task.deadline
                }));
        
            console.log(result);
        } else {
            console.log('Proyecto no encontrado');
        }
    }
const datos = ordenarPor(3, porfecha)
//console.log(datos)