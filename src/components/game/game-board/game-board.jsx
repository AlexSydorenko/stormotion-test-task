import { useEffect, useState } from "react";

import { GiMatchHead } from "react-icons/gi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import './game-board.css';

const GameBoard = ({ gameSettings, setGameSettings, setUsersMatches }) => {
    const [matchesToTake, setMatchesToTake] = useState(1);

    useEffect(() => {
        if (matchesToTake > gameSettings.totalMatches) {
            setMatchesToTake(gameSettings.totalMatches);
        }
    }, [gameSettings.totalMatches, matchesToTake]);

    const handlePlusMatchesToTake = () => {
        if (gameSettings.whoseTurn === 'you' && 
            matchesToTake < gameSettings.maxAllowedToTake &&
            matchesToTake < gameSettings.totalMatches) {
                setMatchesToTake(prev => prev + 1);
        }
    }

    const handleMinusMatchesToTake = () => {
        if (gameSettings.whoseTurn === 'you' && matchesToTake > 1) {
            setMatchesToTake(prev => prev - 1);
        }
    }

    const handleMatchesTake = (e) => {
        e.preventDefault();

        if (gameSettings.whoseTurn === 'you') {
            setUsersMatches(matchesToTake);
            setGameSettings((prevGameSettings) => ({
                ...prevGameSettings,
                totalMatches: prevGameSettings.totalMatches - matchesToTake,
                whoseTurn: 'pc',
            }));
        }
    }

    return (
        <div className="game-board-wrapper">
            <div className="matches-wrapper">
                {
                    gameSettings.totalMatches > 0 ? (
                        [...new Array(gameSettings.totalMatches)].map((_, index) => {
                            return <GiMatchHead key={index} className="match-icon" />
                        })
                    ) : null
                }
                
            </div>

            <form className={ `matches-to-take-form ${gameSettings.whoseTurn === 'you' ? "matches-to-take-form-active" : ""}` }>
                <p className="matches-to-take-info">
                    Choose number of matches to take:
                </p>
                <div className="matches-to-take-counter">
                    <IoIosArrowUp 
                        onClick={ () => handlePlusMatchesToTake() }
                        className="counter-arrow" />

                    <div className="matches-to-take-count">
                        { matchesToTake }
                    </div>

                    <IoIosArrowDown 
                        onClick={ () => handleMinusMatchesToTake() }
                        className="counter-arrow" />
                </div>
                <button 
                    onClick={ (e) => handleMatchesTake(e) }
                    className="matches-to-take-submit-btn">
                        Confirm
                </button>
            </form>
        </div>
    )
}

export default GameBoard;
