const schedule=require("node-cron");
const defaultConfig=require("../config/defaultConfig");
const { data } = require("cheerio/lib/api/attributes");
const {pool}=defaultConfig;
const client=pool.connect();


schedule.schedule('0 0 */1 * *', async ()=>{
    const result=await client.query('BACKUP DATABASE TO \'/root/backup.sql\'');

    const TimeStamp=new Date().getTime();
    console.log(`数据库备份成功！ 记录时间戳：${TimeStamp}`);

    await client.release();
})


module.exports={
    schedule:{
        affair:"backup",
        type:"working",
    }
}