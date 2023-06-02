
module.exports = {
  index: async(ctx, next) => {
    let data=await HomeService.getTeachersData("age");
    console.log(data);
    ctx.response.body = `<h1>index page</h1>`
  },

}
