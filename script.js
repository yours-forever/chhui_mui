const text = `Because some people deserve more than a simple text message.

You are not just my best friend.

You are the person who makes difficult days easier,
good days brighter,
and ordinary moments unforgettable.

Happy Best Friends Day, Aarohi. 💜`;

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typewriter").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,35);

}

}

typeWriter();

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.textContent=Math.random() > 0.5 ? "💜" : "🌸";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},500);