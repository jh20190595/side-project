
import { use } from 'react';
import Gameplay from '@/component/GamePlay';

export default function play({params}) {

    const { type } = use(params);

    const clothOption =  ['1 ~ 5만원', '5 ~ 10만원', '10 ~ 30만원', '30만원이상']
    const foodOption = ['30 ~ 100원', '100 ~ 200원' , '200 ~ 400원' , '400원이상']

    const Option = {
        top : clothOption,
        bottom : clothOption,
        food : foodOption
    }

    const priceoption = Option[type];

    return (
        <Gameplay type = {type} priceoption = {priceoption}/>
    )

}