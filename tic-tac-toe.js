var starter=function(){
    let board=document.getElementById("board").children;
    //var board=document.querySelectorAll("#board div");
    console.log(board);
    this.boxes(board);
    document.getElementsByClassName("btn")[0].onclick=function(){
        for ( let i=0; i<board.length;i++){
            board[i].innerHTML= "";
        }
    }
}

window.onload=starter;
function boxes(b){
    var current=true;
    for (let i=0;i<b.length;i++){
        b[i].classList.add('square');
        b[i].onmouseover=function(){
            b[i].classList.toggle("hover",true);

        }
        b[i].onmouseout=function(){
            b[i].classList.toggle("hover",false);
        
        }
        b[i].addEventListener("click",function(){
            if (current === true){
                b[i].innerHTML ='X'
                current= false;
                winner (b);
                
            }
            else{
                b[i].innerHTML ='O';
                current= true;
                winner(b);
                
            }
        }
    )};
}

    
    function winner (b){
        if (b[0].innerHTML===b[1].innerHTML&& b[1].innerHTML===[2].innerHTML&& b[1]!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0].innerHTML +  " is the winner"
        }
        else if (b[0].innerHTML===b[3].innerHTML&&b[3].innerHTML===b[6].innerHTML && b[3].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0].innerHTML +  " is the winner"
        }
        else if (b[0].innerHTML===b[0].innerHTML&&b[0].innerHTML===b[4].innerHTML && b[8].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0].innerHTML +  " is the winner"
        }
        else if (b[2].innerHTML===b[5].innerHTML&&b[5].innerHTML===b[8].innerHTML && b[2].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[2].innerHTML +  " is the winner"
        }
        else if (b[2].innerHTML===b[4].innerHTML&&b[4].innerHTML===b[6].innerHTML && b[2].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[2].innerHTML +  " is the winner"
        }
        else if (b[3].innerHTML===b[4].innerHTML&&b[4].innerHTML===b[5].innerHTML && b[3].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[3].innerHTML +  " is the winner"
        }
        else if (b[6].innerHTML===b[7].innerHTML&&b[7].innerHTML===b[8].innerHTML && b[6].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0] +  " is the winner"
        }
        else if (b[1].innerHTML===b[3].innerHTML&&b[3].innerHTML===b[6].innerHTML && b[3].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0] +  " is the winner"
        }

    }


