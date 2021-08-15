import { combineReducers } from 'redux'

import { CounterState, counterReducer } from './counterReducer'
import message from './message'
import auth from './auth'

export interface RootState {
    counter: CounterState
}

export const rootReducer = combineReducers<RootState | any>({
    counter: counterReducer,
    auth,
    message
})
