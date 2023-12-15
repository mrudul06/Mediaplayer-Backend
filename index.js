//import json-server using require method
const jsonserver=require('json-server')
//create server
const server=jsonserver.create()

const router=jsonserver.router('db.json')

//create middleware-parse json data
const middleWare=jsonserver.defaults()
//set port for server 
const PORT=process.eventNames.PORT||4000
//use middleWare in server
server.use(middleWare)

server.use(router)

//To work server 
server.listen(PORT,()=>{
    console.log('Media player server started at port:'+PORT);
})

 