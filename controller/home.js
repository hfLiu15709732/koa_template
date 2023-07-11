const jwt= require("jsonwebtoken")
const HomeService = require('../service/home');
const defaultConfig = require('../config/defaultConfig');

module.exports = {
  index: async(ctx, next) => {
    //let data=await HomeService.getTeachersData("age");
    const userInfo=ctx.request.body
    const token=jwt.sign({userName:userInfo.userName},defaultConfig.jwt_session_key,{expiresIn:"48h"});
    console.log(token);

    ctx.response.body={state:"ok",token:token}
  },

  home: async(ctx, next) => {

    console.log(ctx.request.header.token);
    console.log(ctx.request.body);
    let userName=jwt.verify(ctx.request.header.token,defaultConfig.jwt_session_key)
    ctx.response.body =userName
  },

  homeParams: async(ctx, next) => {
    console.log(ctx.params)
    ctx.response.body = `<h1>Hello ${ctx.params.id}, ${ctx.params.name}</h1>`
  },

  login: async(ctx, next) => {
    ctx.response.body =
      `
      <form action="/user/register" method="post">
        <input name="name" type="text" placeholder="请输入用户名：dahlin" value="dahlin"/> 
        <br/>
        <input name="password" type="text" placeholder="请输入密码：123456" value="123456"/>
        <br/> 
        <button>提交</button>
      </form>
    `
  },

  register: async(ctx, next) => {
    let {
      name,
      password
    } = ctx.request.body
    let data = await HomeService.register(name, password)
    ctx.response.body = data
  }

}
