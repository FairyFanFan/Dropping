
var express = require('express')
var graphqlHttp = require('express-graphql')
const { buildSchema } = require('graphql')
var app = express()

var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/maizuo", { useNewUrlParser: true, useUnifiedTopology: true})

// 限定film集合/表 只能存这三个字段
// https://juejin.cn/post/7052585815037673479 nong
// 启动mongo： 命令行写 mongo
// #先停止mongod服务
// $ use admin;
// $ db,shutdownServer();
// 然后退出mongo
// $exit；

// 先查询mongod所使用的PID
// sudo lsof -iTCP -sTCP:LISTEN -n -P
// 找到mongod对应的PID，杀掉它就可以啦
// sudo kill <mongo_command_pid>

// ps -ef | grep mongo 查看后台mongodb进程，采用kill 进程号pid来关闭对应后台进程
// sudo killall mongodb
// # 或者 mongodb-pid为 mongodb 进程id
// sudo kill -9 mongodb-pid


// 查看进程，命令行输入：
// ps -ef | more
// 找到需要杀掉的进程，执行：
// kill -9 pid

var filmModel = mongoose.model("film", new mongoose.Schema({
    id: String, // 注意不是Int
    name: String,
}))

// 注意： mongo里面生成的是字符串id id:Int改为 id: String
var schema = buildSchema(`
    type Film{
        id: String, 
        name: String,
    }
    input FilmInput{
        name: String,
    }
    type Query {
        getList: [Film]
    }
    type Mutation{
        createFilm(input:FilmInput):Film,
        updateFilm(id: String!, input: FilmInput): Film,
        deleteFilm(id: String!): Film
    }
`)

// 处理器
const root = {
    getList: () => {
        return filmModel.find();
    },
    createFilm: ({input}) => {
        // filmModel.create({
        //     ...input
        // }).then(res => console.log(123, res)) // 利用链式 可以查到具体结果，
        // 一般是直接返回promise
        return filmModel.create({
            ...input
        })
    },
    updateFilm: ({id, input}) => {
        // return filmModel.updateOne({
        //     _id: id
        // }, {
        //     ...input
        // })
        return filmModel.updateOne({
            _id: id
        }, {
            ...input
        }).then(res => filmModel.find({_id:id}).then(res =>res[0]))
    },
    deleteFilm: ({id}) => {
        return filmModel.deleteOne({_id: id}).then(res => 1)
    }
}
app.use('/graphql', graphqlHttp({ // 在路径localhost:3000/graphql可查看
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(3001)