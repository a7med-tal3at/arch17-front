import { combineReducers } from 'redux'

import user from './userReducer'
import Project from './projectReducer';


const rootReducer = combineReducers({ user , Project });

export default rootReducer;