
const app =  require('../../app');
const request = require('supertest');


describe('register', () => {
    it('return status code 201 if name passed', async () => {
        const res = await request(app).post('/api/users').send({
            name: 'Francis',
            email: 'fr@yahoo.com',
            password: '12345',
        })

        .expect('Content-Type', /json/)
        .expect(201);

        expect(res.body).toMatchObject({
            name: 'Francis',
            email: 'fr@yahoo.com',
            password: '12345',

        });
        
    });

});