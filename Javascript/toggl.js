// // 1.reduce
// const a = [2,3,4].reduce((v1, v2)=> {
//     console.log(v1, v2); // 每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
//     return v1+v2;
// });
// console.log('a---', a)

// // 2. prototype
// function Fox(color){
//     this.color = color;
// }
// Fox.prototype.speak = function() {
//     // console.dir(this)
//     console.log('I am ' + this.color);
// };
// console.log(Fox)
// var myFox = new Fox('blue');
// setTimeout(myFox.speak, 1000);

// // 3.
// class Fox1 {
//     constructor (color){
//     this.color = color
//     }
//     speak (){
//         console.log('3 I am '+this.color);
//     }
// }
// var myFox = new Fox1('blue');
// setTimeout(myFox.speak,1000);

// 4.自执行函数以及变量提升
// (function foo () {
//     console.log('foo')
// })();
// bar();  // node js Cannot access 'baz' before initialization
// baz(); // Script snippet #4:5 Uncaught ReferenceError: baz is not define
// foo();
// function bar(){
//     console.log('bar')
// }
// const baz = function(){
//     console.log('baz')
// }

// 5 promise
// function promise(){
//     return Promise.reject()
// }
// promise().then(function (){
//     console.log('Then 1')
// }).catch(function (){
//     console.log('Catch 1')
// }).then(function (){
//     console.log('Then 2')
// }).catch(function (){
//     console.log('Catch 2')
// }).then(function (){
//     console.log('Then 3')
// })