import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import storiesReducer from "./stories-reducer";
import postsReducer from "./posts-reducer";
import workReducer from "./works-reducer";





let reducers = combineReducers({
    stories: storiesReducer,
    posts: postsReducer,
    works: workReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));



window.store = store;



export default store;
