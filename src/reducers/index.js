import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import activeItem from './itemMenu'

const reducers = combineReducers({
  activeItem,
  form: formReducer,
})

export default reducers
