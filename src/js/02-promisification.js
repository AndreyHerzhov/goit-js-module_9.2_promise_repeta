/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const makeOrder = (dish) => {
//     const DELAY = 1000;

//     const passed = Math.random() > 0.5

//     return promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//         if(passed){
//             resolve('✅Ales Gut. Der Kuchen ist fetrig')
//         }else{
//             reject('❌Ales ist vorbei')
//         }
//     }, DELAY)
//     })
     
// }
 

// makeOrder('kuchen').then(onMakeOrderSuccess).catch(onMakeOrderError)

// then(x => console.log(x))
 
// function onMakeOrderSuccess(result) {
//     console.log(result)
// }

// function onMakeOrderError(error) {
//     console.log(error)
// }

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

// const makeOrder = (dish, onSuccess) => {
//     return Promise.resolve(`Hier ist deine Platte ${dish}`)
// }

// makeOrder('kuchen').then(onMakeOrderSuccess)
 

/*
 * Покемоны с https://pokeapi.co/
 */

// const fetchPokemonById = id => {
//  return   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
 
// }

// function onFetchSuccess (pokemon) {
//     console.log(pokemon)
// }

// function onFetchError (error) {
//     console.log('This is in error')
//     console.log(error)
// }

// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError)
// fetchPokemonById(1,onFetchSuccess,onFetchError)
// fetchPokemonById(2)
// fetchPokemonById(3)


const makePromise = () => {
   return new Promise((resolve,reject) => {
        const passed = Math.random() > 0.5
       setTimeout(() => {
        if(passed) {
            resolve('✅resolve')
        }
        reject('❌Ops')
        
       }, 200);
    })
}

makePromise()
.then(result => console.log(result))
.catch(error => console.log(error))

 
// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('✅ Куку это resolve');
//       }

//       reject('❌ все пропало это reject');
//     }, 200);
//   });
// };

// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error));







//  const promise = new Promise((resolve) => {
//      resolve(10)
//  })

//  promise.then(value => {
//      new Promise(resolve => {
//          resolve(value * 2)
//      })
//  }).then(value =>console.log(value)) // undefined

// const array = [1,2,3,4]
// array.forEach(function (i) {
//     console.log(i)
// })