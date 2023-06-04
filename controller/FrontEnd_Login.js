const FrontEnd_Login_Service = require('../service/FrontEnd_Login_Service')

module.exports = {
  loginByUserName: async(ctx, next) => {
    //用户名登录处理的逻辑函数
    console.log(ctx.request.body);
    console.log(ctx.request.body);

    ctx.response.body = "success"
  },
  loginByEmail: async(ctx, next) => {
    //邮箱登录处理的逻辑函数
    console.log(ctx.request.body);

    ctx.response.body = "success"
  },

  registerByEmail: async(ctx, next) => {
    //邮箱注册处理的逻辑函数
    const {userName,password,email}=ctx.request.body;
    let db_result=await FrontEnd_Login_Service.getUserInfoByUserName(userName);
    if(db_result.cnt!=0){
        //已经有了此用户，不允许注册
      
    }
    else{
      //没有此用户，允许注册
      let store_data={username:userName,password,email,comments:"无信息"};
      let store_result=await FrontEnd_Login_Service.addingUserByEmail(store_data);
      console.log(store_result);
      
    }
    ctx.response.body = "success"
  },


}
