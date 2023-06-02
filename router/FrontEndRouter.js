const router = require('koa-router')()

const HomeController = require("../controller/home")
const FrontEnd_Login_Controller=require("../controller/FrontEnd_Login");
const FrontEnd_Common_Controller=require("../controller/FrontEnd_Common");


module.exports = (app) => {
  router.get( '/', HomeController.index )
  router.get('/home', HomeController.home)
  // http://localhost:3000/home/1/dahlin
  router.get('/home/:id/:name', HomeController.homeParams)
  router.get('/user', HomeController.login)
  router.post('/user/register', HomeController.register)
  app.use(router.routes())
     .use(router.allowedMethods())
}
