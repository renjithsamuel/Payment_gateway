let logout = document.getElementById('logout');
logout.addEventListener('click',()=>{
location.href = "./index.html";
});

//websocket implementation
import {io} from "socket.io-client";

const socket  = io('http://localhost:3000');

socket.on("connect",()=>{
    console.log(`you have connected with the server with socket id : ${socket.id}`);
});

let val;
let proceedbtn = document.getElementById('proceed-button');  
    proceedbtn.addEventListener('click', ()=>{

      //send waiting status to server;
      socket.emit("send-message", "0");
      val = 0;
      let paymentsts = document.getElementById('paymentstatus');
                paymentsts.innerHTML ='Payment processing kindly wait';
                paymentsts.style.backgroundColor = 'grey';
      var noorder = document.getElementById('one');
      console.log(one);
      noorder.style.display = 'block';

      //wait for reply
      socket.on('receive-message',(approval)=>{
        console.log(approval);
        val = approval;
        if (val === '1') {
                console.log(`Approval value is ${approval}.`);
                
                paymentsts.innerHTML ='Payment successfull';
                paymentsts.style.backgroundColor = 'rgb(92, 153, 84)';
                return;
              }
              else if(approval == '2'){
                console.log(`Approval value is ${approval}.`);
                paymentsts.innerHTML ='Payment failed';
                paymentsts.style.backgroundColor = '#ee6666';
                return;
              }
      });
    });
    

    let noorder = document.getElementById('noorder');
    noorder.addEventListener('click', ()=>{
      console.log("no Order mode");
      socket.emit("send-message", "-1");
      val = -1;
      let paymentsts = document.getElementById('paymentstatus');
      console.log(paymentsts);
      paymentsts.innerHTML ='';
      paymentsts.style.backgroundColor = 'rgb(213, 213, 213)';
      var noorder = document.getElementById('one');
      console.log(one);
      noorder.style.display = 'none';
    });