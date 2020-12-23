class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

   start(){
     car1=createSprite(displayWidth/2-400,displayHeight-100)
     car2=createSprite(displayWidth/2-200,displayHeight-100)
     car3=createSprite(displayWidth/2,displayHeight-100)
     car4=createSprite(displayWidth/2+200,displayHeight-100)
     cars=[car1,car2,car3,car4];
    if(gameState === 0){
      player = new Player();
   
      player.getCount();
   
      form = new Form()
      form.display();
      
    }
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var index=0
      var x=0
      var y;
      for(var plr in allPlayers){
        index+=1;
        x+=200;
        y=displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x
        cars[index-1].y=y;
        if(index===player.index){
          cars[index-1].shapeColor="red";
          camera.position.x=displayWidth/2;
          camera.position.y=cars[index-1].y
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    drawSprites();
  }
}
