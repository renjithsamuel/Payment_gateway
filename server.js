const io = require('socket.io')(3000,{
    cors:{
        origin:['http://localhost:8080','http://localhost:8081' ]
    }
  });
  let val ;
  let logincerdens = {};
  io.on("connection", socket => {
    // console.log(socket);
    console.log(socket.id);
    socket.on("send-message",(approval)=>{
        val = approval;
        console.log(val);
        io.emit('receive-message', (val))
    });

    socket.on('login-order',(user)=>{
      logincerdens = {name : user.name,
                    password:  user.password};    
    });
    
    socket.on("get-login",()=>{
      console.log(logincerdens);
      io.emit("receive-login",logincerdens);
    });
    
  });


