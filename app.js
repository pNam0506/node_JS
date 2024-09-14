const express = require('express')
// const chalk = require('chalk') change color
const debug = require('debug')('app') //ดูว่าเกิดเหตุการณ์อะไรขึ้นบ้าง
const morgan = require('morgan') // ดูว่าอุปกรณ์ไหนเข้ามาทำอะไร
const path = require('path'); // Change this line
const app = express()
const port = 4500;

app.use(morgan('combined'))
// app.use(express.static(path.join(__dirname, 'public')));

app.get("/",()=>{

    app.use(express.static(path.join(__dirname, 'public')));


})

app.listen(port, () =>{
    // console.log('listening on port ' + port)
    console.log('listening on port ' + port)
})