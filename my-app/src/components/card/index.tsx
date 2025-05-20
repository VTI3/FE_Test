import React, { useState } from "react";
import {ICardProps} from '@/types'

// todo: 样式
const Card = (props: ICardProps) => {
    const {text, image} = props;

    return <div>
        <p>{text}</p>
        <img src={image} />
    </div>

}

export default Card