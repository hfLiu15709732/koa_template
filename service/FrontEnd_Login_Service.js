const pg = require('pg');
const defaultConfig = require('../config/defaultConfig');
const {pool}=defaultConfig;

module.exports = {


    addingUserByEmail: async(storeObj) => {
        const client=await pool.connect();//请求连接池连接（连接池已经维持了数据库的连接）
        let sql=`INSERT INTO zjutuser.userTab (username,password,email,comments) VALUES ('${storeObj.username}','${storeObj.password}','${storeObj.email}','${storeObj.comments}');`;
        console.log(sql);
        let result=await client.query(sql);
        return {resultArr:result.rows,cnt:result.rowCount}

    },

    getUserInfoByUserName:async(username)=>{

        const client=await pool.connect();//请求连接池连接（连接池已经维持了数据库的连接）

        let sql=`select * from zjutuser.userTab WHERE username='${username}'`;
        let result=await client.query(sql);
        return {resultArr:result.rows,cnt:result.rowCount}
        

    },

    getUserInfoByEmail: async(name, pwd) => {

    },

  }
