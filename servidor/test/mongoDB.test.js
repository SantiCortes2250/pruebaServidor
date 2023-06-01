const mongoose = require("mongoose");
const conectDB = require("../config/db");

let TestModel = undefined;
let collection = "prueba";

describe("Prueba de conexión con MongoDB", () => {
  beforeAll(async () => {
    await conectDB();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test("Se crea schema y collection para testear", async () => {
    let testSchema = new mongoose.Schema({
      name: String,
      pais: String,
    });

    TestModel = mongoose.model(collection, testSchema);
  });

  test("Se inserta un usuario de prueba", async () => {
    let user = new TestModel({ name: "Bernardo", pais: "Mexico" });
    await user.save();
  });
});
