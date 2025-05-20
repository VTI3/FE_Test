import React, { useState } from "react";

/**
 * todo: 根据current和length确定高亮显示哪个点
 */

interface Iprops {
    current:number;
    length: number
}

const Slider = (props: Iprops) => {
    const {current, length} = props;


    return <div>
        todo: slider
    </div>

}

export default Slider