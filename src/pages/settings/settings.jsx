import { useNavigate } from "react-router-dom";

import PageHeading from "../../components/settings/page-heading/page-heading";
import MatchesSettings from "../../components/settings/matches-settings/matches-settings";
import FirstMoveSettings from "../../components/settings/first-move-settings/first-move-settings";
import GameRules from "../../components/settings/game-rules/game-rules";

import './settings.css';

const Settings = ({ gameSettings, setGameSettings }) => {
    const navigate = useNavigate();

    return (
        <div className="page-wrapper settings-page">
            <PageHeading
                title={'Take the Match!🔥'}
                subtitle={'Adjust game params and read the rules first. Use the arrow keys on your keyboard for convenience or enter parameters manually.'} />

            <MatchesSettings
                gameSettings={gameSettings}
                setGameSettings={setGameSettings} />

            <FirstMoveSettings
                gameSettings={gameSettings}
                setGameSettings={setGameSettings} />

            <GameRules
                gameSettings={gameSettings} />

            <div 
                onClick={() => {
                    navigate('/game');
                }}
                className="start-game-btn">
                    <span>Start the game</span>
            </div>
        </div>
    )
}

export default Settings;
