//create 1-D array
var table = new Array(3);

//loop to create 2-d array
for (var i = 0; i < table.length; i++) { 
    table[i] = []; 
} 
//X - 1
//O - 2
//empty - 2
var empty = "EEEEEEEEE";
var index = 0;

// Loop to initilize 2D array elements. 
for (var i = 0; i < 3; i++) { 
    for (var j = 0; j < 3; j++) { 
        table[i][j] = empty[index++]; 
    } 
} 

// Loop to display the elements of 2D array. 
// for (var i = 0; i < 3; i++) { 
//     for (var j = 0; j < 3; j++) 
//     { 
//         document.write(table[i][j] + " "); 
//     } 
//     document.write("<br>"); 
// } 

//change the table cell to appropiate img when clicked
function switchImage(cell){
    var myimagetext;
    myimagetext = document.getElementById("memory");
    if(cell == 00){
        myimagetext.value = "X";
        alert("Player 1 Picked X");
        document.getElementById("PlayerSelect").style.visibility = "hidden";
    }

    if(cell == 01){
        myimagetext.value = "O";
        alert("Player 1 Picked O");
        document.getElementById("PlayerSelect").style.visibility = "hidden";
    }
    //get cell and store in myimage to then change image
    if (cell == 11){
        var myimage;
        myimage = document.getElementById("cell11");

        if(myimagetext.value == "X"){
            //replace image with O
            myimage.src = "Images/o.png";
            myimagetext.value = "O";
            //place O in array
            table[0][0] = "O";
        }

        else{
            //replace image with X
            myimage.src = "Images/x.png";
            myimagetext.value = "X";
            //place X in array
            table[0][0] = "X";
        }
    }

    if (cell == 12){
        var myimage;
        myimage = document.getElementById("cell12");
 
        if(myimagetext.value == "X"){
            //replace image with O
            myimage.src = "Images/o.png";
            myimagetext.value = "O";
            //place O in array
            table[0][1] = "O";
        }

        else{
            //replace image with X
            myimage.src = "Images/x.png";
            myimagetext.value = "X";
            //place X in array
            table[0][1] = "X";
        }
    }

    if (cell == 13){
        var myimage;
        myimage = document.getElementById("cell13");
   
        if(myimagetext.value == "X"){
            //replace image with O
            myimage.src = "Images/o.png";
            myimagetext.value = "O";
            //place O in array
            table[0][2] = "O";
        }

        else{
            //replace image with X
            myimage.src = "Images/x.png";
            myimagetext.value = "X";
            //place X in array
            table[0][2] = "X";
        }
        //horizontal win

    }

    if (cell == 21){
        var myimage;
        myimage = document.getElementById("cell21");
       
        if(myimagetext.value == "X"){
            //replace image with O
            myimage.src = "Images/o.png";
            myimagetext.value = "O";
             //place O in array
             table[1][0] = "O";
        }

        else{
            //replace image with X
            myimage.src = "Images/x.png";
            myimagetext.value = "X";
            //place X in array
            table[1][0] = "X";
        }
    }

    if (cell == 22){
        var myimage;
        myimage = document.getElementById("cell22");
  
        if(myimagetext.value == "X"){
            //replace image with O
            myimage.src = "Images/o.png";
            myimagetext.value = "O";
            //place O in array
            table[1][1] = "O";
        }

        else{
            //replace image with X
            myimage.src = "Images/x.png";
            myimagetext.value = "X";
            //place X in array
            table[1][1] = "X";
        }
    }

    if (cell == 23){
        var myimage;
        myimage = document.getElementById("cell23");
        
        if(myimagetext.value == "X"){
            //replace image with O
            myimage.src = "Images/o.png";
            myimagetext.value = "O";
            //place O in array
            table[1][2] = "O";
        }

        else{
            //replace image with X
            myimage.src = "Images/x.png";
            myimagetext.value = "X";
            //place X in array
            table[1][2] = "X";
        }
    }

    if (cell == 31){
        var myimage;
        myimage = document.getElementById("cell31");
            
        if(myimagetext.value == "X"){
            //replace image with O
            myimage.src = "Images/o.png";
            myimagetext.value = "O";
            //place O in array
            table[2][0] = "O";
        }

        else{
            //replace image with X
            myimage.src = "Images/x.png";
            myimagetext.value = "X";
            //place X in array
            table[2][0] = "X";
        }
    }

    if (cell == 32){
        var myimage;
        myimage = document.getElementById("cell32");
      
        if(myimagetext.value == "X"){
            //replace image with O
            myimage.src = "Images/o.png";
            myimagetext.value = "O";
            //place O in array
            table[2][1] = "O";
        }

        else{
            //replace image with X
            myimage.src = "Images/x.png";
            myimagetext.value = "X";
            //place X in array
            table[2][1] = "X";
        }
    }

    if (cell == 33){
        var myimage;
        myimage = document.getElementById("cell33");
            
        if(myimagetext.value == "X"){
            //replace image with O
            myimage.src = "Images/o.png";
            myimagetext.value = "O";
            //place O in array
            table[2][2] = "O";
        }

        else{
            //replace image with X
            myimage.src = "Images/x.png";
            myimagetext.value = "X";
            //place X in array
            table[2][2] = "X";
        }
    }
}

