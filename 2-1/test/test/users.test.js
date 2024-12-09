const request = require("supertest")
const  app = require('../index.js')
//const app = express();
// Definimos la estructura de la ruta raíz

describe("Ruta GET /users", () => {
    it("debería devolver un código 200 al ingresar a la ruta raíz", async () => 
  {
      const response = await request(app).get("/users").expect(200);
      const status = response.statusCode;
      expect(status).toBe(200);
    });
   });