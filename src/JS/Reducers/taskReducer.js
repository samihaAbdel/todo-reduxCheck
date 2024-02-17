//import
import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
} from '../ActionsType/actionType'
//initialState
const initialState = {
  listTasks: [
    { id: Math.random(), caption: 'Home Work', isDone: false },
    { id: Math.random(), caption: 'Sport', isDone: false },
  ],
}
//pure function
const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, listTasks: [...state.listTasks, payload] }

    case DELETE_TASK:
      return {
        ...state,
        listTasks: [...state.listTasks.filter((el) => el.id !== payload)],
      }
    case DONE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.map((elt) =>
          elt.id === payload ? { ...elt, isDone: !elt.isDone } : elt
        ),
      }
    case EDIT_TASK:
      return {
        ...state,
        listTasks: state.listTasks.map((elt) =>
          elt.id === payload.id ? { ...elt, caption: payload.newCaption } : elt
        ),
      }
    default:
      return state
  }
}

export default taskReducer
