const fs = require('fs')
const path = require('path')
const readline = require('readline')

//文件名
const fileName = path.join(__dirname,'../','../','logs','access.log');
//创建read Stream
const readStream = fs.createReadStream(fileName);
//创建readline 对象
const rl = readline.createInterface({input:readStream})

let chromeNum = 0;
let totle = 0;


//逐行读取
rl.on('line',(lineData)=>{
    if(!lineData){
        return
    }
    totle++
    const arr = lineData.split(' -- ');
    if(arr[2] && arr[2].indexOf('Chrome') >-1){
        chromeNum++
    }
})

rl.on('close',_=>{
    console.log('Chorme 占比为 ' , (chromeNum / totle)*100 +'%')
})