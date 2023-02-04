
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
function dice1(rn)
{
  switch(rn)
  {
      case 1 : 
        document.getElementsByTagName("img")[0].setAttribute("src","images/dice1.png");
       break;
      case 2 : 
        document.getElementsByTagName("img")[0].setAttribute("src","images/dice2.png");
       break;
      case 3 : 
       document.getElementsByTagName("img")[0].setAttribute("src","images/dice3.png");
      break;
      case 4 : 
      document.getElementsByTagName("img")[0].setAttribute("src","images/dice4.png");
       break;
       case 5 : 
      document.getElementsByTagName("img")[0].setAttribute("src","images/dice5.png");
      break;
      case 6: 
       document.getElementsByTagName("img")[0].setAttribute("src","images/dice6.png");
       break;
  }
}
function dice2(rn)
{
  switch(rn)
  {
      case 1 : 
        document.getElementsByTagName("img")[1].setAttribute("src","images/dice1.png");
       break;
      case 2 : 
        document.getElementsByTagName("img")[1].setAttribute("src","images/dice2.png");
       break;
      case 3 : 
       document.getElementsByTagName("img")[1].setAttribute("src","images/dice3.png");
      break;
      case 4 : 
      document.getElementsByTagName("img")[1].setAttribute("src","images/dice4.png");
       break;
       case 5 : 
      document.getElementsByTagName("img")[1].setAttribute("src","images/dice5.png");
      break;
      case 6: 
       document.getElementsByTagName("img")[1].setAttribute("src","images/dice6.png");
       break;
  }
}
dice1(randomNumber1);
dice2(randomNumber2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent=" 🥇 Player1 won!";
}
if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").textContent=" 🥇 Player2 won!";
}
if(randomNumber1==randomNumber2)
{
  document.querySelector("h1").textContent="Match Drawn.";
}