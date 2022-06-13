const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");

const jump = () =>{
    document.removeEventListener('keydown', jump);
    mario.classList.add('jump');
    console.log("altura do mario: " + mario.offsetTop);
    setTimeout(()=>{
        mario.classList.remove('jump');
        document.addEventListener('keydown', jump);
    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    
    if(pipePosition <= 120){
       
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
   
    }

}, 10);

document.addEventListener('keydown', jump);