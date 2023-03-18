import {io} from "socket.io-client";

const socket  = io('http://localhost:3000');

socket.on("connect",()=>{
    console.log(`you have connected with the server with socket id : ${socket.id}`);

});

document.getElementById('login').addEventListener('click',()=> {
    console.log("logging in...");

    let busername = document.getElementById('username').value;
    let bpassword = document.getElementById('password').value;
    socket.emit("get-login");
    socket.on("receive-login",(user)=>{
        if(busername ===user.name && bpassword === user.password){
            location.href = "./paymentConfirm.html";
        }
        else{
            alert("username or password doesn't match")
        }
    });
    
});
