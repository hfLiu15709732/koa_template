// const Koa = require('koa');
// const app = new Koa();

// // 导入配置文件
// const config = require('./config');

// // 导入路由文件
// const router = require('./router');

// // 定义中间件
// app.use(async (ctx, next) => {
//   // 公共逻辑
//   await next();
// });

// // 加载路由中间件
// app.use(router.routes()).use(router.allowedMethods());

// // 监听端口,启动服务 
// app.listen(config.PORT);


const Koa = require("koa")//引入koa
const {koaBody}=require("koa-body");
const cors=require("koa-cors");
const helmet=require("koa-helmet");
const router = require('./router/FrontEndRouter')//引入路由管理文件
const config=require("./config/defaultConfig")//引入默认设置文件
const jwt =require("koa-jwt");

const app = new Koa()//创建Koa服务器实例

app.use(koaBody())//注册请求体解析库
app.use(cors());//解决跨域请求的中间件
app.use(helmet());//解决基本的网络攻击，如：xss，sql注入
// app.use(jwt({
//   secret:config.jwt_session_key,
//   expired:172800,
// }))

router(app)//注册路由

app.listen(config.runningPort, () => {
  console.log(`服务器启动，运行在：http://localhost:${config.runningPort}`)
})//启动服务器在7002端口
