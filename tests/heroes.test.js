const request = require('supertest');
const {app, server} = require('../index.js');
const {client, dbDisconnect} = require("../db/dbConnection.js");

afterAll((done) => {
    server.close(done);
    dbDisconnect();
});

describe('Heroes', () => {

    describe('HeroesGET sin fecha', () => { 
        let response;

        beforeAll(async () => {
            response = await request(app).get("/heroes").send();
        });

        test('Codigo OK 200', () => {
            expect(response.statusCode).toBe(200);
        });
        
        test('Campos id, nombre, precio y links presentes', async () => {
            // Verifica que el cuerpo de la respuesta sea un array
            expect(Array.isArray(response.body)).toBe(true);
    
            // Verifica que cada objeto en el array tenga los atributos id, tipo y nombre
            response.body.forEach(obj => {
                expect(obj).toHaveProperty('_id');
                expect(obj).toHaveProperty('nombre');
                expect(obj).toHaveProperty('precio');
                expect(obj).toHaveProperty('desc');
                expect(obj).toHaveProperty('links');
                expect(obj.links).toHaveProperty('info');
                expect(obj.links).toHaveProperty('borrar');
                expect(obj.links).toHaveProperty('reservas');
            });
        });
        
    });
});