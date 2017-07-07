import * as types from './mutation-types'

export const selectPlay = function ({ commit, state }, { list, index }) {
    commit(types.SET_SEQUENCELIST, list)
    commit(types.SET_PLATLIST, list)
    commit(types.SET_CURRENTINDEX, index)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)
}