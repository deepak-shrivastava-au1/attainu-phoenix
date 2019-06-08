import {createStore} from 'redux';
//import {store} from 'react-redux';

let reducer = function(oldState, action) {

    //initial state
    let initialState = {
        isMenuLoading: false,
        breeds: [],

        isGalleryLoading: false,
        dogImages: []
    };
    //create a new state in the start
    if(!oldState) {
        return initialState;
    }
    //start by setting new State as the initial state
    let newState = initialState;
    //copy all the things to new state that you need from the old state
    newState.breeds = oldState.breeds;

    if(action.type === "FETCH-MENU"){
         fetch("https://dog.ceo/api/breeds/list/all")
         .then(function(response){
             return response.json();
         })
         .then(function(data) {
           store.dispatch({
               type: "MENU_LOADED",
               data: Object.keys(data.message)
           })
         })
         .catch(function(err) {
             console.log(err);
         });
     
         newState.isMenuLoading = true;
   }
         if(action.type === "MENU_LOADED"){
             newState.breeds = action.data;
         }
         if(action.type === "FETCH_PICTURE"){
             let url = `https://dog.ceo/api/breed/${action.breedName}/images`;
             fetch(url)
             .then(function(response){
                 return response.json();
             })
             .then(function(data){
                 store.dispatch({
                     type: "PICTURE_LOADED",
                     data: data
                 })
             })
             .catch(function(err){
                 console.log(err);
             });

             newState.isGalleryLoading = true;
         }
         if(action.type === "PICTURE_LOADED"){
             newState.dogImages = action.data.message.slice(0, 15);
         }
    return newState;
}

let store = createStore(reducer);

store.subscribe(function(){
    console.log(store.getState() );
});

function storeMapper(state) {
    return state;
}

export {store, storeMapper};