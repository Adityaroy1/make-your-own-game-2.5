var warship
var wave=1
function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);
enemygroup=new Group()
warship=createSprite(0,250,50,50);
sbulletgroup=new Group()
ebulletgroup=new Group()

  
}


function draw() {
  rectMode(CENTER);
  background('pink');
	if(enemygroup.length<wave){
		//number of enemy is equal to number of wave
		SpawnEnemy();
		
 	
	}
		var gap=Math.round(random(30, 80))
		if(frameCount%gap===0&& enemygroup.length>0){
			ebulletgroup.destroyEach()
			while(ebulletgroup.length<16){
				enemy_bullets()
			}
			
		}
	//killing the enemy
	for(i=0;i<sbulletgroup.length;i++){
		for(j=0;j<enemygroup.length){
			if(sbulletgroup(i).isTouching(enemygroup(j))){
				sbulletgroup(i).destroy()
				enemygroup(j).destroy
			}
		}
	}
	/
	
	console.log(ebulletgroup.length )       
	ship_bullets();
	drawSprites(); 

}
function SpawnEnemy (){
	var num =Math.round(random(60,80))
	if(frameCount%num===0){
		enemy=createSprite(1000,250,60,60)
		enemy.y=Math.round(random(10,490))
		enemygroup.add(enemy) 
	}

}
function ship_bullets(){
	if(keyIsDown(RIGHT_ARROW)){
		if(frameCount%25==0){
			sbullet=createSprite(0,250,10,10)
			sbullet.y=warship.y
			sbullet.velocityX=8
			sbullet.lifetime=300
			sbullet.shapeColor="green"
			sbulletgroup.add(sbullet)
		}
 	}
}
function enemy_bullets(){
	
		if(frameCount%20===0){
			ebullet=createSprite(1000,250,5,5)
			
			var i=Math.round(random(0,enemygroup.length-1))	
			ebullet.y=enemygroup[i].y
			ebullet.shapeColor="purple "
		    ebulletgroup.add(ebullet)
			//ebullet.lifetime=300
			ebullet.velocityX=-8		
		}
	
}


