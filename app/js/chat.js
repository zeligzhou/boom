var socket=io.connect();
    socket.emit("init"); 
    console.log("init io");
 	socket.on("backMsg",function(data){
 		console.log(data);
 	});

var soTalk = {
	sendMsg(e){
		let msg = e.value;
		socket.emit("sendMsg",msg);
	}
} 

export default soTalk

