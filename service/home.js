const pg = require('pg');
const defaultConfig = require('../config/defaultConfig');
const {pool}=defaultConfig;

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

        const client=await pool.connect();//请求连接池连接（连接池已经维持了数据库的连接）
        let database;

        let sql=`select * from zjutuser.liuhf_teachers order by lhf_tsalary DESC;`;
        console.log(sql);
        database=await client.query(sql);
        return {resultArr:database.rows,cnt:database.rowCount}
        

    }

  }
