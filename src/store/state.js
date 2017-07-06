import  { playMode } from '../assets/js/config'

const state = {
    singer: {},
    playing: false,         //是否播放
    fullScreen: false,      //是否全屏
    playList: [],           //播放列表
    sequenceList: [],
    mode : playMode.sequence,
    currentIndex : -1

}

export default state