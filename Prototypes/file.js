//

const playerMethods = {
    
    run: function(speed){
        this.energy += speed;
        console.log(this.energy);
    },
    
    jump: function(hight){
        this.energy += hight;
        console.log(this.energy);
    },
    
    kickBall: function(strength){
        this.energy += strength;
        console.log(this.energy);
    },
    
    dance: function(move){
        this.energy += move;
        console.log(this.energy);
    },
}

function Player(name,age,energy){
    let player = Object.create(playerMethods);
    player.name=name;
    player.age=age;
    player.energy=energy;
    
    return player;
}

const player_1 = Player("dahha",33,54);
const player_2 = Player("salama",43,100);

player_1.dance(3);



// prototypes


function Player(name,age,energy){
    let player = Object.create(Player.prototype);
    player.name=name;
    player.age=age;
    player.energy=energy;
    
    return player;
}

    Player.prototype.run = function(speed){
        this.energy += speed;
        console.log(this.energy);
    }
    
    Player.prototype.jump = function(hight){
        this.energy += hight;
        console.log(this.energy);
    }
    
    Player.prototype.kickBall = function(strength){
        this.energy += strength;
        console.log(this.energy);
    }

const player_1 = Player("dahha",33,54);
const player_2 = Player("salama",43,100);

player_1.run(3);
