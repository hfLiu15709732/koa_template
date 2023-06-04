const router = require('koa-router')()

const HomeController = require("../controller/home")
const Login_Controller = require("../controller/FrontEnd_Login")
const FrontEnd_Login_Controller=require("../controller/FrontEnd_Login");
const FrontEnd_Common_Controller=require("../controller/FrontEnd_Common");
const loginBaseURL="/frontend/login";
const commonBaseURL="/frontend/common";


module.exports = (app) => {
  router.post( `${loginBaseURL}/register/email`, Login_Controller.registerByEmail )
  router.post( `${loginBaseURL}/username`,Login_Controller.loginByUserName)
  router.post( `${loginBaseURL}/email`, Login_Controller.loginByEmail)

  router.get( `/`, HomeController.index)
  
  app.use(router.routes())
     .use(router.allowedMethods())
}
