class Food {
  constructor(){
    this.greeting = createElement('h2');
    this.input=createInput("Name")
    this.button=createButton("play")
  this.foodStock=0;
  this.lastFed;
  this.image=loadImage('images/Milk.png');
  }

 updateFoodStock(foodStock){
  this.foodStock=foodStock;
 }

 getFedTime(lastFed){
   this.lastFed=lastFed;
 }

 deductFood(){
   if(this.foodStock>0){
    this.foodStock=this.foodStock-1;
   }
  }

  getFoodStock(){
    return this.foodStock;
  }

  display(){
    
    var x=80,y=100
    this.input.position(500,85)
    this.button.position(600,85)
    this.button.mousePressed(()=>{
  
     
         
      dog.name = this.input.value();
      this.greeting.html("Hello " + dog.name)
      this.greeting.position(500,85)
    })
    
    
    imageMode(CENTER);
    
    
    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x=80;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
  }
  bedroom(){
  background(bedroom)
  
  this.input.hide()
  this.button.hide()
  }
  washroom(){
    background(washroom)
    this.input.hide()
    this.button.hide()
  }
  garden(){
    background(garden)
    this.input.position(1500,85)
    this.button.position(1600,85)
    this.button.mousePressed(()=>{
  
     
         
      dog.name = this.input.value();
      this.greeting.html("Hello " + dog.name)
      this.greeting.position(500,95)
    })
  }
  livingroom(){
    background(livingroom)
    this.input.position(1500,85)
    this.button.position(1600,85)
    this.button.mousePressed(()=>{
  
     
         
      dog.name = this.input.value();
      this.greeting.html("Hello " + dog.name)
      this.greeting.position(500,95)
  })
}
  }
