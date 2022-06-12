const userLeft = false
const userWatchingCatMe = false

// ---------- 1 callback ------------- // 

// function watchTutorialCallback(callback, errorCallback) {
//     if(userLeft){
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if(userWatchingCatMe) {
//         errorCallback({
//             name: 'User Watching Cat Me',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs Up and Subscribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success:', message)
// }, (error) => {
//     console.log(error.name + " " + error.message)
// })

// ---------- 2 promise ------------- // 


// function watchTutorialPromise() {
//     return new Promise((resolve, reject) => {
//         if(userLeft){
//             reject({
//                 name: 'User Left',
//                 message: ':('
//             })
//         } else if(userWatchingCatMe) {
//             reject({
//                 name: 'User Watching Cat Me',
//                 message: 'WebDevSimplified < Cat'
//             })
//         } else {
//             resolve('Thumbs Up and Subscribe')
//         }
//     })
    
// }

// watchTutorialPromise().then((message) => {
//     console.log('Success:', message)
// }).catch((error) => {
//     console.log(error.name + " " + error.message)
// }) 

// setTimeout(() => {
//     console.log('Timeout')
// }, 0);


// const recordVideoOne = new Promise((resolve,reject) => {
//     resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve,reject) => {
//     resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve,reject) => {
//     resolve('Video 3 Recorded')
// })

// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((message) => {
//     console.log(message)
// })



// console.log('Sync')

const fetchUserFromServer = username => {
    return new Promise((resolve, reject) => {
      console.log(`Fetching data for ${username}`);
  
      setTimeout(() => {
        // Change value of isSuccess variable to simulate request status
        const isSuccess = true;
  
        if (isSuccess) {
          resolve("success value");
        } else {
          reject("error");
        }
      }, 2000);
    });
  };
  
  fetchUserFromServer("Mango")
    .then(user => console.log(user))
    .catch(error => console.error(error));


    // const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(5);
    //     }, 2000);
    //   });
      
    //   promise
    //     .then(value => {
    //     //   console.log(value); // 5
    //       return value * 2;
    //     })
    //     .then(value => {
    //     //   console.log(value); // 10
    //       return value * 3;
    //     })
    //     .then(value => {
    //       console.log(value); // 30
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
    //     .finally(() => {
    //       console.log("Final task");
    //     });