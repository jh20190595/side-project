'use client';

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import reportComment from '@/lib/reportComment';
import styles from './CommentList.module.css'
import sha256 from 'crypto-js/sha256';
import CommentDelete from '@/component/CommentDelete';

export default function CommentList({ currentComment , type }) {

  const [comments, setComments] = useState([]);
  const [checkPassword, setCheckPassWord] = useState('');
  const [targetCommentId, setTargetCommentId] = useState(null);

  useEffect(() => {

    const fetchComment = async () => {

      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('type', type)
        .order('created_at', { ascending: false })


      if (error) {
        console.error('에러 발생');
      } else {
        setComments(data);
      }

    }

    fetchComment();

  }, [currentComment,type])

  const handleDelete = async (commentid) => {
    const inputHash = sha256(checkPassword).toString();

    const { data, error } = await supabase
      .from('comments')
      .select('password_hash')
      .eq('id', commentid)
      .single();

    if(error) {
      alert('댓글 정보를 불러오는데 실패했습니다.');
      console.error(error);
      return;
    }
    
    if (data?.password_hash === inputHash) {
      await supabase
        .from('comments')
        .delete()
        .eq('id', commentid);

      setComments(prev => prev.filter(comment => comment.id !== commentid));

      setCheckPassWord('');
      alert('댓글이 삭제되었습니다.');
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  function handleCancel() {
    setTargetCommentId(null);
    setCheckPassWord('');
  }

  const handleReport = async (commentId) => {
    
    const success = await reportComment(commentId)

    if(success) {
      alert('신고가 완료되었습니다');
    } else {
      alert('신고 접수가 실패하였습니다.');
    }

  }

  return (
    <div className={styles.CommentListContainer}>
      <ul className={styles.CommentListwrap}>
        {comments.length > 0 &&
          comments.map((comment) => {
            const createdAt = new Date(comment.created_at).toLocaleString('ko-KR', {
              timeZone: 'Asia/Seoul',
            });

            return (
              <div key={comment.id}className={styles.CommentWrap}>
                <li lassName={styles.Comment}>
                  <strong>{comment.writer_name}</strong>    <span style={{ fontSize: '12px', color: '#888' }}>{createdAt}</span>
                  <br />
                  {comment.content}
                </li>
                <div className={styles.CommentOption}>
                  <li><button className={styles.commentOptionbtn} onClick={ () => handleReport(comment.id)}>🚨</button></li>
                  <li><button className={styles.commentOptionbtn} onClick={() => setTargetCommentId(comment.id)}>🗑️</button></li>
                  {targetCommentId === comment.id && (
                    <CommentDelete checkPassword ={ checkPassword } setCheckPassWord = {setCheckPassWord} onDelete = {handleDelete} onCancel = { handleCancel} commentId ={comment.id}/>
                  )}
                </div>

              </div>
            );
          })}
      </ul>



    </div>
  );

}