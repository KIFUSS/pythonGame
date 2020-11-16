// Создаёт рандомные координаты для высоты и ширины очень косячно
function createRandowPlaceApple(xOrY) 
{
    let 
        rand, 
        xPositionApple, 
        yPositionApple;

    if (xOrY == 'width')
    {
        xPositionApple = Math.round(rand = 1 - 0.5 + Math.random() * (canv.width - 1 + 1))
        return xPositionApple;
    }
    else if (xOrY == 'height')
    {
        yPositionApple = Math.round(rand = 1 - 0.5 + Math.random() * (canv.height - 1 + 500));
        return yPositionApple;
    }
}

// создаёт змейку
function createPython() 
{
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, sizePythonX, sizePythonY);
}



let 
    canv = document.getElementById('canv'),
    ctx = canv.getContext('2d'),
    pythonXPosition = 100, 
    pythonYPosition = 500,
    sizePythonX = 20,
    sizePythonY = 20,
    move = 'right', // направление куда двигаеться змея
    speedPython = 20;
    allApple = [] // массив для яблок


// обозначаем что ширина и высота канваса равно полному экрану юзера
canv.width = window.innerWidth;
canv.height = window.innerHeight;

createPython();

// Заставляет змейку двигаться вперёд
setInterval(function() {
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, canv.width, canv.height);
    
    ctx.fillStyle = 'green';

    if (move == 'up')
        ctx.fillRect(pythonXPosition, pythonYPosition--, sizePythonX, sizePythonY);
    else if (move == 'down')
        ctx.fillRect(pythonXPosition, pythonYPosition++, sizePythonX, sizePythonY);
    else if (move == 'left')
        ctx.fillRect(pythonXPosition--, pythonYPosition, sizePythonX, sizePythonY);
    else if (move == 'right')
        ctx.fillRect(pythonXPosition++, pythonYPosition, sizePythonX, sizePythonY); 

    // если доходит до конца экрана

    if (pythonXPosition == canv.width + 10 && move == 'right') 
        pythonXPosition = -20;
    else if (pythonYPosition == canv.height + 10 && move == 'down')
        pythonYPosition = -20;
    else if (pythonYPosition == -10 && move == 'up')
        pythonYPosition = canv.height + 10;
    else if (pythonXPosition == -10 && move == 'left')
        pythonXPosition = canv.width + 10;



    // создание яблок
    //////////////////////

}, speedPython);

createRandowPlaceApple(canv.width, canv.height);


// если нажимает вниз влево вправо или вверх змейка начинает двигаться туда
addEventListener('keydown', function (event) {        
    switch (event.code) {
       case 'ArrowUp':
            move = 'up'
            break;
       case 'ArrowDown':
           move = 'down';
           break;
       case 'ArrowLeft':
           move = 'left'
           break;
       case 'ArrowRight':
           move = 'right';
           break;
    }
});

// Создание яблок и их рандомное появление



// let 
//     stateApple = false,
//     countApple = 0,
//     appleXPosition = randomPlaceApple(0, canv.width),
//     appleYPosition = randomPlaceApple(0, canv.height);




// setInterval(function () {


//     ctx.fillStyle = 'red';
//     ctx.fillRect(appleXPosition, appleYPosition, 10, 10);
//     countApple++;

//     if (countApple == 1){
//         clearInterval(createApple);
//     }

// }, 20);