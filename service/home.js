const pg = require('pg');
const defaultConfig = require('../config/defaultConfig');
const client = new pg.Client(defaultConfig.DataBsee);
client.connect(err => {
    if (err) {
        console.log(err);
        throw err;
    };
  });
//注意：正式项目的时候要建立连接池
module.exports = {

    register: async(name, pwd) => {
      let data 
      if (name == 'dahlin' && pwd == '123456') {
        data = `Hello， ${name}！`
      } else {
        data = '账号信息错误'
      }
      return data
    },

    getTeachersData:async()=>{

        let database;
        let sql=`select * from zjutuser.liuhf_teachers order by lhf_tsalary DESC;`;
        console.log(sql);
        database=await client.query(sql);
        return {teacherData:database.rows,cnt:database.rowCount}
        

    }

  }