//recieve count from tie function 
function DidPlayerWin(){
//check if player has tic-tac-toe (8 cases)
if((table[0][0] == "O" && table[0][1] == "O" && table[0][2] == "O")||
(table[1][0] == "O" && table[1][1] == "O" && table[1][2] == "O")||
(table[2][0] == "O" && table[2][1] == "O" && table[2][2] == "O")|| 
(table[0][0] == "O" && table[1][0] == "O" && table[2][0] == "O")||
(table[0][1] == "O" && table[1][1] == "O" && table[2][1] == "O")||
(table[0][2] == "O" && table[1][2] == "O" && table[2][2] == "O")||
(table[0][0] == "O" && table[1][1] == "O" && table[2][2] == "O")||
(table[0][2] == "O" && table[1][1] == "O" && table[2][0] == "O"))
{
    alert("Player O wins");
    PlayWinSound();
}
else if((table[0][0] == "X" && table[0][1] == "X" && table[0][2] == "X")|
(table[1][0] == "X" && table[1][1] == "X" && table[1][2] == "X")||
(table[2][0] == "X" && table[2][1] == "X" && table[2][2] == "X")|| 
(table[0][0] == "X" && table[1][0] == "X" && table[2][0] == "X")||
(table[0][1] == "X" && table[1][1] == "X" && table[2][1] == "X")||
(table[0][2] == "X" && table[1][2] == "X" && table[2][2] == "X")||
(table[0][0] == "X" && table[1][1] == "X" && table[2][2] == "X")||
(table[0][2] == "X" && table[1][1] == "X" && table[2][0] == "X")){
    alert("Player X wins");
    PlayLoseSound();
}

else{
    DidPlayersTie();
}
}

function ComputerMove(){
//random element in array
computerHasMoved = false;
var CheckCellCount = 0;
while(computerHasMoved == false){
var RandomNumRow = Math.floor(Math.random() * 3);
var RandomNumCol = Math.floor(Math.random() * 3);
CheckCellCount++;
//alert(CheckCellCount);
    if(table[RandomNumRow][RandomNumCol]== "E" && computerHasMoved == false){
        //recored row and col
        col = RandomNumCol;
        row = RandomNumRow;
        //flag used to show the computer has moved
        computerHasMoved = true;
        //alert(table[RandomNumRow][RandomNumCol]);
    }
    else if(CheckCellCount == 9){
        break;
    }
}

    // cell 11
    if(row == 0 && col == 0){
        switchImage(11);
    }
    // cell 12
    if(row == 0 && col == 1){
        switchImage(12);
    }
    // cell 13
    if(row == 0 && col == 2){
        switchImage(13);
    }
    // cell 21
    if(row == 1 && col == 0){
        switchImage(21);
    }
    // cell 22
    if(row == 1 && col == 1){
        switchImage(22);
    }
    // cell 23
    if(row == 1 && col == 2){
        switchImage(23);
    }
    // cell 31
    if(row == 2 && col == 0){
        switchImage(31);
    }
    // cell 32
    if(row == 2 && col == 1){
        switchImage(32);
    }
    // cell 33
    if(row == 2 && col == 2){
        switchImage(33);
    }
} 

function Events(num){
    PlayMusic();
    switchImage(num);
    ComputerMove();
    DidPlayerWin();
}

function DidPlayersTie(){
var counter = 0;
        for (var i = 0; i < 3; i++) { 
            for (var j = 0; j < 3; j++) 
            {
                //alert(table[i][j]);
            //if counter reaches 9 then all elements are full --> check for possible tie 
            if(table[i][j] == "X" || table[i][j] == "O"){
                    counter++;
                    //alert(counter);
                    if (counter == 9){
                        alert("It is a draw");
                        PlayTieSound();
                    }
            }
        }
    }
    
} 
function PlayMusic(){
    //Game starts
    var MusicAudio = document.getElementById("MusicAudio");
    MusicAudio.play();
}

function PlayTieSound(){
    //when players tie
    var MusicAudio = document.getElementById("MusicAudio");
    MusicAudio.pause();
    var TieAudio = document.getElementById("TieAudio");
    TieAudio.play();
}

function PlayLoseSound(){
    //when you lose
    var MusicAudio = document.getElementById("MusicAudio");
    MusicAudio.pause();
    var LoseAudio = document.getElementById("LoseAudio");
    LoseAudio.play();
}

function PlayWinSound(){
    //plays win sound when a player wins
    var MusicAudio = document.getElementById("MusicAudio");
    MusicAudio.pause();
    var WinAudio = document.getElementById("WinAudio");
    WinAudio.play();
}

function ResetPage() {
    //resets page once audio is finished
    window.location.reload();
}