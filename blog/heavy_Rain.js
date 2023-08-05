const express = require('express');
const app = express();
const port = 3000;

app.get('/trangchu',(req,res)=>{
    let a = 2, b = 3;
    console.log(a + b);
    return res.send('hello world');
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
// node package manager
// dependency : Phu Thuoc;
// directly : Truc tiep;
// instead : thay vi ?














