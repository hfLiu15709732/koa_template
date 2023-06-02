module.exports = {
    successFormat:(code="200",msg=`success`,data)=>{
        return {
            code,
            msg,
            data,
        }

    },
    commonErrorFormat:(code="500",msg=`service-error`,data)=>{
        return {
            code,
            msg,
            data,
        }
    },
    verifyErrorFormat:(code="401",msg=`token-error`,data)=>{
        return {
            code,
            msg,
            data,
        }
    }
    

  }