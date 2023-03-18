
import {io} from "socket.io-client";

const socket  = io('http://localhost:3000');

socket.on("connect",()=>{
    console.log(`you have connected with the server with socket id : ${socket.id}`);

});

socket.on('receive-message',(approval)=>{
    if(approval=='0'){
        location.href='./paymentConfirm.html';
    }
});

