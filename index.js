const express = require('express')
const path = require('path')
const { nextTick } = require('process')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

app.get('/hello/:name',(req,res)=>{
    res.send('hello world '+ req.params.name)
})

app.get('/about',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'index.html'))
    
})

app.listen(port, function(){
    console.log('example app listening at http://localhost:${port}')
})
