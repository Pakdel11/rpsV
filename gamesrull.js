class RPS {


    constructor(plrA, plrB){
        this._players = [plrA, plrB];
        this._turns = [null, null];
        this._sendToPlayers('Game starts!');


        this._players.forEach((player, idx)=>{
            player.on('turn', (turn)=>{
                this._onTurn(idx, turn)
            })
        })
    }
    _sendToPlayer(playerIndex, msg){
        this._players[playerIndex].emit('message', msg);
        
    }
    _sendToPlayers(msg){
        this._players.forEach((player)=>{
            player.emit('message', msg);
        })
    }

    _onTurn(playerIndex, turn){
        this._turns[playerIndex] = turn;
        this._sendToPlayer(playerIndex, `You selected ${turn}`);
        this._checkGameOver();
    }

    _checkGameOver(){
        const turns = this._turns;
        if(turns[0] && turns[1]){
            this._sendToPlayers('Game over  ' + turns.join(' : '));
            this._GameResult();
            this._turns = [null, null];
            this._sendToPlayers('Next round!!!');
        }
    }

    _GameResult(){
        const p0 = this._decodeTurn(this._turns[0])
        const p1 = this._decodeTurn(this._turns[1])
        
        const distance = (p1 - p0 + 3) % 3;
        
        switch (distance) {
            case 0:
                this._sendToPlayers("Draw!");
                break;
            case 1:
                this._sendWinMessage(this._players[0],  this._players[1]);
                break;
            case 2:
                this._sendWinMessage(this._players[1], this._players[0]);
                break;
        }

    }


    _sendWinMessage(winner, loser){
        winner.emit('message', 'You won!');
        loser.emit('message', 'Best luch in next match!');
    }
    _decodeTurn(turn){

        switch (turn) {
            case 'rock':
                return 0;
            case 'scissors':
                return 1;
            case 'paper':
                    return 2;
            default:
                throw new Error(`Could not found ${turn}`)
            } 
        }
    }



module.exports = RPS;