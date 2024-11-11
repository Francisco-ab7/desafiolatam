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