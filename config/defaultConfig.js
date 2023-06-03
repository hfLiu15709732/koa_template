const pg = require('pg');
const Pool = require('pg-pool');
const databaseConfig={
    user: 'opengaussuser',
    password: 'openGauss@123',
    host: '192.168.163.128',
    port: 26000,
    database: 'liuhf_db_uni'
}
const pool=new Pool(databaseConfig)
//上面是建立数库连接池，将连接池暴露出去即可供service层使用


module.exports = {
    pool:pool,
    runningPort:7002,
    jwt_session_key:`prod_secret_1685715082`,

    

  }