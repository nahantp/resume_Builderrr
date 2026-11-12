//import json server
const jsonServer=require("json-server")

//create server for running json file 
const server=jsonServer.create()

//setup route/path for json file
const router=jsonServer.router('db.json')

//use middleware,router
const middleware=jsonServer.defaults()
server.use(middleware)
server.use(router)

//create server port number 
const PORT=3000
server.listen(PORT,()=>{
    console.log("server started");
    
})