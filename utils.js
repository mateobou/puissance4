export const isPlayerConnected = ()=>{
    if(req.session.playerNumber === PLAYER_ONE || req.session.playerNumber === PLAYER_TWO){
        return true
    }
    return false
}