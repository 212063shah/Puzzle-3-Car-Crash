function preload() 
{
  carcrash = loadImage('https://dl.dropboxusercontent.com/s/43eyw6078xuih64/actualcrash.jpg?dl=0');
  woodplank = loadImage('https://dl.dropboxusercontent.com/s/4lxob0v30v3ray3/Lumber.png?dl=0');
  tapemeasurer = loadImage('https://dl.dropboxusercontent.com/s/hty4h39expyegnp/Pigeon-Free-Download-PNG.png?dl=0');
  wallet =  loadImage('https://dl.dropboxusercontent.com/s/550tvw78nh0mlvr/81acebd6894ccea50dbecb0bcf904209.png?dl=0');
}


function setup()
{
  createCanvas(800,600);

  movewalletX = 500;
  movewalletY = 330;
  endwalletX = 30;
  endwalletY = 535;
  stateofwallet = 1;

  movewoodplankX = 450;
  movewoodplankY = 450;
  endwoodplankX = 110;
  endwoodplankY = 535;
  stateofwoodplank = 1;

  movetapemeasurerX = 300;
  movetapemeasurerY = 100;
  endtapemeasureX = 190;
  endtapemeasureY = 535;
  stateoftapemeasurer = 1;
  
  canvas = 1;
}

function draw()
{
  if (canvas == 1)
  {
    canvas1();
  }
}

function canvas1()
{
  background(125,125,125);
  image(carcrash,0,0);
  itemGrid();

  if (stateofwallet == 1)
  {
    movewalletX = 250;
    movewalletY = 300;
    image(wallet,movewalletX,movewalletY,50,50);
  }
  else if (stateofwallet == 2)
  {
    image(wallet,endwalletX,endwalletY,50,50);
  }

  if (stateofwoodplank == 1)
  {
    movewoodplankX = 450;
    movewoodplankY = 450;
    image(woodplank,movewoodplankX,movewoodplankY,50,50);
  }
  else if (stateofwoodplank == 2)
  {
    image(woodplank,movewoodplankX,movewoodplankY,50,50);

    if (movewoodplankX > endwoodplankX)
    {
      movewoodplankX = movewoodplankX - 8;
    }
    if (movewoodplankY < endwoodplankY)
    {
      movewoodplankY = movewoodplankY + 2;
    }
    if (!(movewoodplankX > endwoodplankX && movewoodplankY < endwoodplankY))
    {
      stateofwoodplank = 3;
    }
  }
  else if (stateofwoodplank == 3)
  {

    image(woodplank,endwoodplankX,endwoodplankY,50,50);
  }

  if (stateoftapemeasurer == 1)
  {
    movetapemeasurerX = 300;
    movetapemeasurerY = 100;
    image(tapemeasurer,movetapemeasurerX,movetapemeasurerY,50,50);
  }
  else if(stateoftapemeasurer == 2)
  {
    movetapemeasurerX = 300;
    movetapemeasurerY = 100;
    image(tapemeasurer,movetapemeasurerX,movetapemeasurerY,300,300);

    if (!(movetapemeasurerX > endtapemeasureX && movetapemeasurerY < endtapemeasureY))
    {
      stateoftapemeasurer = 5
    }
  }
  else if (stateoftapemeasurer == 3)
  {
    image(tapemeasurer,movetapemeasurerX,movetapemeasurerY,50,50);

    if (movetapemeasurerX > endtapemeasureX)
    {
      movetapemeasurerX = movetapemeasurerX - 2;
    }
    if (movetapemeasurerY < endtapemeasureY)
    {
      movetapemeasurerY = movetapemeasurerY + 8;
    }
    if (!(movetapemeasurerX > endtapemeasureX && movetapemeasurerY < endtapemeasureY))
    {
      stateoftapemeasurer = 4
    }
  }
  else if (stateoftapemeasurer == 4)
  {
    image(tapemeasurer,endtapemeasureX,endtapemeasureY,50,50);
  }

  else if (stateoftapemeasurer == 5)
  {
    image(tapemeasurer,endtapemeasureX,endtapemeasureY,300,300);
  }

  if (mouseX > 400 && mouseX < 600 && mouseY > 200 && mouseY < 400)
  {
    cursor(HAND);
    if (mouseIsPressed == true && stateoftapemeasurer == 2)
    {
      stateoftapemeasurer = 3;
    }
  }
  else if (mouseX > 300 && mouseX < 400 && mouseY > 100 && mouseY < 200)
  {
    cursor(HAND);
    if (mouseIsPressed == true && stateoftapemeasurer == 1)
    {
      stateoftapemeasurer = 2;
    }
  }
  else if (mouseX > 450 && mouseX < 500 && mouseY > 450 && mouseY < 500)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateofwoodplank = 2;
    }
  }
  else if (mouseX > 300 && mouseX < 350 && mouseY > 250 && mouseY < 350)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateofwallet = 2;
    }
  }
  else
  {
    cursor(ARROW);
  }
}
function itemGrid()
{
  // background for item grid
  fill(50,50,50);
  rect(10,510,780,580);

  // left most box
  fill(125,125,125);
  rect(20,520,70,70);

  // middle most box
  fill(125,125,125);
  rect(100,520,70,70);

  // right most box
  fill(125,125,125);
  rect(180,520,70,70);
}

function paintCanvasButtons()
{
  if (mouseX > myX+170 && mouseX < myX+170+100 && mouseY > myY+300 && mouseY < myY+300+50 && mouseIsPressed)
  {
    canvas = 2;
  }
}