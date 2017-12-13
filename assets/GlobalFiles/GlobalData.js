var lives = 5;
var score = 0;
var path=[];

//x, y, coordinates for pre defined path for levels.
path[0]=[170,200,
		440,300,
		170,400,
		440,500,
		170,600,
		440,700,
		170,800,
		440,900,
		170,1000,
		440,1100,
		170,1200,
		440,1300,
		170,1400,
		440,1500,
		170,1600,
		440,1700,
		440,1900];

//get set for HP and Score for evaluation.
var globalFile = {
	globalLives: function(){
	return lives;
	},
	
	globalScore: function(){
		return score;
	},
	
	globalPath: function(){
		return path;
	},
}

module.exports=globalFile;