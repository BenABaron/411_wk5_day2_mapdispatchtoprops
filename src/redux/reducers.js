import { combineReducers } from 'redux'
import * as ActionTypes from './actionTypes'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_CAR :
            return [...state, action.value]
        case ActionTypes.REMOVE_CAR :
            const newState = [...state]
            newState.splice(action.value, 1)
            return newState
        default:
            return state
    }
}

export default combineReducers({ user, cars })