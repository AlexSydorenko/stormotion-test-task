import { useState } from 'react';

import './matches-settings.css';

const MatchesSettings = ({ gameSettings, setGameSettings }) => {
    const [totalMatchesInput, setTotalMatchesInput] = useState((gameSettings.totalMatches - 1) / 2);
    const [maxAllowedToTakeInput, setMaxAllowedToTakeInput] = useState(gameSettings.maxAllowedToTake);

    const handleTotalMatchesParamChange = (e) => {
        const newTotalCountParam = e.target.value;

        if (newTotalCountParam === '' || (+newTotalCountParam >= 2 && +newTotalCountParam <= 49)) {
            setTotalMatchesInput(newTotalCountParam);
            if (newTotalCountParam !== '') {
                if (maxAllowedToTakeInput > +newTotalCountParam) {
                    setMaxAllowedToTakeInput(newTotalCountParam);
                }

                setGameSettings({
                    ...gameSettings,
                    totalMatches: +newTotalCountParam * 2 + 1,
                    maxAllowedToTake: Math.min(gameSettings.maxAllowedToTake, newTotalCountParam)
                });
            } else {
                setGameSettings({
                    ...gameSettings,
                    totalMatches: 5,
                    maxAllowedToTake: 2
                });
                setMaxAllowedToTakeInput(2);
            }
        } else if (+newTotalCountParam >= 0 && +newTotalCountParam < 2) {
            setTotalMatchesInput(+newTotalCountParam);
        }
    };

    const handleMaxAllowedToTakeChange = (e) => {
        const newMaxAllowedToTake = e.target.value;
        const maxLimit = (gameSettings.totalMatches - 1) / 2;

        if (newMaxAllowedToTake === '' || (+newMaxAllowedToTake >= 2 && +newMaxAllowedToTake <= maxLimit)) {
            setMaxAllowedToTakeInput(newMaxAllowedToTake);
            if (newMaxAllowedToTake !== '') {
                setGameSettings({ ...gameSettings, maxAllowedToTake: +newMaxAllowedToTake });
            } else {
                setGameSettings({ ...gameSettings, maxAllowedToTake: 2 });
            }
        } else if (+newMaxAllowedToTake >= 0 && +newMaxAllowedToTake < 2) {
            setMaxAllowedToTakeInput(+newMaxAllowedToTake);
        }
    };

    return (
        <div className="matches-settings-wrapper">
            <div className="total-matches-settings">
                <span className="matches-settings-static">2 * </span>
                <input
                    onChange={(e) => handleTotalMatchesParamChange(e)}
                    className="settings-input total-matches-param-input"
                    value={ totalMatchesInput }
                    type="number"
                    placeholder='2'
                    min={2}
                    max={49}
                    autoFocus
                />
                <span className="matches-settings-static"> + 1 = </span>
                <span className="total-matches-count">
                    {gameSettings.totalMatches}
                </span>
                <span className="matches-settings-info-text"> matches in the pile</span>
            </div>

            <div className="matches-for-turn-settings">
                <span className="matches-settings-info-text">
                    Number of matches allowed to take on each turn is from
                </span>
                <span className="matches-settings-static"> 1</span>
                <span className="matches-settings-info-text"> to </span>
                <input
                    onChange={(e) => handleMaxAllowedToTakeChange(e)}
                    className="settings-input max-matches-for-turn"
                    value={ maxAllowedToTakeInput }
                    type="number"
                    placeholder='2'
                    min={2}
                    max={(gameSettings.totalMatches - 1) / 2}
                />
            </div>
        </div>
    );
};

export default MatchesSettings;
