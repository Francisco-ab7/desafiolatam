const request = require("supertest");
const app = require("../../src/index.js");

// const {
//   obtenerProductos,
//   borrarProducto
// } = require("../../src/models/producto.model.js")

const productos = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    brand: "Dell",
    category: "Laptops",
    price: 1299.99,
    stock: 10,
    description: "A powerful ultraportable laptop with a stunning display.",
  },
  {
    id: 2,
    name: "Apple MacBook Air M1",
    brand: "Apple",
    category: "Laptops",
    price: 999.0,
    stock: 15,
    description: "A thin and light laptop with the powerful M1 chip.",
  },
];

jest.mock("../../src/models/producto.model.js", () => {
  return {
    obtenerProductos: jest.fn(() => Promise.resolve(productos)),
    borrarProducto: jest.fn((id) => {
      const producto = productos.find((item) => item.id === id);
      if (producto) return Promise.resolve();
      return Promise.reject();
    }),
  };
});

describe("/api/v1/productos", () => {
  it("GET/ Should return productos' array", async () => {
    const { statusCode, body } = await request(app).get("/api/v1/productos");

    expect(statusCode).toBe(200);
  });

  it("DELETE/ should return code 200 if id exists", async () => {
    const id = 1;
    const { body, statusCode } = await request(app).delete(
      `/api/v1/productos/${id}`
    );
    // TODO: expect??
  });
});
