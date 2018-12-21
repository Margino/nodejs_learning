const somePromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('Hey! It worked.');
    }, 2500);
    // reject('An error acured!');
});

somePromise.then((message) => {
    console.log('Success:', message);
}, (errorMessage) => {
    console.log('Error:', errorMessage);
});
