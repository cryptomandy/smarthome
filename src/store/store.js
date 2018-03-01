import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import {
    USER_EDITLIST
} from './mutation-types'

Vue.use(Vuex)

const state = {
    userEditList:[],   //用户编辑我的应用后保存
}
const mutations = {
    [USER_EDITLIST](state, res){
        state.userEditList = res.userEditList;
    },
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{  //单独模块

    }
})
