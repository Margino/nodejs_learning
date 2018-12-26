const expect = require('expect');
const utils = require('./utils.js');

it('should add two numbers', () => {
    const res = utils.add(33, 11);

    expect(res).toBe(44);
    expect(typeof res).toBe('number');
});

it('should async add to number', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7);
        expect(typeof sum).toBe('number');
        done();
    })
});

it('should square a number', () => {
    const res = utils.square(3);

    expect(res).toBe(9);
    expect(typeof res).toBe('number');
});

it ('should async square a number', (done) => {
    utils.asyncSquare(5, (res) => {
        expect(res).toBe(25);
        expect(typeof res).toBe('number');
        done();
    });
});

it('should expect some number', () => {
    // expect(12).not.toBe(11);
    // expect({name: 'John'}).toEqual({name: 'John'});
    // expect({name: 'john'}).not.toEqual({name: 'John'});
    // expect([1,4,6]).toContain(1);
    expect({name: 'John', age: 25}).toMatchObject({age: 25});
});

it('shuld set first and last name', () => {
    const user = {location: 'Philadelphia', age: 26};
    const res = utils.setName(user, 'John Dillan');

    expect(res).toMatchObject({firstName: 'John', lastName: 'Dillan'});
    expect(typeof res).toBe('object');
});
