let player, stars, planets;
let score = 0, lives = 3, bestScore = 0;
let gameOver = false;

const W = 800, H = 450;

const UI = {
  score: document.getElementById('score'),
  lives: document.getElementById('lives'),
  best: document.getElementById('best')
};

const config = {
  type: Phaser.AUTO,
  width: W,
  height: H,
  parent: 'game',
  physics: { default: 'arcade', arcade: { gravity: {y:0}, debug:false } },
  scene: { preload, create, update }
};

new Phaser.Game(config);

function preload() {
  const g = this.make.graphics({ add:false });

 // Cohete triangular azul con llama
g.fillStyle(0x3ddc97); // cuerpo
g.beginPath();
g.moveTo(16,0);
g.lineTo(32,32);
g.lineTo(0,32);
g.closePath();
g.fillPath();

// Llama naranja
g.fillStyle(0xffa500);
g.beginPath();
g.moveTo(16,32);
g.lineTo(12,44);
g.lineTo(20,44);
g.closePath();
g.fillPath();

// Llama amarilla interna
g.fillStyle(0xffe066);
g.beginPath();
g.moveTo(16,32);
g.lineTo(13,40);
g.lineTo(19,40);
g.closePath();
g.fillPath();

g.generateTexture('player',32,48); // altura aumentada para la llama
g.clear();

  // Estrella amarilla
  g.fillStyle(0xffe066);
  const cx=16,cy=16,outer=12,inner=6,spikes=5;
  let rot = -Math.PI/2;
  g.beginPath();
  for(let i=0;i<spikes*2;i++){
    let r = i%2===0?outer:inner;
    let x = cx + Math.cos(rot)*r;
    let y = cy + Math.sin(rot)*r;
    if(i===0) g.moveTo(x,y);
    else g.lineTo(x,y);
    rot += Math.PI/spikes;
  }
  g.closePath();
  g.fillPath();
  g.generateTexture('star',32,32);
  g.clear();

  // Planeta rojo con cráteres
  g.fillStyle(0xff4d6d);
  g.fillCircle(16,16,16);
  g.fillStyle(0xb22234); // cráteres oscuros
  g.fillCircle(22,12,4);
  g.fillCircle(10,20,3);
  g.fillStyle(0xffa3b5); // cráteres claros
  g.fillCircle(14,10,2);
  g.fillCircle(20,18,1.5);
  g.lineStyle(2,0x000000,0.5);
  g.strokeCircle(16,16,16);
  g.generateTexture('planet',32,32);
  g.destroy();
}

function create() {
  bestScore = parseInt(localStorage.getItem('bestScore'))||0;
  UI.best.textContent = bestScore;

  player = this.physics.add.sprite(W/2,H/2,'player');
  player.setCollideWorldBounds(true);

  let target = new Phaser.Math.Vector2(player.x,player.y);
  this.input.on('pointermove', p=>target.set(p.x,p.y));
  this.target = target;

  stars = this.physics.add.group();
  planets = this.physics.add.group();

  spawnStars(this,6);
  spawnPlanets(this,3);

  this.physics.add.overlap(player,stars,collectStar,null,this);
  this.physics.add.overlap(player,planets,hitPlanet,null,this);

  document.getElementById('restartBtn').onclick=()=>restartGame(this);
}

function update(){
  if(gameOver) return;

  // Velocidad base aumentada por puntaje
  let speed = 0.5 + score/200;

  let dir = this.target.clone().subtract(player);
  if(dir.length()>4){
    dir.normalize();
    player.x += dir.x*speed;
    player.y += dir.y*speed;
    player.rotation = Phaser.Math.Angle.Between(player.x,player.y,this.target.x,this.target.y) + Math.PI/2;
  }

  // Parpadeo estrellas
  stars.getChildren().forEach(s=>{
    s.alpha = 0.7 + 0.3*Math.sin(Date.now()*0.005 + s.x);
  });
}

function spawnStars(scene,n){
  for(let i=0;i<n;i++){
    let x,y;
    do{
      x=Phaser.Math.Between(40,W-40);
      y=Phaser.Math.Between(40,H-40);
    }while(overlaps(x,y,stars) || overlaps(x,y,planets));
    stars.create(x,y,'star').setScale(1);
  }
}

function spawnPlanets(scene,n){
  for(let i=0;i<n;i++){
    let x,y;
    do{
      x=Phaser.Math.Between(50,W-50);
      y=Phaser.Math.Between(50,H-50);
    }while(overlaps(x,y,stars) || overlaps(x,y,planets));
    planets.create(x,y,'planet').setScale(1.5);
  }
}

function overlaps(x,y,group){
  let flag=false;
  group.getChildren().forEach(obj=>{
    if(Phaser.Math.Distance.Between(x,y,obj.x,obj.y)<40) flag=true;
  });
  return flag;
}

function collectStar(player,star){
  star.destroy();
  score+=10;
  if(score>bestScore){
    bestScore=score;
    localStorage.setItem('bestScore',bestScore);
  }
  UI.score.textContent=score;
  spawnStars(this,1);
}

function hitPlanet(player,planet){
  planet.destroy();
  lives--;
  UI.lives.textContent=lives;
  spawnPlanets(this,1);
  if(lives<=0) endGame();
}

function endGame(){
  gameOver=true;
  document.getElementById('restartBtn').style.display='block';
}

function restartGame(scene){
  score=0; lives=3; gameOver=false;
  UI.score.textContent=score;
  UI.lives.textContent=lives;
  player.setPosition(W/2,H/2);
  stars.clear(true,true);
  planets.clear(true,true);
  spawnStars(scene,6);
  spawnPlanets(scene,3);
  document.getElementById('restartBtn').style.display='none';
}
