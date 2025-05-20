import React, { useState } from "react";
import {ICardProps} from '@/types'

type Iprops = {
    data: ICardProps
}

// todo: 样式
const Card = (props: Iprops) => {
    const {text, image} = props?.data;

    return <div>
        <p>{text}</p>
        <img src={image} />
    </div>

}

export default Card