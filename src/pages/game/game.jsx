import { useEffect, useState } from 'react';
import { calculatePcOptimalMove } from '../../utils/calculatePcOptimalMove';

import PageHeading from '../../components/settings/page-heading/page-heading';
import GameBoard from "../../components/game/game-board/game-board";
import UsersProgress from '../../components/game/users-progress/users-progress';
import GameEndingModal from '../../components/game/game-ending-modal/game-ending-modal';

import './game.css';

const Game = ({ gameSettings, setGameSettings }) => {
    const [usersMatches, setUsersMatches] = useState({
        yourMatches: 0,
        pcMatches: 0
    });

    useEffect(() => {
        if (gameSettings.whoseTurn === 'pc' && gameSettings.totalMatches > 0) {
            setTimeout(() => {
                const pcMatchesToTake = calculatePcOptimalMove(usersMatches.pcMatches, gameSettings.totalMatches, gameSettings.maxAllowedToTake);

                setUsersMatches((prevUsersMatches) => ({
                    ...prevUsersMatches,
                    pcMatches: prevUsersMatches.pcMatches + pcMatchesToTake
                }));

                setGameSettings((prevGameSettings) => ({
                    ...prevGameSettings,
                    totalMatches: prevGameSettings.totalMatches - pcMatchesToTake,
                    whoseTurn: 'you',
                }));
            }, 3000);
        }
    }, [gameSettings.whoseTurn]);

    return (
        <div className="page-wrapper game-page">
            <PageHeading
                title={gameSettings.whoseTurn === 'you' ? 'Your turn!' : `Computer's turn!`}
                subtitle={gameSettings.whoseTurn === 'you' ? `Take from 1 to ${gameSettings.maxAllowedToTake} matches` : 'Computer makes its move...'} />

            <GameBoard
                gameSettings={gameSettings}
                setGameSettings={setGameSettings}
                setUsersMatches={(matchesToAdd) => setUsersMatches((prevUsersMatches) => ({
                    ...prevUsersMatches,
                    yourMatches: prevUsersMatches.yourMatches + matchesToAdd
                }))} />

            <UsersProgress
                gameSettings={gameSettings}
                usersMatches={usersMatches} />

            {
                gameSettings.totalMatches === 0 ? (
                    usersMatches.yourMatches % 2 === 0 ? <GameEndingModal result={'win'} /> : <GameEndingModal result={'lose'} />
                ) : null
            }
        </div>
    )
}

export default Game;
