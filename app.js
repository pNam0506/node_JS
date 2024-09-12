const express = require('express')
// const chalk = require('chalk') change color
const debug = require('debug')('app') //ดูว่าเกิดเหตุการณ์อะไรขึ้นบ้าง
const morgan = require('morgan') // ดูว่าอุปกรณ์ไหนเข้ามาทำอะไร

const app = express()
const port = 4000;

app.use(morgan('combined'))


app.get("/",(req,res)=>{

    res.send('Hello Pinmanee')


})

app.listen(port, () =>{
    // console.log('listening on port ' + port)
    debug('listening on port ' + port)
})