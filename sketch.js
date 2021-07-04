//Create variables here
var dog,sadDog,happyDog, database;
var foodS,foodStock;
var fedTime,lastFed;
var feed,addFood;
var foodObj;
var washroom,bedroom ,garden
var readstate,gamestate=0
var milk,milkImg
var bath,sleeping ,addFood;
 
function preload(){
sadDog=loadImage("Images/dogImg.png");
happyDog=loadImage("Images/dogImg1.png");
washroom=loadImage("Images/Wash Room.png");
bedroom=loadImage("Images/Bed Room.png");
garden=loadImage("Images/Garden.png");
milkImg=loadImage("Images/Milk.png")
livingroom=loadImage("Images/Living Room.png")
}

function setup() {
  background("yellow")
  createCanvas(700,500);
database=firebase.database();
  foodObj = new Food();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
  readstate=database.ref("gamestate")
  readstate.on("value",function(data){
    gamestate=data.val()
  })
  dog=createSprite(500,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  if(gamestate===1){
    dog.addImage(happyDog)
    dog.scale=0.175
    dog.y=250
  }
  if(gamestate===2){
    dog.addImage(sadDog)
    dog.scale=0.175
    milkImg.visible=false
    dog.y=250
  }
  button=createButton("Feed the dog");
  button.position(680,90);
 if( button.mousePressed(function(){
foodS=foodS-1
dog.addImage(happyDog)
gamestate=1
database.ref('/').update({"gamestate":gamestate})
 }));

  addFood=createButton("Add Food");
  addFood.position(770,90);
  if(addFood.mousePressed(function(){
foodS=foodS+1
gamestate=2
dog.addImage(sadDog)
database.ref('/').update({"gamestate":gamestate})
  }));
   
  sleeping=createButton("I am very sleepy")
sleeping.position(500,180)
if(sleeping.mousePressed(function(){
  foodObj.bedroom()
gamestate=4
database.ref("/").update({"gamestate":gamestate})
}))
if(gamestate===4){
foodObj.bedroom()
  dog.scale=1
milkImg.visible=false
}
bath=createButton("I want to take a bath")
bath.position(700,180)
if(bath.mousePressed(function(){
gamestate=3
foodObj.washroom()
database.ref('/').update({"gamestate":gamestate})
}))
if(gamestate===3){
 foodObj.washroom
  dog.scale=1
  milkImg.visible=false
}
play=createButton("i want to play")
play.position(900,180)
if(play.mousePressed(function(){
 foodObj.livingroom()
  gamestate=5
  database.ref("/").update({"gamestate":gamestate})
}))
if(gamestate===5){
foodObj.livingroom()
  dog.scale=1
  milkImg.visible=false
}
parkplay=createButton("i want to play outside")
parkplay.position(650,220)

if(parkplay.mousePressed(function(){
  foodObj.garden()
  gamestate=6
  database.ref("/").update({"gamestate":gamestate})
}))
if(gamestate===6){
  dog.y=175
 foodObj.garden
  dog.scale=1
  milkImg.visible=false
}
}


function draw() {
  
  foodObj.display()
  writeStock(foodS)
   
  textSize(16)
  if(lastFed>=12){
    
    text("Last Feed : "+ lastFed%12 + " PM", 350,30);
  
   }else if(lastFed===0){
     text("Last Feed : 12 AM",350,30);
    
   }else  {
     text("Last Feed : "+ lastFed + " AM", 350,30);
   }
 
 
  
  
   drawSprites();
   fill("white")
   stroke ("red")
   textSize (20)
   text("name the dog",200,25)
  }

//function to read food Stock
function readStock(data){
  foodS=data.val();
  

}
function writeStock(x){
  x=20
  database.ref('/').update({
    food:x
  })
}

//function to update food stock and last fed time
function feedDog(){
  dog.addImage(sadDog);
  
  if(foodObj.getFoodStock()<= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
  
  database.ref('/').update({
    food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

//function to add food in stock
function addFoods(){

  dog.addImage(happyDog)
  foodS++;
  database.ref('/').update({
    food:foodS
  })
}
  function update(state){
    database.ref('/').update({
    gamestate:state
    })
  }
  

  

