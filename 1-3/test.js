//------------patron constructor------------

function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    
    this.sayHello = function() {
      console.log(`Hola, soy ${this.name}`);
    }
    this.isAdult = function() {
      return this.age >= 18;
    }
   }
   // Uso del patrón Constructor
   const user1 = new User('Ana', 28, 'ana@example.com');
   const user2 = new User('Carlos', 17, 'carlos@example.com');
   user1.sayHello(); // Output: Hola, soy Ana
   console.log(user1.isAdult()); // Output: true
   console.log(user2.isAdult()); // Output: false
  
//------------Patron Modulo------------------------------
const Calculator = (function() {
    // Variable privada
    let result = 0;
    return {
      add: function(x) {
        result += x;
      },
      subtract: function(x) {
        result -= x;
      },
      getResult: function() {
        return result;
      }
    };
   })();
   // Uso
   Calculator.add(5);
   Calculator.subtract(2);
   console.log(Calculator.getResult()); // Output: 3

//------------Patrón Módulo Revelador---------------------
const ShoppingCart = (function() {
    // Variables privadas
    let items = [];
    // Funciones privadas
    function addItem(item) {
      items.push(item);
    }
    function getItemCount() {
      return items.length;
    }
    // Revelar interfaz pública
    return {
      add: addItem,
      total: getItemCount
    };
   })();
   // Uso
   ShoppingCart.add({name: "Libro", price: 20});
   console.log(ShoppingCart.total()); // Output: 1

//-----------------Patrón Prototipo ------------------------
const carPrototype = {
  init: function(model, color) {
    this.model = model;
    this.color = color;
  },
  getInfo: function() {
    return `${this.color} ${this.model}`;
  }
 };
 function createCar(model, color) {
  const car = Object.create(carPrototype);
  car.init(model, color);
  return car;
 }
 // Uso
 const car1 = createCar("Sedan", "Red");
 const car2 = createCar("SUV", "Blue");
 console.log(car1.getInfo()); // Output: "Red Sedan"
 console.log(car2.getInfo()); // Output: "Blue SUV"

 //-------------------Patrón Singleton------------------
 const Database = (function() {
    let instance;
    function createInstance() {
      const object = new Object("Conexión a la BD");
      return object;
    }
    return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
   })();
   // Uso
   const db1 = Database.getInstance();
   const db2 = Database.getInstance();
   console.log(db1 === db2); // Output: true
  



