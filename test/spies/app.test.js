const expect = require('expect');
const jest = require('jest-mock');
// const rewire = require('rewire');

// const app = require('./app');

describe('App', () => {

    // var db = {
    //     saveUser: jest.fn()
    // };
    // app.__set__('db', db);

    it('should call the spy correctly', () => {
        const spy = jest.fn(); // <= const spy = expect.createSpy();
        spy('Jonh', 25);
        // expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Jonh', 25);
    });

    // it('shall call saveUser with user object', () => {
    //     const email = 'some@email.com';
    //     const password = '123abc';
    //
    //     app.handleSingup(email, pasword);
    //     expect(db.saveUser).toHaveBeenCalledWith({email,password});
    // });
});
