'use client';

import styles from './Comment.module.css';
import { useState } from 'react';
import submitComment from '@/lib/submitComment';
import CommentList from './CommentList';


export default function Comment({ type }) {

    const [comment, setComment] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [currentComment, setCurrentComment] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (comment.trim() === '') {
            setErrorMessage('댓글을 입력해주세요.');
            e.preventDefault()
            return;
        }
        if (nickname.trim() === '') {
            setErrorMessage('닉네임을 입력해주세요.');
            e.preventDefault()
            return;
        }
        if (password.trim() === '') {
            setErrorMessage('비밀번호를 입력해주세요.');
            e.preventDefault()
            return;
        }

        const success = await submitComment({
            nickname,
            password,
            content: comment,
            type: type
        })

        if (success) {
            setComment('');
            setNickname('');
            setPassword('');
            setCurrentComment(prev => !prev);
            alert('댓글 작성 완료!');
        } else {
            setErrorMessage('댓글 작성에 실패했습니다.');
        }
    }

    return (
        <div className={styles.commentContainer}>
            <div className={styles.commentTop}>
                <p style={{ fontSize: '18px', fontWeight: '500' }}>댓글</p>
                <div className={styles.commentInputContainer}>
                    <form onSubmit={handleSubmit} className={styles.commentform}>
                        <textarea
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            placeholder='이 가격 어떻게 생각하세요?'
                            maxLength='125'
                            className={styles.commentBoard}
                        />
                        <div className={styles.commentButton}>
                            <div className={styles.commentSignup}>
                                <input
                                    type='text'
                                    value={nickname}
                                    onChange={e => setNickname(e.target.value)}
                                    placeholder='닉네임'
                                    className={styles.nicknameInput}
                                />
                                <input
                                    type='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder='비밀번호'
                                    className={styles.passwordInput}
                                />
                            </div>
                            <button type='submit' className={styles.commentSubmitButton}>등록</button>
                        </div>
                    </form>
                </div>
            </div>

            {errorMessage && (
                <div className={styles.ErrorOverlay}>
                    <div className={styles.ErrorModal}>
                        <span className={styles.ErrorTop}>오류 !</span>
                         * {errorMessage}
                        <button onClick={ () => setErrorMessage('')}>확인</button>
                    </div>
                </div>
            )}

            <div className={styles.userCommentsContainer}>
                <CommentList currentComment={currentComment} type={type} />
            </div>
        </div>
    )

}