'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './page.module.css';
import snackData from '@/lib/snackData';
import RankAndSave from '@/lib/RankAndSave';
import ResultPage from '@/component/Result';

export default function GameSnackPlay() {

    const [userInput, setUserInput] = useState('');
    const [quiz, setQuiz] = useState([]);
    const [isCorrect, setIsCorrect] = useState(0);
    const [answerResult, setAnswerResult] = useState('');
    const [result, setResult] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [locked, setLocked] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [mypercentile, setMyPercentile] = useState(0);
    const GameType = 'snack';

    const clean = (input) => input.replace(/\s/g, '').toLowerCase();

    function shuffleArray(arr) {

        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        return arr;

    }

    useEffect(() => {

        setCorrectCount(0);
        const filtered = snackData;
        const shuffle = shuffleArray(filtered);

        setQuiz(shuffle);

    }, [])

    const handleSubmit = useCallback(() => {
        if (locked || userInput.trim() === '') return;

        setLocked(true);

        if (clean(userInput) === quiz[isCorrect].answer) {
            setAnswerResult('정답!');
            setCorrectCount(prev => prev + 1);
        } else {
            setAnswerResult('오답!');
        }

        setIsActive(true);
        setUserInput('');

        setTimeout(() => setLocked(false), 300);
    }, [locked, userInput, quiz, isCorrect]);

    const handleNextQuiz = useCallback(async () => {
        if (locked) return;

        setLocked(true);

        if (isCorrect === 10) {
            const myaccuracy = (correctCount / quiz.length) * 100;
            const totalpercentile = await RankAndSave(myaccuracy);
            setMyPercentile(totalpercentile);
            setResult(true);
        } else {
            setIsCorrect(prev => prev + 1);
            setIsActive(false);
        }

        setTimeout(() => setLocked(false), 300);
    }, [locked, isCorrect, correctCount, quiz.length]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Enter') {
            if (!isActive) {
                handleSubmit();
            } else {
                handleNextQuiz();
            }
        }
    }, [isActive, handleSubmit, handleNextQuiz]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        const preloadImage = () => {
            for (let i = 1; i <= 3; i++) {
                const nextquiz = quiz[isCorrect + 1];
                if (nextquiz) {
                    const img = new window.Image();
                    img.src = nextquiz.ImageUrl;
                }
            }
        }
        preloadImage();
    }, [isCorrect, quiz])

    if (result) {
        return <ResultPage type={GameType} mypercentile={mypercentile} correctCount={correctCount} />
    }

    return (
        <div className={styles.MainContainer}>
            <div className={styles.PlayImageWrap}>
                {quiz[isCorrect] && (
                    <>
                        {quiz[isCorrect]?.ImageUrl ? (
                            <img
                                className={`${styles.PlayImage} ${isActive ? styles.show : ''}`}
                                src={quiz[isCorrect].ImageUrl}
                                alt='logo'
                                width={500}
                                height={500}
                            />
                        ) : null}
                        {!isActive && (
                            <>
                                <div className={styles.blurOverlay1}></div>
                                <div className={styles.blurOverlay2}></div>
                            </>
                        )}
                    </>
                )}
            </div>

            {!isActive ? (
                <div className={styles.UserInputContainer}>
                    <input
                        className={styles.UserInput}
                        type='text'
                        value={userInput}
                        autoFocus
                        onChange={e => setUserInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                if (!isActive) {
                                    handleSubmit();
                                } else {
                                    handleNextQuiz();
                                }
                            }
                        }}
                    />

                    <button className={styles.UserInputbtn} onClick={handleSubmit}>
                        제출
                    </button>
                </div>
            ) : (
                <div className={styles.AnswerCheckForm}>
                    <div className={styles.AnswerCheck}>{answerResult}</div>
                    <p style={{ fontSize: '22px', fontWeight: '500' }}>{quiz[isCorrect].answer}</p>
                    <button
                        className={styles.nextbtn}
                        onClick={() => handleNextQuiz()}
                    >
                        다음
                    </button>
                </div>
            )}
        </div >
    )
}