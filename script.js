let buttonColors=['red','green','blue','yellow']
let gamePattern=[]
let userClickedPattern=[]

let started=0;
let level=0
$(".btns").animate({'opacity':0.2})
function nextSequence(){
     level++;

$(".btns").animate({'opacity':1})


     $('#title').text('level '+level)
    let randomNumber=Math.floor(Math.random()*4)
    
    let randomChosenColor=buttonColors[randomNumber]
    // console.log(randomChosenColor);
    gamePattern.push(randomChosenColor)
    console.log("gp "+gamePattern);
    
    //blink animation
    $('.'+randomChosenColor).fadeOut().fadeIn();
    audioplay("audio/mixkit-arcade-game-jump-coin-216.wav")
   
   
    return(randomNumber);
}
$(document).keypress(()=>{
    if(started===0){
        nextSequence()
        started++;
    }
})


$(".btn").click((e)=>{
    // console.log(e.target.classList[1]);
    // 
    $("."+e.target.classList[1]).fadeOut(10).fadeIn(10);
    userClickedPattern.push(e.target.classList[1])
    
    
    audioplay("audio/mixkit-correct-answer-tone-2870.wav");
    
    
    if(gamePattern.length===userClickedPattern.length){
        console.log("up   "+userClickedPattern);

        // for(i=0;i<gamePattern.length;i++){
            if(gamePattern.join("")===userClickedPattern.join("")){
                // console.log(gamePattern[i],userClickedPattern[i]);
                userClickedPattern=[]
                console.log("correct");
                $('#score').text(`score:${level}`)
                let audio=new Audio("audio/90s-game-ui-6-185099.mp3");
               audio.play()
                nextSequence()
                // break
            }else {
                console.log("wrong");
                $('#title').text(`press S key to start Again`)
                $('#score').text(`score:${level-1}`)
                $(".btns").animate({'opacity':0.2})
                $('body').css('background-color','red')
                audioplay("audio/mixkit-losing-drums-2023.wav")
                gamePattern=[]
                
        
                 $(".btn").keypress(()=>{
                    startAgain()
                 })
            }
        // }
    }
})

function startAgain(){
    level=0;
    started=0;
    gamePattern=[];
    userClickedPattern=[];


    $('body').css('background-color',' rgb(41, 41, 74)')
    if(started==0){
        nextSequence()
        started++
    }

}
function audioplay(audioo)
{
    let audio=new Audio(audioo)
    audio.play()
}
