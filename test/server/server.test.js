const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {

    describe('Get /', () => {
        it('should return Hello world!', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toMatchObject({
                        error: 'Page not found'
                    })
                })
                .end(done)
        });
    });

    describe('Get /users', () => {
        it('Should return my users object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({
                                name: 'John',
                                age: 22,
                            })
                        ])
                    )
                })
                .end(done)
        });
    });

});
