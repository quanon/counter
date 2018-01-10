import Vuex from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies

const findCounterByTitle =
  (counters, title) => counters.find(counter => counter.title === title);

const store = () => new Vuex.Store({
  state: {
    counters: []
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    countUp(state, { title }) {
      const counter = findCounterByTitle(state.counters, title);
      counter.count += 1;
    },
    countDown(state, { title }) {
      const counter = findCounterByTitle(state.counters, title);
      counter.count -= 1;
    },
    reset(state, { title }) {
      const counter = findCounterByTitle(state.counters, title);
      counter.count = 0;
    },
    addCounter(state, { title, emoji }) {
      state.counters = [...state.counters, {
        title,
        count: 0,
        emoji
      }];
    },
    removeCounter(state, { title }) {
      state.counters =
        state.counters.filter(counter => counter.title !== title);
    }
  },
  /* eslint-enable no-param-reassign */
  actions: {
    countUp({ commit }, payload) {
      commit('countUp', payload);
    },
    countDown({ commit }, payload) {
      commit('countDown', payload);
    },
    reset({ commit }, payload) {
      commit('reset', payload);
    },
    addCounter({ commit }, payload) {
      commit('addCounter', payload);
    },
    removeCounter({ commit }, payload) {
      commit('removeCounter', payload);
    }
  },
  getters: {
    exist: state =>
      title =>
        state.counters.some(counter => counter.title === title)
  }
});

export default store;
