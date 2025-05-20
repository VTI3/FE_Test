'use client'

/**
 * 接受数据
 * 使用 card 组件render
 * render根据媒体条件进行不同展示
 * 
 * mobile： 展示一个，居中，页面边距x
 * ipad：同上，card大小不变，页面边距y
 * pc：并排展示3个，如窗口>1024，容器居中显示，保持1024宽度
 */

import {useWindowSize} from '@/hooks/use-window-size'
import {DEVICE_TYPE} from '@/constants/device'
import { isMobile, isIpad, isPC } from '@/utils/device';
import MobileList from './mobile-list'
import PCList from './pc-list';

interface Iprops<T> {
    data: Array<T>
}

const CardList = <T,>(props: Iprops<T>) => {
    const {data} = props;
    // 获取当前窗口大小hooks
    const {width} = useWindowSize();
    console.debug('width',width)
    if(!data?.length) return null
    
    if(isMobile(width)){
        return <MobileList data={data} type={DEVICE_TYPE.PHONE} />
    }else if(isIpad(width)){
        return <MobileList data={data} type={DEVICE_TYPE.IPAD} />
    }
    return null
    // else if(isPC(width)){
    //     return <PCList data={data} type={DEVICE_TYPE.PC} />
    // }
    // return <PCList data={data} type={DEVICE_TYPE.OVER_PC} />

}



export default CardList