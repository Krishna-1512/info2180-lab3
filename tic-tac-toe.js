var starter=function(){
    let board=document.getElementById("board").children;
    //var board=document.querySelectorAll("#board div");
    console.log(board);
    this.boxes(board);
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
                
            }
            else{
                b[i].innerHTML ='O';
                current= true;
                
            }
        }
    )}    
}
