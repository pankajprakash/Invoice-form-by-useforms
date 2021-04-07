import {combineReducers } from 'redux'
import {getReducer} from './reducers/getReducer'

export const apiReducer = combineReducers({
   Data : getReducer
})

export default rootReducer;