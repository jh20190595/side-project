'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './page.module.css';
import chractorData from '@/lib/charactor';
import RankAndSave from '@/lib/RankAndSave';
import ResultPage from '@/component/Result';

export default function GameSnackPlay() {

    const [userInput, setUserInput] = useState('');
    const [quiz, setQuiz] = useState([]);
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [mypercentile, setMyPercentile] = useState(0);

    const [count, setCount] = useState(0);

    const startRef = useRef(null);
    const timeRef = useRef(null);


    useEffect(() => {
        if (quiz.length && !result) handleTimer();
        return () => clearInterval(timeRef.current);
    }, [quiz.length, index, result])



    const GameType = 'chractor';

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
        const filtered = chractorData;
        const shuffle = shuffleArray(filtered).slice(0, 10);
        setQuiz(shuffle);
    }, [])

    const handleSubmit = useCallback(async (auto = false) => {

        const current = quiz[index];
        if (!current) return;

        if (!auto && userInput.trim() === '') {
            return;
        }

        const right = clean(userInput) === quiz[index].answer

        if (right) {
            setCorrectCount(c => c + 1);
        }

        const LastQuiz = index >= quiz.length - 1;

        if (LastQuiz) {
            const myaccuracy = (correctCount / quiz.length) * 100;
            const totalpercentile = await RankAndSave(myaccuracy);
            setMyPercentile(totalpercentile);
            setResult(true);
            return;
        }

        setIndex(i => i + 1)
        setUserInput('');
    }, [index, userInput, quiz]);



    const handleTimer = useCallback(() => {
        clearInterval(timeRef.current);
        startRef.current = Date.now();
        setCount(0);

        timeRef.current = setInterval(() => {
            const diff = (Date.now() - startRef.current) / 1000;
            if (diff >= 3) {
                clearInterval(timeRef.current);
                handleSubmit(true);
            } else {
                setCount(diff);
            }
        }, 30);
    }, [handleSubmit]);



    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }, [handleSubmit]);


    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        const preloadImage = () => {
            for (let i = 1; i <= 3; i++) {
                const nextquiz = quiz[index + i];

                if (nextquiz) {
                    const img = new window.Image();
                    img.src = nextquiz.ImageUrl;
                }
            }
        }
        preloadImage();
    }, [index, quiz])

    const widthPct = Math.max(0, ((3 - count) / 3) * 100);

    if (result) {
        return <ResultPage type={GameType} mypercentile={mypercentile} correctCount={correctCount} />
    }

    return (
        <div className={styles.MainContainer}>
            <div className={styles.PlayImageWrap}>
                {quiz[index] && (
                    <>
                        <div className={styles.timeBarWrap}>
                            <div className={styles.timeBar} style={{
                                width: `${widthPct}%`,
                                backgroundColor: `${count >= 2 ? "#f43f5e" : count >= 1 ? "#facc15" : "#fef08a"}`
                            }} />
                        </div>
                        {quiz[index]?.ImageUrl ? (
                            <div className={styles.ImageWrap}>
                                <img
                                    key={index}
                                    className={styles.PlayImage}
                                    src={quiz[index].ImageUrl}
                                    alt='quiz'
                                    width={400}
                                    height={500}
                                />
                            </div>
                        ) : null}
                    </>
                )}
            </div>

            <div className={styles.UserInputContainer}>
                <input
                    className={styles.UserInput}
                    type='text'
                    value={userInput}
                    autoFocus
                    onChange={e => setUserInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit();
                        }

                    }}
                />

                <button className={styles.UserInputbtn} onClick={handleSubmit}>
                    제출
                </button>

            </div>
        </div >
    )
}