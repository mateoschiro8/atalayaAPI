const request = require('supertest');
const {app, server} = require('../index.js');
const {client, dbDisconnect} = require("../db/dbConnection.js");

afterAll((done) => {
    server.close(done);
    dbDisconnect();
});

describe('Información de heroes', () => {

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

    describe('HeroesGET con id', () => {

        test('GET con id existente devuelve 200 con info', async () =>{
            const response = await request(app).get("/heroes/btmn").send();
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('info');
        })

        test('GET con id no existente devuelve 404', async () =>{
            const response = await request(app).get("/heroes/idnoexistente").send();
            expect(response.statusCode).toBe(404);
            expect(response.body.message).toBe('No se conoce un héroe con tal ID');
        })

        test.todo('DELETE con id existente devuelve 204 y borra');
        
        test.todo('DELETE con id no existente devuelve 404');

    })
});

describe('Reservas', () => {

    describe('GET de reservas', () => {

        test.todo('Con ID válido devuelve 200 y array de reservas');

        test.todo('Con ID inválido devuelve 404');

    });

    describe('POST de reservas', () => {

        test.todo('Con ID válido agrega la reserva');

        test.todo('Con ID inválido devuelve 404');

    });

    describe('Reservas con ID', () => {

        describe('GET de reservas con ID', () => {

            test.todo('Con ID válido devuelve la reserva');

            test.todo('Con ID inválido de héroe o reserva devuelve 404');
    
        });

        describe('DELETE de reservas con ID', () => {

            test.todo('Con ID válido elimina la reserva');

            test.todo('Con ID inválido de héroe o reserva devuelve 404');
    
        });

    });
});