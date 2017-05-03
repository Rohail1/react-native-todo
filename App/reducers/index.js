/**
 * Created by Rohail on 4/27/2017.
 */

import {ADD_NOTES,DELETE_NOTE,DELETE_NOTES,UPDATE_NOTE,LOAD_DATA} from '../common/constants'
import {AsyncStorage} from "react-native"
const TODO = (note) => {
  return {
    note,
    id : Math.random()
  }
};


const removeTodo = (todos,id) => {
  return todos.filter(todo => todo.id !== id);
};

const updateTodo = (todos,action) => {
  return todos.map(todo => {
    todo.note =  todo.id === action.id ? action.note : todo.note;
    return todo;
  });
};


const TodoReducers = (state = [],action) => {

  let todos = [];
  switch (action.type){
    case ADD_NOTES:
      todos = action.note !== '' ? [TODO(action.note),...state] : [...state];
      AsyncStorage.setItem('todos',JSON.stringify(todos));
      return todos;
    case DELETE_NOTE:
      todos = removeTodo(state,action.id);
      AsyncStorage.setItem('todos',JSON.stringify(todos));
      return todos;
    case UPDATE_NOTE:
      todos = updateTodo(state,action);
      AsyncStorage.setItem('todos',JSON.stringify(todos));
      return todos;
    case DELETE_NOTES:
      AsyncStorage.clear();
      return [];
    case LOAD_DATA:
      return action.data ? JSON.parse(action.data): state;
    default:
      return state;
  }

};

export default TodoReducers
