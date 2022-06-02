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
//             resolve('Ales Gut. Der Kuchen ist fetrig')
//         }else{
//             reject('Ales ist vorbei')
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



 