/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai")
const session = require("supertest-session")
const app = require("../../src/app")
const { Dog, Temperament, conn } = require("../../src/db")

const agent = session(app)

describe("Dogs routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("No se puede llegar a la base de datos", err)
    })
  )

describe('/dogs', function() {
  it('GET respuesta con estado 200', function(){
    return agent
      .get('/dogs')
      .expect(function(res){
        expect(res.status).equal(200)})
  }).timeout(10000)
  it('Los elementos recibidos son Objeto',  function() {
    return agent 
      .get('/dogs') 
      .expect(function(res) {
        expect(typeof res.body[0]).equal('object'); 
      });
  }).timeout(10000)
})
describe('/dogs?name=', function() {
  it('GET respuesta con estado 200 con una URL de nombre con mayúsculas y minúsculas mixtas', function() {
    return agent 
      .get('/dogs?name=TeRRiEr') 
      .expect(function(res){
        expect(res.status).equal(200)}); 
      }).timeout(10000)
  it('GET recibe una longitud de cuerpo mayor si hay coincidencias de consulta',  function() {
    return agent 
      .get('/dogs?name=toy') 
      .expect(function(res) {
        expect(res.body.length).equal(5); 
      });
  }).timeout(3000)
})
describe('/dogs/:id', function() {
  it('GET respuestas con el estado 200 si se encuentra un perro',  function() {
    return agent 
      .get('/dogs/13') 
      .expect(function(res){
        expect(res.status).equal(200)}); 
      }).timeout(10000);
  it('GET obtiene datos del perro por el :id como parámetro',  function() {
    return agent 
      .get('/dogs/13')
      .expect(function(res) {
        expect(res.body.name).equal('Perro esquimal americano (miniatura)'); 
      });
  }).timeout(10000)
})
describe('/temperament', function() {
  it('GET envía el estado 200 al encontrar temperamentos', function() {
    return agent 
      .get('/temperament') 
      .expect(function(res){
        expect(res.status).equal(200)}); 
      }).timeout(10000);
  })
});