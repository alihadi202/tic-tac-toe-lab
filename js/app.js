/*-------------------------------- Constants --------------------------------*/

const squares = document.querySelectorAll('.sqr');
const message = document.querySelector('#message');
const reset = document.querySelector('#reset')
/*---------------------------- Variables (state) ----------------------------*/
let boardArr = Array(9).fill('');

let count =0;


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
const play=(event)=>{
    
    const playedSqr =boardArr[event.target.id];
    if(!playedSqr){
        if (message.innerText === "X's turn"){
            event.target.innerText='X';
            message.innerText="O's turn"
        }else{
            event.target.innerText='O';
            message.innerText="X's turn"
        }
        checkWin(event);
    }
}

function checkWin(event){
  count++;
  if(count === 9){
    message.innerText="it's a tie";
  }
    const playedSqr =boardArr[event.target.id]; 
    boardArr[event.target.id]=event.target.innerText;
    
    console.log(boardArr);
    for(let i=0; i<9 ; i+=3){
        if (boardArr[i] ==='X' && boardArr[i+1] ==='X' && boardArr[i+2] ==='X' )
            message.innerText="X Won";
                if (boardArr[i] ==='O' && boardArr[i+1] ==='O' && boardArr[i+2] ==='O' )
            message.innerText="O Won";
    
    }

    for(let i=0; i<3 ; i++){
        if(boardArr[i] ==='X' && boardArr[i+3] ==='X' && boardArr[i+6] ==='X' )
            message.innerText="X Won";
        if(boardArr[i] ==='O' && boardArr[i+3] ==='O' && boardArr[i+6] ==='O' )
            message.innerText="O Won";
    }

    if(boardArr[0] ==='X' && boardArr[4] ==='X' && boardArr[8] ==='X' )
        message.innerText="X Won";
    if(boardArr[0] ==='O' && boardArr[4] ==='O' && boardArr[8] ==='O' )
        message.innerText="O Won";

    if(boardArr[2] ==='X' && boardArr[4] ==='X' && boardArr[6] ==='X' )
        message.innerText="X Won";
    if(boardArr[2] ==='O' && boardArr[4] ==='O' && boardArr[6] ==='O' )
        message.innerText="O Won";



    if(!(message.innerText=="X's turn")){
        if(!(message.innerText == "O's turn")){
           reset.style.display='flex';
           squares.forEach((square) => {
            square.removeEventListener('click' , play);
        });
        }
   }
}

const render=()=>{
    squares.forEach((square) => {
        square.innerText='';
    });
    boardArr.fill('');
    count =0;
    squares.forEach((square) => {
        square.addEventListener('click' , play);
    });
    reset.style.display='none';
    message.innerText="X's turn"

}


/*----------------------------- Event Listeners -----------------------------*/
squares.forEach((square) => {
    square.addEventListener('click' , play);
});
reset.addEventListener('click' , render);

