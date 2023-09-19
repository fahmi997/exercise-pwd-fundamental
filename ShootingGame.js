
class Player{
    constructor(_name, _health = 100, _power = 10){
        this.name = _name;
        this.health = _health;
        this.power = _power;
    };
    
    hit(power){
        return this.health -= power;
    };
    useItem(item){
        if(item.split(":")[0] === "Health"){ 
            return this.health += parseInt(item.split(":")[1]);
        }else {
            return this.power += parseInt(item.split(":")[1]);
        };
    };
    showStatus(){
        return `${this.name} (Health => ${this.health}, Power => ${this.power})`;
    };
};

class shootingGame{
    constructor(_playerA, _playerB){
        this.playerA = _playerA
        this.playerB = _playerB        
    };

    getRandomItem(){
        const item = ["Health:0", "Health:10", "Power:0", "Power:10"];
        let rand = Math.floor(Math.random() * 4);
        let result = item[rand];
        return result;
    };
    
    start(){
        while(true){
            //Initial State
            console.log(`===BEFORE===\n ${this.playerA.showStatus()}\n ${this.playerB.showStatus()}`);
            let playerAGetItem = this.getRandomItem();
            let playerBGetItem = this.getRandomItem();
            //Show Obtained Item
            console.log(`===GET ITEM===\n ${this.playerA.name}(${playerAGetItem})\n ${this.playerB.name}(${playerBGetItem})`);
            this.playerA.useItem(playerAGetItem);
            this.playerB.useItem(playerBGetItem);
            //Show Stats After Using an Item
            console.log(`===AFTER GET ITEM===\n ${this.playerA.showStatus()}\n ${this.playerB.showStatus()}`);
            this.playerA.hit(this.playerB.power);
            this.playerB.hit(this.playerA.power);
            //Show Latest Stats
            console.log(`===AFTER SHOOT===\n ${this.playerA.showStatus()}\n ${this.playerB.showStatus()}`);
            
            if(this.playerA.health <= 0 && this.playerA.health < this.playerB.health) {
                console.log(`${this.playerB.name} is WINNER`);
                break;
            }else if(this.playerB.health <= 0 && this.playerB.health < this.playerA.health){
                console.log(`${this.playerA.name} is WINNER`);
                break;
            }else if((this.playerA.health === this.playerB.health) && (this.playerA.health <= 0 || this.playerB.health <= 0)){
                console.log(`DRAW!!!`);
                break;
            };
        };
    };
};

let player1 = new Player("Fahmi");
let player2 = new Player("Sulthan");
let shooting = new shootingGame(player1, player2);

shooting.start();