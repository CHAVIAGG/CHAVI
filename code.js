var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6bdd30a9-0122-45b6-a018-2d92d184ae68","f981b6a6-89bf-489a-adb8-f4ed6bcc0fe1"],"propsByKey":{"6bdd30a9-0122-45b6-a018-2d92d184ae68":{"name":"chocolate donut","sourceUrl":"assets/api/v1/animation-library/gamelab/7mivVgYFzntkCNZjX4DvB_6TkqMkNjiC/category_food/donut_06.png","frameSize":{"x":363,"y":363},"frameCount":1,"looping":true,"frameDelay":2,"version":"7mivVgYFzntkCNZjX4DvB_6TkqMkNjiC","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":363,"y":363},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7mivVgYFzntkCNZjX4DvB_6TkqMkNjiC/category_food/donut_06.png"},"f981b6a6-89bf-489a-adb8-f4ed6bcc0fe1":{"name":"pink donut","sourceUrl":"assets/api/v1/animation-library/gamelab/0A675LI6tuR.zoQ0yWoEo6NYyIyOaG4B/category_food/donut_03.png","frameSize":{"x":364,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"0A675LI6tuR.zoQ0yWoEo6NYyIyOaG4B","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":364,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0A675LI6tuR.zoQ0yWoEo6NYyIyOaG4B/category_food/donut_03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score=0;
var gameState ="serve";
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
paddle=createSprite(200,390,100,20)
paddle.shapeColor="BLUE"
paddle.setAnimation("chocolate donut");
paddle.scale = 0.3;
ball=createSprite(200,200,20,20)
ball.shapeColor="red"
ball.setAnimation("pink donut");
ball.scale = 0.1;
function draw() {
background("black");
textSize(30);
stroke("purple");
text("Score :"+score,270,30);
if(gameState == "serve")
{
textSize(25);
stroke("blue")
text("Welcome! Press Space to start.",30,200);
if(keyDown("space")){
ball.velocityX = 3;
ball.velocityY = 4;
gameState="play";
}
}
if(gameState == "play")
{
paddle.x=World.mouseX;
if(ball.isTouching(bottomEdge) || score == 16)
{
gameState="end"
}
}
if(gameState == "end")
{
ball.velocityX=0;
ball.velocityY=0;
textSize(25);
stroke("red");
text("Game Over!",140,200);
}
createEdgeSprites();
ball.bounceOff(rightEdge);
ball.bounceOff(leftEdge);
ball.bounceOff(topEdge);
ball.bounceOff(paddle);
if(ball.isTouching(box1))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box1.destroy();
}
if(ball.isTouching(box2))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box2.destroy();
}
if(ball.isTouching(box3))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box3.destroy();
}
if(ball.isTouching(box4))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box4.destroy();
}
if(ball.isTouching(box5))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box5.destroy();
}
if(ball.isTouching(box6))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box6.destroy();
}
if(ball.isTouching(box7))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box7.destroy();
}
if(ball.isTouching(box8))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box8.destroy();
}
if(ball.isTouching(box9))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box9.destroy();
}
if(ball.isTouching(box10))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box10.destroy();
}
if(ball.isTouching(box11))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box11.destroy();
}
if(ball.isTouching(box12))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box12.destroy();
}
if(ball.isTouching(box13))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box13.destroy();
}
if(ball.isTouching(box14))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box14.destroy();
}
if(ball.isTouching(box15))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1;
box15.destroy();
}
if(ball.isTouching(box16))
{
playSound("assets/category_accent/puzzle_game_accent_a_04.mp3");
score=score+1
box16.destroy();
}
drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
