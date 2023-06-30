let activePlayer ="X"; //assigning activePlayer as X

let selectedSquares=[]; //defining array

function placeXOrO(squareNumber) { //creating function  for putting x or o in a square
    if(!selectedSquares.some(element=>element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer ==="X") {
            select.style.backgroundImage='url("images/x.jpg")';
        }  else {
            select.style.backgroundImage='url("images/o.jpg")';
        }

        function checkWinConditions() { //defining a function that parses the selectedSquares array to look for win conditions
            if(arrayIncludes('0X', '1X', '2X')) {drawWinLine(50,100,558,100)} // drawWinline is functio to draw line across grid if win conditions are met
            else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50,304,558,304)} 
            else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50,508,558,508)} 
            else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100,50,100,558)}
            else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304,50,304,558)}
            else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508,50,508,558)}
            else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100,508,510,90)}
            else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100,100,520,520)}
            else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50,100,558,100)}
            else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50,304,558,304)}
            else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50,508,558,508)}
            else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100,50,100,558)}
            else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304,50,304,558)}
            else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508,50,508,558)}
            else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100,508,510,90)}
            else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100,100,520,520)}
            else if(selectedSquares.length >= 9) {
                audio('./media/tie1.mp3'); // plays the tie game sound
                setTimeout(function() {resetGame();}, 500); //.3 seconds before resetGame is called
            }
           
            function arrayIncludes(squareA, squareB, squareC) { //defining a function that check if an array includes 3 strings
                const a=selectedSquares.includes(squareA);
                const b=selectedSquares.includes(squareB);
                const c=selectedSquares.includes(squareC);
                if (a === true && b ===true && c === true) {return true;}
            }
        }


        selectedSquares.push(squareNumber + activePlayer); //adding concatenated string to the array
        checkWinConditions(); //calling the funtion to check the win conditions
        if (activePlayer ==="X") {
            activePlayer = "O";
        } else {
            activePlayer="X";
        }

        audio("./media/place1.mp3"); //plays the placment sound 
        if (activePlayer==="O") {
            disableClick();
            setTimeout(function(){computersTurn();},1000);
        }
        return true;
    }

    function computersTurn() { //fuction that results in random square being chosen by the computer
        let success=false;
        let pickASquare;
        while(!success) {
            pickASquare = String(Math.floor(Math.random() *9));
            if(placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success=true;
            };
        }
    }
}

function disableClick() { //makes the body element temporarily unclickable
    body.style.pointerEvents = 'none';
    setTimeout(function () {body.style.pointerEvents = 'auto';} ,1000);
}

function audio(audioURL) { //function that allows the audio to be played
    let audio= new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { // function that draws the win line, uses HTML canvas
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1=coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x=x1,
        y=y1;

    function animateLineDrawing() { //interacts with canvas to create the animation for the line drawing
        const animationLoop=requestAnimationFrame(animateLineDrawing);
        c.clearRect(0,0,608,608);
        c.beginPath();
        c.moveTo(x1,y1);
        c.lineTo(x,y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70,225,33,.8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if(x < x2){x += 10;}
            if (y< y2) {y+= 10;}
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        if (x1 <= x2 && y1>=y2) {
            if (x < x2) {x +=10;}
            if (y > y2) {y-=10;}
            if (x>= x2 && y<=y2) {cancelAnimationFrame(animationLoop);}
        }    
    }
    function clear() { //clears the canvas of the win line after it is drawn
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0,0,608,608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick(); // makes it to where you cannot click while sound is playing
    audio('./media/winGame1.mp3');
    animateLineDrawing();
    setTimeout(function () {clear(); resetGame(); }, 1000);
}

function resetGame() { //resets the game in the case of a tie or a win
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}

function dblclick() {
    document.getElementById("head").style.color = "purple";
}