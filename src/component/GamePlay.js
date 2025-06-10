'use client';

import { useState, useEffect } from 'react';
import clothData from '@/lib/clothData';
import foodData from '@/lib/foodData';
import Image from 'next/image';
import styles from './GamePlay.module.css';
import ResultPage from '@/component/Result';
import RankAndSave from '@/lib/RankAndSave';

export default function Gameplay({ type, priceoption }) {

    const [isCorrect, setIsCorrect] = useState(0);
    const [isIndex, setIsIndex] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [quiz, setQuiz] = useState([]);
    const [result, setResult] = useState(false);
    const [locked, setLocked] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [mypercentile, setMyPercentile] = useState(0);

    let GameType = '';

    if (type === 'food') {
        GameType = 'food';
    } else if (type === 'snack') {
        GameType = 'snack';
    } else {
        GameType = 'cloth';
    }

    function shuffleArray(arr) {

        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        return arr;

    }

    useEffect(() => {

        let filtered = [];

        if (type === 'food') {
            filtered = foodData.filter(item => item.type === type);
        } else {
            filtered = clothData.filter(item => item.type === type);
        }
        const shuffle = shuffleArray(filtered);

        setQuiz(shuffle);

    }, [type])

    useEffect(() => {
        const handleNextKeyDown = (e) => {
            if (e.key === 'Enter' && isActive) {
                handleNextQuiz();
            }
        }

        window.addEventListener('keydown', handleNextKeyDown)

        return () => {
            window.removeEventListener('keydown', handleNextKeyDown)
        }

    }, [isActive, isCorrect])


    function handleSubmit(answer) {
        setIsActive(true)
        if (answer === quiz[isCorrect].answer) {
            setCorrectCount(prev => prev + 1);
        }
        setIsIndex(answer)
    }

    const handleNextQuiz = async () => {
        if (locked) return;

        setLocked(true);

        if (isCorrect === 14) {
            const myaccuracy = (correctCount / quiz.length) * 100;
            const totalpercentile = await RankAndSave(myaccuracy);
            setMyPercentile(totalpercentile);
            setResult(true);

        } else {
            setIsCorrect(prev => prev + 1);
            setIsActive(false)
        }

        setTimeout(() => setLocked(false), 300);
    }

    return (

        <div className={styles.playcontainer}>
            {!result ? (
                <>
                    <div className={styles.playimage}>
                        {quiz[isCorrect] && (
                            <Image
                                src={quiz[isCorrect].ImageUrl}
                                alt='logo'
                                width={300}
                                height={300}
                                priority={isCorrect === 0}
                            />
                        )}
                    </div>

                    <div className={styles.textinputcontainer}>
                        {isActive && (
                            <div className={styles.priceshow}>
                                <h2 className={styles.correctPrice}>
                                    {quiz[isCorrect].price.toLocaleString()}원
                                </h2>
                                <button onClick={handleNextQuiz} onKeyDown={e => {
                                    if (e.key === 'Enter' || e.key === '') {
                                        handleNextQuiz();
                                    }
                                }}>다음</button>
                            </div>
                        )}
                        <ul className={styles.priceoption}>
                            {priceoption.map((option, index) => (
                                <li key={index}>
                                    <button
                                        className={styles.quizbutton}
                                        disabled={isActive}
                                        onClick={() => handleSubmit(index + 1)}
                                        style={{
                                            backgroundColor: (isActive ? (quiz[isCorrect].answer === index + 1 ? '#2ECC71' : (isIndex === index + 1 ? '#E74C3C' : '')) : ''),
                                        }}
                                    >
                                        {option}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <div>
                    <ResultPage type={GameType} mypercentile={mypercentile} correctCount={correctCount} />

                </div>
            )}
        </div >

    )

}