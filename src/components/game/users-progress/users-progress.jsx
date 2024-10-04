import { GiMatchHead } from "react-icons/gi";
import { FaUserNinja, FaRobot } from "react-icons/fa";

import './users-progress.css';

const UsersProgress = ({ gameSettings, usersMatches }) => {
    return (
        <div className="users-progress-wrapper">
            <div className={`user-progress you-progress ${ gameSettings.whoseTurn === 'you' ? "user-progress-active" : "" }`}>
                <div className="user-progress-avatar">
                    <FaUserNinja className="user-icon" />
                    <span>You</span>
                </div>
                <div className="user-progress-matches">
                    <span className="user-progress-matches-count">
                        { usersMatches.yourMatches }
                    </span>
                    <GiMatchHead className="user-progress-match-icon" />
                </div>
            </div>
            <div className={`user-progress pc-progress ${ gameSettings.whoseTurn === 'pc' ? "user-progress-active" : "" }`}>
                <div className="user-progress-avatar">
                    <FaRobot className="user-icon" />
                    <span>PC</span>
                </div>
                <div className="user-progress-matches">
                    <span className="user-progress-matches-count">
                        { usersMatches.pcMatches }
                    </span>
                    <GiMatchHead className="user-progress-match-icon" />
                </div>
            </div>
        </div>
    )
}

export default UsersProgress;
