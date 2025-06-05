import styles from './CommentList.module.css'

export default function CommentDelete({
                                    checkPassword,
                                    setCheckPassWord,
                                    onDelete,
                                    onCancel,
                                    commentId
                                    }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2 className={styles.CheckPasswordTop}>댓글 삭제하기</h2>
                <div className={styles.CheckPasswordInput}>
                    <div className={styles.CheckPasswordInputTop}>
                        <h3>비밀번호</h3>
                    </div>
                    <input
                        type="password"
                        value={checkPassword}
                        onChange={e => setCheckPassWord(e.target.value)}
                        className={styles.inputtext}
                        autoFocus
                    />
                </div>
                <div className={styles.CheckPasswordbtnwrap}>
                    <button className={styles.CheckPasswordbtndelete} onClick={() => onDelete(commentId)}>확인</button>
                    <button className={styles.CheckPasswordbtncancel} onClick={onCancel}>취소</button>
                </div>
            </div>
        </div>
    )
}