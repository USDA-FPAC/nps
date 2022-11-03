
import { searchService } from '@/Shared/_services/search.service';


const state = () =>({
  isLoaded: false,
  errors: [],
  searchResults: []
});

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getSearchResults: state => state.searchResults  
};

const actions = {

  setSearch( { commit, state, rootState }, payload ){
    commit('SET_ERRORS', []);

    searchService.getResults(payload, (result) => {
      if(result.errors){
        commit('SET_ERRORS', result.errors);
      } else {
        commit('SET_RESULTS', result.data );
      }
    });
  }  

};

const mutations = {
  SET_ERRORS(state, payload){
    state.errors = payload;
  },

  SET_RESULTS( state, payload ){
    state.searchResults = payload.results;
    state.isLoaded = true;
  },

};

export const search = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};