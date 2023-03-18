document.getElementById('logout').addEventListener('click',()=>
{   
    location.href = "./index.html";
}
);

import {io} from "socket.io-client";

const socket  = io('http://localhost:3000');

socket.on("connect",()=>{
    console.log(`you have connected with the server with socket id : ${socket.id}`);

});

socket.on('receive-message',(approval)=>{
    if(approval=='-1'){
        location.href='./noPayment.html';
    }
});

document.getElementById('accept').addEventListener('click', ()=>{
    console.log("appoving...");
    socket.emit("send-message", "1");
    setTimeout(()=>{
        location.href  = './noPayment.html'
    },300);
});


document.getElementById('decline').addEventListener('click',()=> {
    socket.emit("send-message", "2");
    console.log('declining');
    setTimeout(()=>{
        location.href  = './noPayment.html'
    },300);

});
