
import {
    MAX_MOBILE_WIDTH,
    MAX_IPAD_WIDTH,
    MAX_PC_WIDTH
} from '@/constants/view'

export const isMobile = (width:number)=> width<=MAX_MOBILE_WIDTH

export const isIpad = (width:number)=> width<=MAX_IPAD_WIDTH && width>MAX_MOBILE_WIDTH

export const isPC = (width:number)=> width>MAX_IPAD_WIDTH &&  width<MAX_PC_WIDTH

export const isOverPC = (width:number)=> width>MAX_PC_WIDTH