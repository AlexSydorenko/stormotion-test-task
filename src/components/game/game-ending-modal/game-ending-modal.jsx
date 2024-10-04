import { useNavigate } from 'react-router-dom';

import './game-ending-modal.css';

const GameEndingModal = ({ result }) => {
    const navigate = useNavigate();

    return (
        <div className="game-ending-modal-wrapper">
            <div className="game-ending-modal">
                {
                    result === 'win' ? (
                        <h1 className="game-ending-modal-message">
                            Congratulations! 🎉<br />
                            You won!
                        </h1>
                    ) : (
                        <h1 className="game-ending-modal-message">
                            Ooops, you lost 💔<br />
                            Try again!
                        </h1>
                    )
                }
                <button 
                    onClick={() => {
                        navigate('/settings');
                        window.location.reload();
                    }}
                    className="restart-btn">
                        Play again
                </button>
            </div>
        </div>
    )
}

export default GameEndingModal;
