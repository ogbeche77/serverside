const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("app1", ()=>{
console.log ("It has occured");
});

eventEmitter.emit("app1");