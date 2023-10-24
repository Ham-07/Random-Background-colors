function random(){
    let numbers='0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6;i++){
        color += numbers[Math.round(Math.random()*16)];

    }
document.body.style.backgroundColor=color;
let generated=document.getElementById("color");
generated.innerHTML="Background Color:" + color;

}
const btn=document.getElementById("btn2");
btn.addEventListener("click",random);