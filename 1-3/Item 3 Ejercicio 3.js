const projects = [
    {"id":1,"name":"Pintar casa","startDay":"2024-01-01","tasks":[{"id":1,"description":"limpiar","status":"Pendiente","deadline":"2024-12-01"},{"id":2,"description":"limpiar otra vez","status":"Pendiente","deadline":"2024-12-25"}]},
    {"id":2,"name":"Cambio de piso","startDay":"2024-02-15","tasks":[{"id":1,"description":"tomar medidas comedor & Living","status":"Pendiente","deadline":"2024-10-22"}]},
    {"id":3,"name":"Arreglar Baño","startDay":"2024-03-20","tasks":[{"id":1,"description":"remover accesorios","status":"Pendiente","deadline":"2024-11-01"},{"id":2,"description":"retirar ceramicass","status":"Pendiente","deadline":"2024-11-01"}]}
  ]

const change = {
  nombre: 'Estudiar JavaScript',
  estado: 'pendiente'  
};
const filtrado = {
  set: function(projects, status, valor) {
    if (status === 'estado' && valor === 'terminado') {
      console.log(`El estado de la tarea ha cambiado a: ${valor}`);
    }
    projects[status] = valor;
    return true;  
  }
};
const filtroProxy = new Proxy(change, filtrado);
filtroProxy.estado = 'terminado'; 
projects.map((proj)=> console.log(proj))
