import { combineReducers } from 'redux'
import commentsRecucer from 'reducers/comments'

export default combineReducers({
	comments: commentsRecucer,
})
