const verifyToken = () => {
    return async (context, next) => {
      console.log('自定义中间件');
      await next()
    }
  }


  module.exports = [verifyToken()];