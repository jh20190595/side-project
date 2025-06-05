
import { supabase } from '@/lib/supabase'

const reportComment = async (commentId) => {

    const { data: reportData, error: selectError } = await supabase
        .from('comments')
        .select('report_count')
        .eq('id', commentId)
        .single();

    if (selectError) {
        console.error('신고 수 조회 실패:', selectError);
        return false;
    }

    const currentCount = reportData?.report_count || 0;

    const { data : _,  error: updateError } = await supabase
        .from('comments')
        .update({ 'report_count': currentCount + 1 })
        .eq('id', commentId);

    if (updateError) {
        console.error('신고 업데이트 실패:', updateError);
        return false;
    }

    return true;

}


export default reportComment;