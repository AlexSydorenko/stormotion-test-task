import './game-rules.css';

const GameRules = ({ gameSettings }) => {
    return (
        <div className="game-rules">
            <p className="game-rules-text">
                From the pile of 
                    <span className="total-matches-count"> { gameSettings.totalMatches } </span> 
                matches, each player takes from  
                    <span className="matches-settings-static"> 1 </span> 
                to 
                    <span className="matches-settings-static"> { gameSettings.maxAllowedToTake } </span> 
                matches on each turn. The game is over once all matches are taken. Whoever has the even amount of matches wins.
            </p>
        </div>
    )
}

export default GameRules;
