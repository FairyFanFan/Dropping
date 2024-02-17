// query是查询，mutation是增删改

var express = require('express')
var graphqlHttp = require('express-graphql')
const { buildSchema } = require('graphql')

var app = express()
var fakeDB = [
    {
        id: 1,
        name: 'name1'
    },
    {
        id: 2, 
        name: 'name2'
    }
]
// 构建轮廓
// 注意要用``包裹。注意string首字母要大写
// 注意 类型要定义在buildSchema方法内
// 注意 Account后面没有都好
// 注意 type FilmInput 会报错，所以要改成input FilmInput
// 注意如果只写了Mutation没有type Query代码会报错，切type Query对象中要有内容才ok
// 注意必填是后面有叹号
var schema = buildSchema(`
    type Film{
        id: Int,
        name: String,
        price: Int
    }
    input FilmInput{
        name: String,
        price: Int
    }
    type Query {
        getList: [Film]
    }
    type Mutation{
        createFilm(input:FilmInput):Film,
        updateFilm(id: Int!, input: FilmInput): Film,
        deleteFilm(id: Int!): Film
    }
`)

// 处理器
const root = {
    getList: () => {
        return fakeDB;
    },
    createFilm: ({input}) => {
        // console.log(111, input)
        var obj = {...input, id: fakeDB.length+1}
        fakeDB.push(obj)
        return obj
    },
    updateFilm: ({id, input}) => {
        var index = fakeDB.findIndex(item => item.id == id);
        var obj = {...fakeDB[index], ...input}
        fakeDB[index] = obj;
        // 上面的可以用map去写
        return obj;
    },
    deleteFilm: ({id}) => {
        fakeDB = fakeDB.filter(item => item.id != id) 
        return fakeDB
    }
}
app.use('/graphql', graphqlHttp({ // 在路径localhost:3000/graphql可查看
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(3000)

// # mutation{
// # #   # createFilm(input:{
// # #   #   name:"test",
// # #   #   price: 100
// # #   # }){
// # #   #   id
// # #   # },
// # #   updateFilm(id: 1, input: {
// # #     name:"test001",
// # #     price: 666
// # #   }){
// # #     id,
// # #     name,
// # #     price
// # #   },
// #   deleteFilm(id:2){
// #     id,
// #     name,
// #     price
// #   }
// # }

// # query{
// #   getList{
// #     id,
// #     name,
// #     price
// #   }
// # }
    


