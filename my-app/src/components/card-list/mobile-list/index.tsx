/**
 * mobile和ipad可以复用一个基础组件，唯一区别是距离页面边距
 */
import React, { useState, useEffect } from "react";
import {DEVICE_TYPE} from '@/constants/device'
import Card from '@/components/card'
import Slider from '@/components/slider'
import {ICardProps} from '@/types'
import styles from "./page.module.css";

interface Iprops {
    data: Array<ICardProps>
    type: DEVICE_TYPE
}

const MobileList = (props: Iprops) => {
    const {data,type} = props;
    const [focusedCardIndex, setFocusedCardIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(0)

    const onSlide = (direction: 'left' | 'right') => {
        if (direction === 'left' && focusedCardIndex < data.length - 1) {
            setFocusedCardIndex(prev => prev + 1)
        } else if (direction === 'right' && focusedCardIndex > 0) {
            setFocusedCardIndex(prev => prev - 1)
        }
    }

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            setTouchStart(e.touches[0].clientX)
        }

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEnd = e.changedTouches[0].clientX
            const diff = touchStart - touchEnd

            if (Math.abs(diff) > 50) { // 滑动距离超过50px才触发
                onSlide(diff > 0 ? 'left' : 'right')
            }
        }

        window.addEventListener('touchstart', handleTouchStart)
        window.addEventListener('touchend', handleTouchEnd)

        return () => {
            window.removeEventListener('touchstart', handleTouchStart)
            window.removeEventListener('touchend', handleTouchEnd)
        }
    }, [touchStart, data.length])

    return <div className={`${styles.base} ${type === DEVICE_TYPE.PHONE ? styles.phone : styles.ipad}`}>
        <Card data={data[focusedCardIndex]} /> 
        <Slider current={focusedCardIndex} length={data.length} />
    </div>
}

export default MobileList