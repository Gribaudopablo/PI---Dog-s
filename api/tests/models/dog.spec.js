const { Dog, Temperament, conn } = require("../../src/db")
const { expect } = require('chai');

describe('Model Testing', function() {
 
  describe('Dog model', function () {
    beforeEach(async function() {
      await Dog.sync({ force: true });
    });
    describe('Validations', function () {
      it('No debe crearse sin completar todos los campos obligatorios', function(done) {
         Dog.create({
          name: 'Rofo',
         })
          .then(() => done('¡No debería haber sido creado, amigo!'))
          .catch(() => done());
      });
      it('No debe crearse sin completar todos los campos obligatorios', function(done) {
        Dog.create({
          height: 'ARG',
        })
        .then(() => done('¡No debería haber sido creado, amigo!'))
        .catch(() => done());
      });
    });
  })
  describe('Temperament model', function () {
    beforeEach(async function() {
      await Temperament.sync({ force: true });
    });
        it('No debe crearse sin completar todos los campos obligatorios', function(done) {
        Temperament.create({
          id: '11',
        })
        .then(() => done('Should not have been created, dude!'))
        .catch(() => done());
      });
      it('El nombre debe ser una String', function(){
        expect(typeof Temperament.name).equal("string")
      })
    });
})