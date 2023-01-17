

// Balls animation  

// Colors for balls 
const colors = ['#f05252', '#f2711c', '#f5a623', '#f7d12e', '#a3e048', '#56d9cd', '#1fb8e5', '#1a75bb', '#5151e5', '#a54ee5', '#f05252'];

const numBalls = 100; //number of balls 
const balls = [];

//create ball divs and set random colors, positions and sizes
for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div"); //create a new div for each ball
    ball.classList.add("ball"); //add the class "ball" to each div
    ball.style.background = colors[Math.floor(Math.random() * colors.length)]; //set random color from the colors array
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`; //set random left position
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`; //set random top position
    ball.style.transform = `scale(${Math.random()})`; //set random scale
    ball.style.width = `${Math.random() * 2 }em`; //set random width
    ball.style.height = ball.style.width; //set the height to be the same as the width
    
    balls.push(ball); //add the ball to the balls array
    const hero = document.querySelector('.hero'); //select the element with class "hero"
    hero.append(ball); //append each ball to the hero element
  }

// Keyframes
// Animate each ball with random duration, direction and iteration
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" }, //starting position
      { transform: `translate(${to.x}rem, ${to.y}rem)` } //ending position
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
