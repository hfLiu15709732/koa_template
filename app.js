const Koa = require("koa")//引入koa
const {koaBody}=require("koa-body");//解析请求体数据
const cors=require("koa-cors");//路由跨域解决
const helmet=require("koa-helmet");//一般性网络攻击阻截
const router = require('./router/FrontEndRouter')//引入路由管理文件
const config=require("./config/defaultConfig")//引入默认设置文件
const app = new Koa()//创建Koa服务器实例

app.use(koaBody())//注册请求体解析库
app.use(cors());//解决跨域请求的中间件
app.use(helmet());//解决基本的网络攻击，如：xss，sql注入






router(app)//注册路由

app.listen(config.runningPort, () => {
  console.log(`服务器启动，运行在：http://localhost:${config.runningPort}`)
})//启动服务器在7002端口
