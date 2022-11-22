function textPopUp(duration){

    var mes = document.getElementById("message");

    let inputbox = document.querySelector("#inputbox");
    let message = document.querySelector("#message");
    
    // console.log(message);
    message.innerHTML = inputbox.value
    console.log("message = "+ inputbox.value)

    let ins = inputbox.value
    console.log(ins.length)
    const time = ins.length*1000;
    console.log(time)
       
   
    
    for (var i = 0; i <= ins.length; i++ ){
        
        message.style.background = "#F1CF1D";
        message.style.color = "black";
        message.setAttribute("style","color:black;background:#F1CF1D;box-shadow:1px 2px 0px 2px rgba(255,255,255,0.31);-webkit-box-shadow: 1px 2px 0px 2px rgba(255,255,255,0.31);-moz-box-shadow: 1px 2px 0px 2px rgba(255,255,255,0.31);");


        if (inputbox.value === ""){
            message.style.background = "none";
            message.style.color = "none";
            message.style.boxShadow = "none";
            tempAlert("Please input message.",2000)
            
        }
        // console.log(inputbox.value)
        
    }
    inputbox.value = ""; 
    setTimeout(function(){
        message.setAttribute("style","background:none;color:none;")
    },time);
    
} 


function tempAlert(msg,duration){
    
    const p = document.createElement("p");
    p.innerHTML = msg;
    p.setAttribute("style","position:absolute;left:566px;background-color:#F1CF1D;margin:0 auto;width:300px;height: 40px;border-radius: 17px;box-shadow: 1px 2px 0px 2px rgba(255,255,255,0.3);-webkit-box-shadow: 1px 2px 0px 2px rgba(255,255,255,0.3);-moz-box-shadow: 1px 2px 0px 2px rgba(255,255,255,0.3);");
    
    const hero = document.querySelector("#hero");
    hero.appendChild(p);
    console.log(hero)



    // var div = document.createElement("div");
    // div.id = "alert";
    // div.className = "alert";

    // const hero = document.querySelector("#hero");
    // const h = document.body.appendChild(div);
    // // console.log(h)

    // const p = document.createElement("p");
    // p.innerHTML = msg;
    // p.setAttribute("style","position:absolute;background-color:#F1CF1D;margin:0 auto;width:300px;height: 40px;border-radius: 17px;text-shadow: 1px 1px 2px gray;");
    
    // const alert = document.querySelector("#alert");
    // h.appendChild(p);
    // console.log(alert)
    

    setTimeout(function(){ 
        p.parentNode.removeChild(p); 
    },duration);
    
 
    // hero.appendChild(h);
    // console.log(hero)

    
 
}