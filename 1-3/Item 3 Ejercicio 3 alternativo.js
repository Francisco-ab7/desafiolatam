const projects = [
  {"id":1,"name":"Pintar casa","startDay":"2024-01-01","tasks":[{"id":1,"description":"limpiar","status":"Pendiente","deadline":"2024-12-01"},{"id":2,"description":"limpiar otra vez","status":"Pendiente","deadline":"2024-12-25"}]},
  {"id":2,"name":"Cambio de piso","startDay":"2024-02-15","tasks":[{"id":1,"description":"tomar medidas comedor & Living","status":"Pendiente","deadline":"2024-10-22"}]},
  {"id":3,"name":"Arreglar Baño","startDay":"2024-03-20","tasks":[{"id":1,"description":"remover accesorios","status":"Pendiente","deadline":"2024-11-01"},{"id":2,"description":"retirar ceramicass","status":"Pendiente","deadline":"2024-11-01"}]}
]
function crearProxyTarea(tarea, notificar) {
  return new Proxy(tarea, {
      set(target, prop, value) {
          if (prop === 'status' && value === 'Terminado') {
              notificar(target);
          }
          target[prop] = value;
          return true;
      }
  });
}

function registrarListeners(projects, notificar) {
  projects.forEach(project => {
      project.tasks = project.tasks.map(task => crearProxyTarea(task, notificar));
  });
}

function notificarTareaCompletada(tarea) {
  console.log(`¡Notificación! La tarea "${tarea.description}" ha sido completada.`);
}

registrarListeners(projects, notificarTareaCompletada);

projects[0].tasks[0].status = 'Terminado';  
projects[1].tasks[0].status = 'Terminado';  
