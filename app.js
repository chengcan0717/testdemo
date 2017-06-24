/**
 * Created by j on 2017/6/24.
 */
const express=require('express');
const  app=express();

app.listen(3000,(err)=>{
    if(err)console.log(err);
    console.log('3000端口启动了');
});