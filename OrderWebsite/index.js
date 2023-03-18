import {io} from "socket.io-client";

const socket  = io('http://localhost:3000');

socket.on("connect",()=>{
    console.log(`you have connected with the server with socket id : ${socket.id}`);

});

document.getElementById('login').addEventListener('click',()=> {
    console.log("logging in...");

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    socket.emit("login-order", {name:username,password:password});
    location.href = "./orderpage.html";
});
