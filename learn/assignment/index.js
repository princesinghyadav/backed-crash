 const cryp= require("crypto")
 const uuid = cryp.randomUUID()
 console.log(uuid)
 
 const os =require("os")
  const time =os.uptime()
  console.log(time)

  const oo=os.networkInterfaces()
  console.log(oo)

  const type= os.type()
  console.log(type)

  const vresion = os.version()
  console.log(os.version)