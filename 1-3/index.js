let biblioteca = {
    "nombre": "Biblioteca Central",
    "libros": [
    {
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    "año": 1967
    },
    {
    "titulo": "1984",
    "autor": "George Orwell",
    "año": 1949
    }
    ]
   }
// ------------------------------------------------------
   biblioteca.ubicacion = {
    "ciudad": "Madrid",
    "direccion": {
    "calle": "Calle Mayor",
    "numero": 1,
    "codigoPostal": "28001"
    }
   };
   console.log(biblioteca);
// ------------------------------------------------------
   biblioteca.contarLibros = function() {
    return this.libros.length;
   };
   console.log("Número de libros:", biblioteca.contarLibros());
   console.log(JSON.stringify(biblioteca, null, 2));
   // Nota cómo la función no aparece en el JSON


   
   
// ------------------------------------------------------


   const { nombre, ubicacion: { ciudad } } = biblioteca;
   const [primerLibro, segundoLibro] = biblioteca.libros;
   console.log(`La ${nombre} está en ${ciudad}`);
   console.log(`El primer libro es "${primerLibro.titulo}" de ${primerLibro.autor}`);
   
// ------------------------------------------------------


