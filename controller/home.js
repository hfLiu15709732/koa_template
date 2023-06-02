const HomeService = require('../service/home')

module.exports = {
  index: async(ctx, next) => {
    let data=await HomeService.getTeachersData("age");
    ctx.response.body = data
  },

  home: async(ctx, next) => {
    console.log(ctx.request.query)
    console.log(ctx.request.querystring)
    ctx.response.body = '<h1>HOME page</h1>'
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
