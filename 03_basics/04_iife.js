// Immediately Invoked Functions Experssion (IIFE)
(function connection (){
    console.log('DB Connected Successfully')
})();

((name)=>{
    console.log(`DB Connected Successfully Once Again ${name}`)
})('MongoDB');