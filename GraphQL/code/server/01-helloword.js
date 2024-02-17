// https://www.bilibili.com/video/BV1hY4y1P7L5/?spm_id_from=333.337.search-card.all.click&vd_source=02c7db003c110ce6f8b2babd2595e29c

// var express = require('express')
// var app = express()
// app.use('/list', function(req, res) {
//     res.send('home data')
// })
// app.listen(3000) // 注意不是字符串“3000”

var express = require('express')
var graphqlHttp = require('express-graphql')
const { buildSchema } = require('graphql')
// const { Query } = require('mongoose')

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
var schema = buildSchema(`
    type Account{ 
        name: String,
        age: Int
    }
    type fakeItem{
        id: Int,
        name: String
    }
    type Query {
        hello: String,
        name: String,
        age: Int,
        list: [Int],
        getList: Account,
        getDB: [fakeItem],
        getDetail(id:Int!): fakeItem
    }
`)

// 处理器
const root = {
    hello: () => {
        return "hello world"
    },
    name: () => {
        return "name"
    },
    age: () => 1,
    list: () => [1],
    getList: () => {
        return {
            name: 'name1',
            age: 1,
        }
    },
    getDB: () => fakeDB,
    getDetail: ({id}) => {
        console.log(id) // 注意传入的参数是一个对象，id需要结构
        return fakeDB.filter(item => item.id == id)[0] // 注意filter返回的是数组！
    }
}
app.use('/list', function(req, res) {
    res.send('home data')
})
app.use('/graphql', graphqlHttp({ // 在路径localhost:3000/graphql可查看
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(3000)

// Node改完代码要重启服务器！！！
// nodemon or node-dev 可以解决


