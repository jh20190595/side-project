import { supabase } from '@/lib/supabase';

const RankAndSave = async (myaccuracy) => {
  const { count: lowerCount, error: lowerError } = await supabase
    .from('accuracy')
    .select('*', { count: 'exact', head: true })
    .lt('accuracy', myaccuracy);

  const { count: totalCount, error: totalError } = await supabase
    .from('accuracy')
    .select('*', { count: 'exact', head: true });

  if (lowerError || totalError || totalCount === 0) {
    console.error('오류 발생', lowerError || totalError);
    return false;
  }

  const percentile = 100 - Math.floor((lowerCount / totalCount) * 100); 
  
  const { error: insertError } = await supabase
    .from('accuracy')
    .insert([{ accuracy: myaccuracy }]);

  if (insertError) {
    console.error('정답률 저장 실패', insertError);
  }

  return percentile;
};

export default RankAndSave;
