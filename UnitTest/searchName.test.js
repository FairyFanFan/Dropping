// import searchName from "./searchName";
// 报错 SyntaxError: Cannot use import statement outside a module
// node早先只支持CommonJS的模块化方案，所以ES6的模块化特性用不了。但是在Node V13.2.0之后开始实验性的支持ESM模块化，不过需要创建package.json文件指明type类型为module。
// const searchName = require('./searchName');
// 官方文档中使用babel去处理这个问题 npm install --save-dev babel-jest @babel/core @babel/preset-env
import searchName from "./searchName";
describe('search name', () => {
    test('两个正数相加', () => {
        const keywords = 'Frank';
        // expect(searchName(keywords)).toBe([]);
        expect(searchName(keywords)).toEqual([]);
    })

});
