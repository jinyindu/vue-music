/**
 * 
 */
import * as types from './mutation-types'

const mutations = {
    [types.SET_SINGER](state, singer) {
        state.singer = singer
    },
    [types.SET_PLAYING_STATE](state, flag) {
        state.playing = flag
    },
    [types.SET_FULL_SCREEN](state, flag) {
        state.fullScreen = flag
    },
    [types.SET_PLATLIST](state, list) {
        state.playList = list
    },
    [types.SET_SEQUENCELIST](state, list) {
        state.sequenceList = list
    },
    [types.SET_MODE](state, model) {
        state.mode = mode
    },
    [types.SET_CURRENTINDEX](state, index) {
        state.currentIndex = index
    }
}

export default mutations