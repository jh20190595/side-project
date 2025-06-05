import { supabase } from '@/lib/supabase';
import sha256 from 'crypto-js/sha256';

const submitComment = async ({ nickname, password, content, type }) => {
    const passwordHash = sha256(password).toString();

    const {  error } = await supabase
        .from('comments')
        .insert([
            {
                writer_name: nickname || '익명',
                password_hash: passwordHash,
                content: content,
                type
            }
        ]);

    if (error) {
        console.error('댓글 저장 실패:', error);
        alert('댓글 저장 중 오류가 발생했습니다.');
        return false;
    }
    return true;
}

export default submitComment;