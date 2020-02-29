import Vue from 'vue'
import Vuex  from 'vuex'
import VuexPersistence  from 'vuex-persist'

Vue.use(Vuex)
const vuexPersist = new VuexPersistence({
  storage: localStorage,
})

const store = new Vuex.Store({
    state: {
      count: 0,
      totalTvCount: 10,
      user : [],
    },
    getters :{

    },
    mutations: {
      removeTv(state, amount) {
        // for now we allow Jenny just to remove 
        // one TV at a time.
        state.totalTvCount-= amount
      },
      addTv(state, amount) {
        // re-fill tv stock.
        state.totalTvCount += amount
      },
      add(state, payload){
        // construct a random id
       //  push data into user id,name and email
       //  when new user is created set Tvs to null.
        const ID ='_' + Math.random().toString(36).substr(2, 9);// Random id;
        state.user.push({id: ID, name : payload.firstname, email: payload.email, Tvs : null});
      },
      addTvForUser(state, payload){
        // find index to get the specific index 
        // add amount counter to remove tvs and
        // add into tv user.
        const totalTv = state.user.findIndex(item => item.id === payload.id)
        state.user[totalTv].Tvs += payload.amount
      },
      clearBasket(state, payload){
        // find index to get the specific index
        // clear the basket of user.
        const totalTv = state.user.findIndex(item => item.id === payload.id)
        state.user[totalTv].Tvs = payload.amount
      }
    },
    actions:{
      removeTv(context, amount) {
        // for now we only remove a tv,
        // but this action can contain logic
        // so we could expand it in the future.
        if(context.state.totalTvCount >= amount) {
          // If we enough TVs, ask Jenny to remove it
          context.commit('removeTv', amount)
        }
      },
      addTv(context, amount) {
        //Re-fill tvs.
        if(context.state.totalTvCount === 0){
            context.commit('addTv', amount)
        }
      }
    },
    plugins: [vuexPersist.plugin]

  })

export default store;