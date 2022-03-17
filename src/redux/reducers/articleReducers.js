import React from 'react'
// import * as types from '../types/types';
import { typesArticle } from '../types/types';

const initialState = {
    article: []

}

const articleReducers = (state = initialState, action) => {
    switch(action.type) {
        case typesArticle.add:
            return{
                article: [action.payload]
            }
        case typesArticle.list:
            return{
              article: [...action.payload]
            }
        case typesArticle.edit:
            return{
                ...state
            }
        case typesArticle.delete:
            return{
                 ...state
           }
              
        default: 
           return state;
    }
}

// const initialState = {
//     articles: [],
//     article: {},
// };
// const articleReducers = (state = initialState, action) => {
//     switch(action.type) {
//         case types.GET_ARTICLES:
//             return {
//                 ...state,
//                 articles: action.payload,
//             };
//         default: 
//             return state;
//     }

// }
export default articleReducers
