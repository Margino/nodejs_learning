const asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(5, 7).then((res) => {
    console.log(res);
    return asyncAdd(res, '33');
}).then((res) => {
    console.log(res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// const somePromise = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve('Hey! It worked.');
//     }, 2500);
//     // reject('An error acured!');
// });
//
// somePromise.then((message) => {
//     console.log('Success:', message);
// }, (errorMessage) => {
//     console.log('Error:', errorMessage);
// });
