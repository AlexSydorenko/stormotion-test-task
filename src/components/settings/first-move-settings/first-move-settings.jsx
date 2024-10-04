import { FaUserNinja, FaRobot } from "react-icons/fa";

import './first-move-settings.css';

const FirstMoveSettings = ({ gameSettings, setGameSettings }) => {
    return (
        <div className="first-move-settings">
            <h2 className="first-move-settings-title">
                Who is doing 1st move?
            </h2>

            <div className="first-move-choice-wrapper">
                <div 
                    onClick={ () => {
                        setGameSettings({ ...gameSettings, whoseTurn: 'you' });
                    }}
                    id="you"
                    className={`first-move-choice first-move-user ${gameSettings.whoseTurn === 'you' ? "first-move-choice-active" : ""}`}>
                        <FaUserNinja className="first-move-choice-icon" />
                        <span>You</span>
                </div>
                <div 
                    onClick={ () => {
                        setGameSettings({ ...gameSettings, whoseTurn: 'pc' });
                    }}
                    id="pc"
                    className={`first-move-choice first-move-pc ${gameSettings.whoseTurn === 'pc' ? "first-move-choice-active" : ""}`}>
                        <FaRobot className="first-move-choice-icon" />
                        <span>PC</span>
                </div>
            </div>
        </div>
    )
}

export default FirstMoveSettings;
